# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
    validates :body, :author_id, :video_id, presence: true
    validates :author_id, :video_id, uniqueness: true

    belongs_to :liker,
        foreign_key: :liker_id,
        class_name: "User"

    belongs_to :video,
        foreign_key: :video_id,
        class_name: "Video"
        
end
