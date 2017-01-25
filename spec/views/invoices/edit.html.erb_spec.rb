require 'rails_helper'

RSpec.describe "invoices/edit", type: :view do
  before(:each) do
    @invoice = assign(:invoice, Invoice.create!(
      :number => "MyString",
      :currency => "MyString",
      :btwtotal => "9.99",
      :subtotal => "9.99",
      :total => "9.99",
      :user_id => 1
    ))
  end

  it "renders the edit invoice form" do
    render

    assert_select "form[action=?][method=?]", invoice_path(@invoice), "post" do

      assert_select "input#invoice_number[name=?]", "invoice[number]"

      assert_select "input#invoice_currency[name=?]", "invoice[currency]"

      assert_select "input#invoice_btwtotal[name=?]", "invoice[btwtotal]"

      assert_select "input#invoice_subtotal[name=?]", "invoice[subtotal]"

      assert_select "input#invoice_total[name=?]", "invoice[total]"

      assert_select "input#invoice_user_id[name=?]", "invoice[user_id]"
    end
  end
end
