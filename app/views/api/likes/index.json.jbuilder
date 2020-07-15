json.array! @likes do |like|
    json.set! like.id do
        json.extract! video, :id, :liker_id, :video_id
    end
end