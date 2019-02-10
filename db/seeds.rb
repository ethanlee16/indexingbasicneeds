# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def create_resources
  10.times do |_i|
    Resource.create!(
      title: FFaker::Book.title,
      description: FFaker::Book.description,
      body: FFaker::HTMLIpsum.body,
      address: {
        street: FFaker::AddressUS.street_address,
        city: FFaker::AddressUS.city,
        state: FFaker::AddressUS.state,
        zip: FFaker::AddressUS.state_abbr,
        phone: FFaker::PhoneNumber.short_phone_number
      },
      cost: 12.34,
      link: FFaker::Internet.http_url,
      eligibility: FFaker::Tweet.tweet,
      notes: FFaker::Company.catch_phrase
    )
  end
end

def create_resource_tags
  # Student filters
  ResourceTag.create(name: 'Undergraduate', category: ResourceTag::CATEGORIES[:student])
  ResourceTag.create(name: 'Graduate', category: ResourceTag::CATEGORIES[:student])
  ResourceTag.create(name: 'Service Workers/Staff', category: ResourceTag::CATEGORIES[:student])

  # Campus filters
  ResourceTag.create(name: 'On-Campus', category: ResourceTag::CATEGORIES[:campus])
  ResourceTag.create(name: 'Off-Campus', category: ResourceTag::CATEGORIES[:campus])

  # Community Filters
  ResourceTag.create(name: 'API Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: 'Black Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: 'Commuter Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: 'International Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: 'LGBTQ+ Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: 'Muslim Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: 'Parents and Community', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: 'Students with Disabilities', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: 'Transfer Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: 'Underground Scholars', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: 'Undocumented Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.create(name: 'SSWANA Students', category: ResourceTag::CATEGORIES[:community])
end

def create_resource_categories
  ResourceCategory.create!(name: 'Food Support')
  ResourceCategory.create!(name: 'Housing Support')
  ResourceCategory.create!(name: 'Economic Support')
  ResourceCategory.create!(name: 'Emergency Support')
  ResourceCategory.create!(name: 'Holistic Support')
end

def create_users
  User.create(
    first_name: 'Ken',
    last_name: 'Chen',
    is_admin: true,
    email: 'lbkchen@gmail.com',
    uid: 'lbkchen@gmail.com',
    provider: 'email',
    password: 'password',
    password_confirmation: 'password'
  )
end

puts 'Seeding resources.'
create_resources

puts 'Seeding default resource tags.'
create_resource_tags

puts 'Seeding default resource categories.'
create_resource_categories

puts 'Seeding test admin user.'
create_users
