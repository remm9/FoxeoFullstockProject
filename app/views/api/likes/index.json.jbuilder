json.array! @likes do |like|
# json.likes @likes do |like|
# @likes.each do |like|
    json.set! like.id do
        json.partial! 'like', like: like
    end
end