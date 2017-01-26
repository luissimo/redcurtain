class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  has_many :invoices, inverse_of: :user, dependent: :destroy
  has_many :quotes, inverse_of: :user, dependent: :destroy
  has_many :items,  inverse_of: :user, dependent: :destroy
  has_many :relations, inverse_of: :user, dependent: :destroy
  has_many :companies,  inverse_of: :user, dependent: :destroy

end
