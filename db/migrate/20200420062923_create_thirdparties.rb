class CreateThirdparties < ActiveRecord::Migration[6.0]
  def change
    create_table :thirdparties do |t|
      t.string :kind
      t.string :brand
      t.string :model
      t.integer :price
      t.integer :year

      t.timestamps
    end
  end
end
