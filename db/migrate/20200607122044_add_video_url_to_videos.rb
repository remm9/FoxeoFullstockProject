class AddVideoUrlToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :video_url, :string, null: false, unique: true
    add_index :videos, :video_url
  end
end
