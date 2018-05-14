class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # attr_accessor :login

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

#   def self.find_first_by_auth_conditions(warden_conditions)
#   conditions = warden_conditions.dup
#   if login = conditions.delete(:login)
#     where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
#   else
#     where(conditions).first
#   end
# end
end
