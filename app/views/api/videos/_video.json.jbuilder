json.extract! video, :id, :video_title, :video_description, :owner_id, :created_at, :all_likes
json.video_url video.video_url.attached? ? url_for(video.video_url) : ""

