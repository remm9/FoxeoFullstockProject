# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  video_id   :integer          not null
#
class Comment < ApplicationRecord
    validates :body, :author_id, :video_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: "User"

    belongs_to :video,
        foreign_key: :video_id,
        class_name: "Video"
        
end
