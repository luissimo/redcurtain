require 'rails_helper'

RSpec.describe "items/index", type: :view do
  before(:each) do
    assign(:items, [
      Item.create!(
        :quantity => 2,
        :description => "MyText",
        :unitprice => "9.99",
        :total => "9.99",
        :btw => "9.99",
        :invoice_id => 3,
        :user_id => 4,
        :quote_id => 5
      ),
      Item.create!(
        :quantity => 2,
        :description => "MyText",
        :unitprice => "9.99",
        :total => "9.99",
        :btw => "9.99",
        :invoice_id => 3,
        :user_id => 4,
        :quote_id => 5
      )
    ])
  end

  it "renders a list of items" do
    render
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => 4.to_s, :count => 2
    assert_select "tr>td", :text => 5.to_s, :count => 2
  end
end
