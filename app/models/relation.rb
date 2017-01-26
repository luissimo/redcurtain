class Relation < ApplicationRecord

  belongs_to :invoice, inverse_of: :relation
  belongs_to :quote, inverse_of: :relation
  belongs_to :user, inverse_of: :relations, optional: true
  validates :company_name, :address_line_1, :zip_code, presence: true

  private

    def display_relation_info
      "#{company_name} | #{address_line_1}"
    end

end
