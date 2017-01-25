json.extract! invoice, :id, :number, :currency, :date, :duedate, :btwtotal, :subtotal, :total, :user_id, :created_at, :updated_at
json.url invoice_url(invoice, format: :json)