class Invoice < ApplicationRecord

  has_one :company, inverse_of: :invoice , dependent: :destroy
  has_one :relation, inverse_of: :invoice, dependent: :destroy
  has_many :items, inverse_of: :invoice, dependent: :destroy
  belongs_to :user, inverse_of: :invoices, optional: true

  accepts_nested_attributes_for :relation, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :items, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :company, reject_if: :all_blank, allow_destroy: true
  validates :number, :currency, :date, :duedate, :btwtotal, :subtotal, :total, presence: true

end
