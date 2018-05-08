class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :owner

  def owner
    object.user.email
  end
end
