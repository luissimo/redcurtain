require 'rails_helper'

RSpec.describe "companies/index", type: :view do
  before(:each) do
    assign(:companies, [
      Company.create!(
        :company_name => "Company Name",
        :btw_number => "Btw Number",
        :iban_number => "Iban Number",
        :invoice_id => 2,
        :user_id => 3,
        :quote_id => 4
      ),
      Company.create!(
        :company_name => "Company Name",
        :btw_number => "Btw Number",
        :iban_number => "Iban Number",
        :invoice_id => 2,
        :user_id => 3,
        :quote_id => 4
      )
    ])
  end

  it "renders a list of companies" do
    render
    assert_select "tr>td", :text => "Company Name".to_s, :count => 2
    assert_select "tr>td", :text => "Btw Number".to_s, :count => 2
    assert_select "tr>td", :text => "Iban Number".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => 4.to_s, :count => 2
  end
end
