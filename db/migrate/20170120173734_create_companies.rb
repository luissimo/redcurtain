class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :btw_number
      t.string :iban_number
      t.integer :invoice_id
      t.integer :user_id
      t.integer :quote_id

      t.timestamps
    end
  end
end
