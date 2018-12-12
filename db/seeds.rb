20.times do
  d = Department.create(
    name: Faker::Commerce.department,
  )
  10.times do
    d.items.create(
      name: Faker::Commerce.product_name,
      description: Faker::GreekPhilosophers.quote,
      price: Faker::Commerce.price,
    )
  end
end

print `clear`
puts "20 Departments Seeded with 10 Items each!"