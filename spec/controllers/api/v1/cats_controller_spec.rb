require 'rails_helper'
require 'pry'


RSpec.describe Api::V1::CatsController, type: :controller do
  before(:each) do
    user1 = User.create(email: "test@test.com", password: "password")
    cat1 = Cat.create(name: "Joshua", description: "Long maned cat", location: "77 Street", user: user1)
    cat2 = Cat.create(name: "Garfield's Brother", description: "Super Skinny", location: "Lasagna Street", user: user1)
  end

  describe "GET#index" do
    it "serves up a JSON with all of my cat data" do
      get :index
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      expect(data.length).to eq 2


      expect(data[0]["name"]).to eq "Joshua"
      expect(data[1]["name"]).to eq "Garfield's Brother"

      expect(data[0]["description"]).to eq "Long maned cat"
      expect(data[1]["description"]).to eq "Super Skinny"

      expect(data[0]["location"]).to eq "77 Street"
      expect(data[1]["location"]).to eq "Lasagna Street"
    end
  end

  describe "GET#show" do
    before(:each) do
      @user = User.create(email: "tester@gmail.com", password: "password")
      @cat = Cat.create(id: 1, name: "Joshua", description: "Long maned cat", location: "77 Street", user: @user)
    end

    it "should return a cat" do
      get :show,  params: { id: @cat.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json["name"]).to eq @cat.name
      expect(returned_json["description"]).to eq @cat.description
      expect(returned_json["location"]).to eq @cat.location
      expect(returned_json["id"]).to eq @cat.id
      expect(returned_json["user_id"]).to eq @user.id

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
    end
  end

  describe "POST#create" do
    before(:each) do
      DatabaseCleaner.clean_with :truncation
      @user = User.create(email: "testing@gmail.com", password: "password")
      sign_in(@user)
      @cat = Cat.create( name: "Joshua", description: "Long maned cat", location: "77 Street")
    end

    it "should have a current_user" do
      session[:user_id] = @user.id
      expect(controller.current_user).to eq(@user)
    end

    it "should create a new cat" do
      post(:create, params: {cats: {name: "Joshua",description:"Long maned cat", location: "77 Street"}} )
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json.length).to eq 1
      expect(returned_json.last["name"]).to eq @cat.name
      expect(returned_json.last["description"]).to eq @cat.description
      expect(returned_json.last["location"]).to eq @cat.location
      expect(returned_json.last["spotter"]). to eq @user.email
      expect(returned_json.last["user_id"]). to eq @user.id
    end
  end
end
