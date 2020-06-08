# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all

#users

robert = User.create!(username: "Robert Heinlein", email: "robert@gmail.com", password: "foxeo1")
lem = User.create!(username: "Stanislav Lem", email: "slem@gmail.com", password: "foxeo1")
divov = User.create!(username: "Oleg Divov", email: "odivov@gmail.com", password: "foxeo1")

#videos

video1 = Video.create!(video_title: "nice foxes", video_description: "foxes are super friendly during spring months", owner_id: robert.id )
video2 = Video.create!(video_title: "fox and cheese", video_description: "there is never enough of cheese", owner_id: lem.id )
video3 = Video.create!(video_title: "fox on a couch", video_description: "occupational hazard", owner_id: divov.id )