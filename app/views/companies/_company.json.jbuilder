json.extract! company, :id, :company_name, :btw_number, :iban_number, :invoice_id, :user_id, :quote_id, :created_at, :updated_at
json.url company_url(company, format: :json)