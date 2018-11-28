# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def create_resources
  10.times do |i|
    Resource.create!(
      title: "Resource number #{i}", 
      description: "This is the description for resource number #{i}", 
      body: "<p>Hello</p>"
    )
  end
end

def create_resource_tags 
  # Student filters 
  ResourceTag.create(name: "Undergraduate", category: ResourceTag::CATEGORIES[:student])
  ResourceTag.create(name: "Graduate", category: ResourceTag::CATEGORIES[:student])

  # Campus filters 
  ResourceTag.create(name: "On-Campus", category: ResourceTag::CATEGORIES[:campus])
  ResourceTag.create(name: "Off-Campus", category: ResourceTag::CATEGORIES[:campus])

  # Community Filters
  ResourceTag.create(name: "API Students", category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: "Black Students", category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: "Commuter Students", category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: "International Students", category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: "LGBTQ+ Students", category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: "Muslim Students", category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: "Parents and Community", category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: "Students with Disabilities", category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: "Transfer Students", category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: "Underground Scholars", category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: "Undocumented Students", category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: "SSWANA Students", category: ResourceTag::CATEGORIES[:community])
end

create_resources
create_resource_tags
