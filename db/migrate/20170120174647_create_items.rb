class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.integer :quantity
      t.text :description
      t.decimal :unitprice, precision: 11, scale: 2
      t.decimal :total,     precision: 11, scale: 2
      t.decimal :btw,       precision: 3,  scale: 2
      t.integer :invoice_id
      t.integer :user_id
      t.integer :quote_id

      t.timestamps
    end
  end
end
