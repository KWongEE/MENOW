class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :spotter, :user_id

  def spotter
    object.user.email
  end
end
