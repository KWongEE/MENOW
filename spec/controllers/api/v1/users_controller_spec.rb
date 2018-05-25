require 'rails_helper'
RSpec.describe Api::V1::UsersController, type: :controller do
  before(:each) do
    user1 = User.create(username:"username", email: "test@test.com", password: "password")
    user2 = User.create(username:"potato", email: "potato@test.com", password: "password")
    # cat1 = Cat.create(name: "Joshua", description: "Long maned cat", location: "77 Street", user: user1)
    # cat2 = Cat.create(name: "Garfield's Brother", description: "Super Skinny", location: "Lasagna Street", user: user1)
  end

  describe "GET#index" do
    it "serves up a JSON with all of my user data" do
      get :index
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      expect(data.length).to eq 2


      expect(data[0]["username"]).to eq "username"
      expect(data[1]["username"]).to eq "potato"

      expect(data[0]["email"]).to eq "test@test.com"
      expect(data[1]["email"]).to eq "potato@test.com"
    end
  end
#
#   describe "GET#show" do
#     before(:each) do
#       @user = User.create(email: "tester@gmail.com", password: "password")
#       @cat = Cat.create(id: 1, name: "Joshua", description: "Long maned cat", location: "77 Street", user: @user)
#     end
#
#     it "should return a cat" do
#       get :show,  params: { id: @cat.id }
#       returned_json = JSON.parse(response.body)
#
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq "application/json"
#
#       expect(returned_json["name"]).to eq @cat.name
#       expect(returned_json["description"]).to eq @cat.description
#       expect(returned_json["location"]).to eq @cat.location
#       expect(returned_json["id"]).to eq @cat.id
#       expect(returned_json["lat"]).to eq @cat.lat
#       expect(returned_json["lng"]).to eq @cat.lng
#       expect(returned_json["user_id"]).to eq @user.id
#
#       expect(returned_json).to be_kind_of(Hash)
#       expect(returned_json).to_not be_kind_of(Array)
#     end
#   end
end
