# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


5.times do
    Thirdparty.create({
        kind: Faker::Lorem.word,
        brand: Faker::Vehicle.manufacture,
        model: Faker::Vehicle.model,
        price: Faker::Number.number(digits: 8),
        year: Faker::Vehicle.year
    })

end