class Cat < ApplicationRecord

  validates :name,  presence: true;
  validates :description,  presence: true;
  validates :location, presence: true;

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
