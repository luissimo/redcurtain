require 'rails_helper'

RSpec.describe "items/new", type: :view do
  before(:each) do
    assign(:item, Item.new(
      :quantity => 1,
      :description => "MyText",
      :unitprice => "9.99",
      :total => "9.99",
      :btw => "9.99",
      :invoice_id => 1,
      :user_id => 1,
      :quote_id => 1
    ))
  end

  it "renders new item form" do
    render

    assert_select "form[action=?][method=?]", items_path, "post" do

      assert_select "input#item_quantity[name=?]", "item[quantity]"

      assert_select "textarea#item_description[name=?]", "item[description]"

      assert_select "input#item_unitprice[name=?]", "item[unitprice]"

      assert_select "input#item_total[name=?]", "item[total]"

      assert_select "input#item_btw[name=?]", "item[btw]"

      assert_select "input#item_invoice_id[name=?]", "item[invoice_id]"

      assert_select "input#item_user_id[name=?]", "item[user_id]"

      assert_select "input#item_quote_id[name=?]", "item[quote_id]"
    end
  end
end
