# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(email:"guest@guest.com",password:"asdf1234")
cats = [
  {name:"Joshua",description:"Long maned cat",location:"77 Street", user: user},
  {name:"Garfield's Brother",description:"Super Skinny",location:"Lasagna Street", user: user}
]

cats.each do |cat|
  new_cat = Cat.create(cat)
end
