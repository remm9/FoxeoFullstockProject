class RemovePreview < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :preview, :string
  end
end
