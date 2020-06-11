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

video1 = Video.create!(video_title: "Night city", video_description: "NYC night skyline and lights", owner_id: divov.id)
video1.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/IMG_9591.MOV"), filename: 'IMG_9591.MOV')
video2 = Video.create!(video_title: "Beach walk", video_description: "Enjoying nice beach with friends", owner_id: robert.id)
video2.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/IMG_9637.MOV"), filename: "IMG_9637.MOV" )
video3 = Video.create!(video_title: "fox on a couch", video_description: "occupational hazard", owner_id: robert.id)
video3.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/videoplayback.mp4"), filename: "videoplayback.mp4")
video4 = Video.create!(video_title: "Doberman", video_description: "Young european doby ", owner_id: divov.id) 
video4.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/videoplayback+(2).mp4"), filename: "videoplayback+(2).mp4")
video5 = Video.create!(video_title: "Sunny beach", video_description: "Another beautiful day at the beach", owner_id: divov.id)
video5.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/IMG_9658.MOV"), filename: "IMG_9658.MOV")
video6 = Video.create!(video_title: "Funny dog", video_description: "Neighbor's dog was happy to see us", owner_id: divov.id)
video6.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/IMG_9675.MOV"), filename: "IMG_9675.MOV")
video7 = Video.create!(video_title: "Dark sky", video_description: "A gloomy day and a rough see", owner_id: lem.id)
video7.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/IMG_9702.MOV"), filename: "IMG_9702.MOV")
video8 = Video.create!(video_title: "Sunset", video_description: "Colorful sunset in Staten Island ", owner_id: lem.id)
video8.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/IMG_9757.MOV"), filename: "IMG_9757.MOV")
video9 = Video.create!(video_title: "Bridge", video_description: "Verrazano bridge from Staten Island side", owner_id: lem.id)
video9.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/IMG_9801.MOV"), filename: "IMG_9801.MOV")
video10 = Video.create!(video_title: "Dragonfly ", video_description: "Dragonfly 35 bypass", owner_id: divov.id)
video10.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/videoplayback+(3).mp4"), filename: "videoplayback+(3).mp4")
video11 = Video.create!(video_title: "Track sprint", video_description: "New Zealand championship", owner_id: lem.id)
video11.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/videoplayback+(4).mp4"), filename: "videoplayback+(4).mp4")
video12 = Video.create!(video_title: "Alisa's fur", video_description: "The fox looses her winter coat in the spring", owner_id: lem.id)
video12.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/videoplayback+(1).mp4"), filename: "videoplayback+(1).mp4")
video13 = Video.create!(video_title: "NYC", video_description: "Office view on Brooklyn Bridge", owner_id: lem.id)
video13.video_url.attach(io: open("https://foxeo-seeds.s3.amazonaws.com/IMG_9589.MOV"), filename: "IMG_9589.MOV")