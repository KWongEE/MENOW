class Cat < ApplicationRecord
  # acts_as_mappable

  validates :name, null:false
  validates :description, null:false
  validates :location, null:false

  belongs_to :user

  mount_uploader :image, CatPhotoUploader

  before_validation :geocode_location
  private
  def geocode_new_location
    geo = Geokit::Geocoders::MultiGeocoder.geocode(location)
    errors.add(:location, "Could not Geocode location") if !geo.success
    self.lat, self.lng = geo.lat,geo.lng if geo.success
  end

  def geocode_location
    geocode_new_location if location_changed?
  end
end

# <GoogleApiWrapper>
#   <Map>
#     <Marker position={{lat: cat.lat, lng: cat.lng}}
#   </Map>
# </GoogleApiWrapper>
