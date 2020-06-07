class EditPreviewNull < ActiveRecord::Migration[5.2]
  def up
    change_column_default :videos, :preview, true
  end

  def down
    change_column_default :videos, :preview, false
  end
end
