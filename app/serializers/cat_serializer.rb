class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :spotter

  def spotter
    object.user.email
  end
end
