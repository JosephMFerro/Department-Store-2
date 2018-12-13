25.times do
  d = Department.create(
    name: Faker::Commerce.department,
  )
  10.times do
    d.items.create(
      name: Faker::Commerce.product_name,
      description: Faker::Hipster.paragraph,
      price: Faker::Commerce.price,
    )
  end
end

puts "SUCCESS"
puts "25 departments created with 10 items in each"