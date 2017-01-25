require 'rails_helper'

RSpec.describe "invoices/index", type: :view do
  before(:each) do
    assign(:invoices, [
      Invoice.create!(
        :number => "Number",
        :currency => "Currency",
        :btwtotal => "9.99",
        :subtotal => "9.99",
        :total => "9.99",
        :user_id => 2
      ),
      Invoice.create!(
        :number => "Number",
        :currency => "Currency",
        :btwtotal => "9.99",
        :subtotal => "9.99",
        :total => "9.99",
        :user_id => 2
      )
    ])
  end

  it "renders a list of invoices" do
    render
    assert_select "tr>td", :text => "Number".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
  end
end
