# require 'rails_helper'
#
# RSpec.describe CatsController, type: :controller do
#   before(:each) do
#     user1 = User.create(email: "test@test.com", password: "password")
#     cat1 = Cat.create(name: "Joshua", description: "Long maned cat", location: "77 Street", user: user1)
#     cat2 = Cat.create(name: "Garfield's Brother", description: "Super Skinny", location: "Lasagna Street", user: user1)
#   end
#   describe "POST#create" do
#     before(:each) do
#       DatabaseCleaner.clean_with :truncation
#       @user = User.create(email: "testing@gmail.com", password: "password")
#       sign_in(@user)
#       @cat = Cat.create( name: "Joshua", description: "Long maned cat", location: "77 Street")
#     end
#
#     it "should have a current_user" do
#       session[:user_id] = @user.id
#       expect(controller.current_user).to eq(@user)
#     end
#
#     it "should create a new cat" do
#       post(:create, params: {cat: {name: "Joshua",description:"Long maned cat", location: "77 Street" }} )
#       returned_json = JSON.parse(response.body)
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq "application/json"
#
#       expect(returned_json.length).to eq 1
#       expect(returned_json.last["name"]).to eq @cat.name
#       expect(returned_json.last["description"]).to eq @cat.description
#       expect(returned_json.last["location"]).to eq @cat.location
#       expect(returned_json.last["spotter"]). to eq @user.email
#       expect(returned_json.last["user_id"]). to eq @user.id
#     end
#   end
# end
