import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state ={
      cats: [],
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
          allAddresses.push({name: cat.name, cat_id:cat.id, location: cat.location, lat: parseFloat(cat.lat), lng: parseFloat(cat.lng)})
        })
          this.setState({ catAddresses: allAddresses })

         // Original Map
        let boston = {lat: 42.36008, lng: -71.05888}
        this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: boston
        });

        let locations = []
        this.state.catAddresses.forEach(mapCat => {
          locations.push([{catName: mapCat.name},{catID:mapCat.cat_id}, {lat: mapCat.lat, lng: mapCat.lng}])
        });

        let markers = []
        locations.forEach(location => {
          let marker = new google.maps.Marker({
            position: location[2],
            label: location[0].name,
            icon: 'https://s3.amazonaws.com/menow-production/uploads/cat_marker.png',
            url: `/cats/${location[1].catID}`
          });
          google.maps.event.addListener(marker, 'click', function() {
          window.location.href = this.url;
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
