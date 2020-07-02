# == Schema Information
#
# Table name: videos
#
#  id                :bigint           not null, primary key
#  video_title       :string           not null
#  video_description :text             not null
#  owner_id          :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Video < ApplicationRecord
    validates :video_title, :video_description, :owner_id, presence: true
    validates :video_title, uniqueness: true

    has_one_attached :video_url
    has_one_attached :preview

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: "User"
end
