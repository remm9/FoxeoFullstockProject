class AddVideoId < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :video_id, :integer, null: false, unique: true
    add_index :comments, :video_id 
  end
end
