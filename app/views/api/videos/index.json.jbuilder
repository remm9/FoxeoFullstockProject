@videos.each do |video| 
  json.set! video.id do 
    # json.partial! 'api/videos/video', video: video #not sure about path, 'video'
    json.partial! 'video', video: video 
  end
end