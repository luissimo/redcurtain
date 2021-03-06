require 'rails_helper'

RSpec.describe "quotes/new", type: :view do
  before(:each) do
    assign(:quote, Quote.new(
      :number => "MyString",
      :currency => "MyString",
      :btwtotal => "9.99",
      :subtotal => "9.99",
      :total => "9.99",
      :user_id => 1
    ))
  end

  it "renders new quote form" do
    render

    assert_select "form[action=?][method=?]", quotes_path, "post" do

      assert_select "input#quote_number[name=?]", "quote[number]"

      assert_select "input#quote_currency[name=?]", "quote[currency]"

      assert_select "input#quote_btwtotal[name=?]", "quote[btwtotal]"

      assert_select "input#quote_subtotal[name=?]", "quote[subtotal]"

      assert_select "input#quote_total[name=?]", "quote[total]"

      assert_select "input#quote_user_id[name=?]", "quote[user_id]"
    end
  end
end
