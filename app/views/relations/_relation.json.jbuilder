json.extract! relation, :id, :company_name, :first_name, :last_name, :address_line_1, :address_line_2, :zip_code, :country_name, :email_adress, :phone_number, :kvk_number, :btw_number, :iban_number, :bic_number, :bank_holder_name, :invoice_id, :user_id, :quote_id, :created_at, :updated_at
json.url relation_url(relation, format: :json)