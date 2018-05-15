class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :spotter, :user_id, :image, :lat, :lng

  def spotter
    object.user.username
  end
end
