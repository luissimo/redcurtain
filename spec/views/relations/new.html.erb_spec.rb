require 'rails_helper'

RSpec.describe "relations/new", type: :view do
  before(:each) do
    assign(:relation, Relation.new(
      :company_name => "MyString",
      :first_name => "MyString",
      :last_name => "MyString",
      :address_line_1 => "MyString",
      :address_line_2 => "MyString",
      :zip_code => "MyString",
      :country_name => "MyString",
      :email_adress => "MyString",
      :phone_number => "MyString",
      :kvk_number => "MyString",
      :btw_number => "MyString",
      :iban_number => "MyString",
      :bic_number => "MyString",
      :bank_holder_name => "MyString",
      :invoice_id => 1,
      :user_id => 1,
      :quote_id => 1
    ))
  end

  it "renders new relation form" do
    render

    assert_select "form[action=?][method=?]", relations_path, "post" do

      assert_select "input#relation_company_name[name=?]", "relation[company_name]"

      assert_select "input#relation_first_name[name=?]", "relation[first_name]"

      assert_select "input#relation_last_name[name=?]", "relation[last_name]"

      assert_select "input#relation_address_line_1[name=?]", "relation[address_line_1]"

      assert_select "input#relation_address_line_2[name=?]", "relation[address_line_2]"

      assert_select "input#relation_zip_code[name=?]", "relation[zip_code]"

      assert_select "input#relation_country_name[name=?]", "relation[country_name]"

      assert_select "input#relation_email_adress[name=?]", "relation[email_adress]"

      assert_select "input#relation_phone_number[name=?]", "relation[phone_number]"

      assert_select "input#relation_kvk_number[name=?]", "relation[kvk_number]"

      assert_select "input#relation_btw_number[name=?]", "relation[btw_number]"

      assert_select "input#relation_iban_number[name=?]", "relation[iban_number]"

      assert_select "input#relation_bic_number[name=?]", "relation[bic_number]"

      assert_select "input#relation_bank_holder_name[name=?]", "relation[bank_holder_name]"

      assert_select "input#relation_invoice_id[name=?]", "relation[invoice_id]"

      assert_select "input#relation_user_id[name=?]", "relation[user_id]"

      assert_select "input#relation_quote_id[name=?]", "relation[quote_id]"
    end
  end
end
