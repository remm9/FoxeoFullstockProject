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
require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
