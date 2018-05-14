class User < ApplicationRecord
  def login=(login)
    @login = login
  end

  def login
    @login || self.username || self.email
  end

  has_many :cats

  mount_uploader :avatar, ProfilePhotoUploader

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
