class Cat < ApplicationRecord
  validates :name, null:false
  validates :description, null:false
  validates :location, null:false

  belongs_to :user
  
  mount_uploader :image, CatPhotoUploader
end
