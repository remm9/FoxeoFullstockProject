class AddPresenceToLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id
      t.integer :video_id
      t.timestamps
    end 
    change_column_null :likes, :liker_id, false
    change_column_null :likes, :video_id, false
    add_index :likes, :liker_id
    add_index :likes, :video_id
  end
end
