require 'rails_helper'

RSpec.describe "companies/show", type: :view do
  before(:each) do
    @company = assign(:company, Company.create!(
      :company_name => "Company Name",
      :btw_number => "Btw Number",
      :iban_number => "Iban Number",
      :invoice_id => 2,
      :user_id => 3,
      :quote_id => 4
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Company Name/)
    expect(rendered).to match(/Btw Number/)
    expect(rendered).to match(/Iban Number/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/4/)
  end
end
