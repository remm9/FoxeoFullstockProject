# json.array! @likes do |like|
#     json.set! like.id do
#         json.extract! like, :id, :liker_id, :video_id
#     end
# end

# json.array! @likes do |like|
@likes.each do |like|
    json.set! like.id do
        json.partial! 'like', like: like
    end
end