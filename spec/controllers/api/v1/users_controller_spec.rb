require 'rails_helper'
RSpec.describe Api::V1::UsersController, type: :controller do
  before(:each) do
    user1 = User.create(username:"username", email: "test@test.com", password: "password")
    user2 = User.create(username:"potato", email: "potato@test.com", password: "password")
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

  describe "GET#show" do
    before(:each) do
      @user = User.create(username:"tester",email: "tester@gmail.com", password: "password")
      @cat = Cat.create(id: 1, name: "Joshua", description: "Long maned cat", location: "77 Street", user: @user)
    end

    it "should return a user" do
      get :show,  params: { id: @user.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json["username"]).to eq @user.username
      expect(returned_json["email"]).to eq @user.email
      expect(returned_json["cats"][0]["name"]).to eq @cat.name
      expect(returned_json["cats"][0]["id"]).to eq @cat.id
      expect(returned_json["cats"][0]["lat"]).to eq @cat.lat
      expect(returned_json["cats"][0]["lng"]).to eq @cat.lng
      expect(returned_json["cats"][0]["location"]).to eq @cat.location
      expect(returned_json["cats"][0]["user_id"]).to eq @cat.user_id

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
    end
  end
end
