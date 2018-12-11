5.times do  
  department = Department.create(
    name: Faker::LordOfTheRings.location,
  )
  20.times do 
    Item.create(
      name: Faker::Movies::LordOfTheRings.character,
      description: Faker::TheFreshPrinceOfBelAir.quote,
      price: Faker::Commerce.price,
    )
  end
end
puts "--SUCCESS--"
puts "5 departments created -- 20 items in each"