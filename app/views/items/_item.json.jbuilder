json.extract! item, :id, :quantity, :description, :unitprice, :total, :btw, :invoice_id, :user_id, :quote_id, :created_at, :updated_at
json.url item_url(item, format: :json)