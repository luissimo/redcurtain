require 'rails_helper'

RSpec.describe "relations/show", type: :view do
  before(:each) do
    @relation = assign(:relation, Relation.create!(
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
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Company Name/)
    expect(rendered).to match(/First Name/)
    expect(rendered).to match(/Last Name/)
    expect(rendered).to match(/Address Line 1/)
    expect(rendered).to match(/Address Line 2/)
    expect(rendered).to match(/Zip Code/)
    expect(rendered).to match(/Country Name/)
    expect(rendered).to match(/Email Adress/)
    expect(rendered).to match(/Phone Number/)
    expect(rendered).to match(/Kvk Number/)
    expect(rendered).to match(/Btw Number/)
    expect(rendered).to match(/Iban Number/)
    expect(rendered).to match(/Bic Number/)
    expect(rendered).to match(/Bank Holder Name/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/4/)
  end
end
