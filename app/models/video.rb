class Video < ApplicationRecord
    validates :video_title, :video_description, :owner_id, presence: true
    validates :owner_id, uniqueness: true

    has_one_attached :photo
    has_one_attached :video

    belongs_to :user,
        foreign_key: :owner_id,
        class_name: "User"
end
