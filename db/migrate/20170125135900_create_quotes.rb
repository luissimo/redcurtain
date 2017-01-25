class CreateQuotes < ActiveRecord::Migration[5.0]
  def change
    create_table :quotes do |t|
      t.string :number
      t.string :currency
      t.date :date
      t.date :duedate
      t.decimal :btwtotal
      t.decimal :subtotal
      t.decimal :total
      t.integer :user_id

      t.timestamps
    end
  end
end
