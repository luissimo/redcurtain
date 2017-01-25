require 'rails_helper'

RSpec.describe "companies/edit", type: :view do
  before(:each) do
    @company = assign(:company, Company.create!(
      :company_name => "MyString",
      :btw_number => "MyString",
      :iban_number => "MyString",
      :invoice_id => 1,
      :user_id => 1,
      :quote_id => 1
    ))
  end

  it "renders the edit company form" do
    render

    assert_select "form[action=?][method=?]", company_path(@company), "post" do

      assert_select "input#company_company_name[name=?]", "company[company_name]"

      assert_select "input#company_btw_number[name=?]", "company[btw_number]"

      assert_select "input#company_iban_number[name=?]", "company[iban_number]"

      assert_select "input#company_invoice_id[name=?]", "company[invoice_id]"

      assert_select "input#company_user_id[name=?]", "company[user_id]"

      assert_select "input#company_quote_id[name=?]", "company[quote_id]"
    end
  end
end
