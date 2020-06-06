class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :video_title, null: false
      t.text :video_description, null: false
      t.integer :owner_id, null: false, unique: true
      t.timestamps
    end
    add_index :videos, :owner_id
  end
end
