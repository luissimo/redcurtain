require 'rails_helper'

RSpec.describe "quotes/index", type: :view do
  before(:each) do
    assign(:quotes, [
      Quote.create!(
        :number => "Number",
        :currency => "Currency",
        :btwtotal => "9.99",
        :subtotal => "9.99",
        :total => "9.99",
        :user_id => 2
      ),
      Quote.create!(
        :number => "Number",
        :currency => "Currency",
        :btwtotal => "9.99",
        :subtotal => "9.99",
        :total => "9.99",
        :user_id => 2
      )
    ])
  end

  it "renders a list of quotes" do
    render
    assert_select "tr>td", :text => "Number".to_s, :count => 2
    assert_select "tr>td", :text => "Currency".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
  end
end
