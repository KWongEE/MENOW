class AvatarUploader < CarrierWave::Uploader::Base
  if Rails.env.test?
  storage :file
else
  storage :fog
end
