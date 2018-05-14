class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :cats, :avatar, :username
end
