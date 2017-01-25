require 'rails_helper'

RSpec.describe "relations/index", type: :view do
  before(:each) do
    assign(:relations, [
      Relation.create!(
        :company_name => "Company Name",
        :first_name => "First Name",
        :last_name => "Last Name",
        :address_line_1 => "Address Line 1",
        :address_line_2 => "Address Line 2",
        :zip_code => "Zip Code",
        :country_name => "Country Name",
        :email_adress => "Email Adress",
        :phone_number => "Phone Number",
        :kvk_number => "Kvk Number",
        :btw_number => "Btw Number",
        :iban_number => "Iban Number",
        :bic_number => "Bic Number",
        :bank_holder_name => "Bank Holder Name",
        :invoice_id => 2,
        :user_id => 3,
        :quote_id => 4
      ),
      Relation.create!(
        :company_name => "Company Name",
        :first_name => "First Name",
        :last_name => "Last Name",
        :address_line_1 => "Address Line 1",
        :address_line_2 => "Address Line 2",
        :zip_code => "Zip Code",
        :country_name => "Country Name",
        :email_adress => "Email Adress",
        :phone_number => "Phone Number",
        :kvk_number => "Kvk Number",
        :btw_number => "Btw Number",
        :iban_number => "Iban Number",
        :bic_number => "Bic Number",
        :bank_holder_name => "Bank Holder Name",
        :invoice_id => 2,
        :user_id => 3,
        :quote_id => 4
      )
    ])
  end

  it "renders a list of relations" do
    render
    assert_select "tr>td", :text => "Company Name".to_s, :count => 2
    assert_select "tr>td", :text => "First Name".to_s, :count => 2
    assert_select "tr>td", :text => "Last Name".to_s, :count => 2
    assert_select "tr>td", :text => "Address Line 1".to_s, :count => 2
    assert_select "tr>td", :text => "Address Line 2".to_s, :count => 2
    assert_select "tr>td", :text => "Zip Code".to_s, :count => 2
    assert_select "tr>td", :text => "Country Name".to_s, :count => 2
    assert_select "tr>td", :text => "Email Adress".to_s, :count => 2
    assert_select "tr>td", :text => "Phone Number".to_s, :count => 2
    assert_select "tr>td", :text => "Kvk Number".to_s, :count => 2
    assert_select "tr>td", :text => "Btw Number".to_s, :count => 2
    assert_select "tr>td", :text => "Iban Number".to_s, :count => 2
    assert_select "tr>td", :text => "Bic Number".to_s, :count => 2
    assert_select "tr>td", :text => "Bank Holder Name".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => 4.to_s, :count => 2
  end
end
