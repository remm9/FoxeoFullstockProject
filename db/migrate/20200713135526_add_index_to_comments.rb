class AddIndexToComments < ActiveRecord::Migration[5.2]
  def change
    add_index :comments, :author_id
  end
end
