class Thirdparty < ApplicationRecord
    validates :kind, presence: true
    validates :brand, presence: true
    validates :model, presence: true
    validates :price, presence: true
    # validates :year, presence: true


end
