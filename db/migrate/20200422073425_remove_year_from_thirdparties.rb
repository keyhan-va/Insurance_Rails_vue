class RemoveYearFromThirdparties < ActiveRecord::Migration[6.0]
  def change

    remove_column :thirdparties, :year, :integer
  end
end
