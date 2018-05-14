class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :spotter, :user_id, :image

  def spotter
    object.user.username
  end
end
