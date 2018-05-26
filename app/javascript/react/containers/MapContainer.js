import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state ={
      cats: []

    }
    this.initMap=this.initMap.bind(this)
    this.callMap=this.callMap.bind(this)
  }

  componentDidMount(){
    this.callMap()
  }

  callMap(){
    window.initMap = this.initMap;
    loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyDHJiq_ybQuonWlaOSroWGWGB1_pSmZLhU&callback=initMap")
  }

  initMap(){
    fetch('/api/v1/cats')
      .then(response => {
        if (response.ok){
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(body => {
        this.setState({
          cats: body,
        })
        let allAddresses = []
        let potato = this.state.cats.map(cat => {
          allAddresses.push({name: cat.name, cat_id:cat.id, location: cat.location, image: cat.image, lat: parseFloat(cat.lat), lng: parseFloat(cat.lng)})
        })
          this.setState({ catAddresses: allAddresses })

         // Original Map

        let boston = {lat: 42.36008, lng: -71.05888}

        this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: boston
        });
        if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           let pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };
           // infoWindow.setPosition(pos);
           // infoWindow.setContent('Location found.');
           // infoWindow.open(map);
           this.map = new google.maps.Map(document.getElementById('map'), {
             zoom: 14,
             center: pos
           });
         });
       }

        let locations = []
        this.state.catAddresses.forEach(mapCat => {
          locations.push([{catName: mapCat.name},{catID:mapCat.cat_id}, {lat: mapCat.lat, lng: mapCat.lng}, {image: mapCat.image}])
        });



        let markers = []
        locations.forEach(location => {
          let marker = new google.maps.Marker({
            position: location[2],
            label: location[0].name,
            animation: google.maps.Animation.DROP,
            icon: 'https://s3.amazonaws.com/menow-production/uploads/cat_marker.png',
            url: `/cats/${location[1].catID}`
          });
          function toggleBounce() {
            if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
            } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
            }
          }
          var contentString = '<div class="infowindow">' +
          `<div class="infowindow_name">${location[0].catName}</div>` +
          `<img class="infowindow_image" src=${location[3].image.url}>` + '</div>';

          let infowindow = new google.maps.InfoWindow({
              content: contentString
            });

          google.maps.event.addListener(marker,'mouseover', function(){
          infowindow.open(map, marker);
          toggleBounce();
          });

          google.maps.event.addListener(marker, 'click', function() {
          window.location.href = this.url;
          toggleBounce();
          });
          google.maps.event.addListener(marker,'mouseout', function(){
          toggleBounce();
          infowindow.close(map, marker);
          });

          markers.push(marker)
          marker.setMap(this.map)
        })

      })
      .catch(error => console.error(`Error in ${error.message}`));
  }
  render(){
    return(
      <div className="map" id="map"> </div>
    )
  }
}

export default MapContainer;

function loadJS(src) {
  let ref = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}
