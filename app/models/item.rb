class Item < ApplicationRecord

  belongs_to :invoice, inverse_of: :items, dependent: :destroy
  belongs_to :quote, inverse_of: :items, dependent: :destroy
  belongs_to :user,  inverse_of: :items, optional: true


  # btw calculation
  #def btw_calc
  #   multiple_products = self.quantity * self.unitprice
  #   btw_without_discount = multiple_products * ((self.btw / 100) + 1)
  #  update_attribute(:total, btw_without_discount)
  # end

end
