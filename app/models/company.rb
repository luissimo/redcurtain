class Company < ApplicationRecord

  belongs_to :invoice, inverse_of: :company
  belongs_to :quote, inverse_of: :company
  belongs_to :user, inverse_of: :companies, optional: true

  # mount_uploader :picture, PictureUploader
  # validate :picture_size

  validates :company_name, :iban_number, presence: true

  private

 # validate the size of an uploaded picture
 # def picture_size
 #   if picture.size > 5.megabytes
 #     errors.add(:picture, 'Logo mag niet groter zijn dan 5MB')
 #   end
 # end

    def display_company_info
      "##{id} | #{company_name}"
    end

end
