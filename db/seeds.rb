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
  ResourceTag.find_or_create_by(name: 'Undergraduate', category: ResourceTag::CATEGORIES[:student])
  ResourceTag.find_or_create_by(name: 'Graduate', category: ResourceTag::CATEGORIES[:student])
  ResourceTag.find_or_create_by(name: 'Service Workers/Staff', category: ResourceTag::CATEGORIES[:student])

  # Campus filters
  ResourceTag.find_or_create_by(name: 'On-Campus', category: ResourceTag::CATEGORIES[:campus])
  ResourceTag.find_or_create_by(name: 'Off-Campus', category: ResourceTag::CATEGORIES[:campus])

  # Community Filters
  ResourceTag.find_or_create_by(name: 'API Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.find_or_create_by(name: 'Black Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.find_or_create_by(name: 'Commuter Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.find_or_create_by(name: 'International Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.find_or_create_by(name: 'LGBTQ+ Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.find_or_create_by(name: 'Muslim Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.find_or_create_by(name: 'Parents and Community', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.find_or_create_by(name: 'Students with Disabilities', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.find_or_create_by(name: 'Transfer Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.find_or_create_by(name: 'Underground Scholars', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.find_or_create_by(name: 'Undocumented Students', category: ResourceTag::CATEGORIES[:community])
  ResourceTag.find_or_create_by(name: 'SSWANA Students', category: ResourceTag::CATEGORIES[:community])
end

def create_resource_categories
  ResourceCategory.find_or_create_by(name: 'Food Support')
  ResourceCategory.find_or_create_by(name: 'Housing Support')
  ResourceCategory.find_or_create_by(name: 'Economic Support')
  ResourceCategory.find_or_create_by(name: 'Emergency Support')
  ResourceCategory.find_or_create_by(name: 'Holistic Support')
end

def create_users
  # Create admin
  unless User.where(email: 'admin@gmail.com').exists?
    User.create(
      first_name: 'Admin',
      last_name: 'User',
      is_admin: true,
      email: 'admin@gmail.com',
      uid: 'admin@gmail.com',
      provider: 'email',
      password: 'password',
      password_confirmation: 'password'
    )
  end

  # Create non-admin
  unless User.where(email: 'user@gmail.com').exists?
    User.create(
      first_name: 'Regular',
      last_name: 'User',
      is_admin: false,
      email: 'user@gmail.com',
      uid: 'user@gmail.com',
      provider: 'email',
      password: 'password',
      password_confirmation: 'password'
    )
  end
end

puts 'Seeding resources.'
create_resources

puts 'Seeding default resource tags.'
create_resource_tags

puts 'Seeding default resource categories.'
create_resource_categories

puts 'Seeding test admin user.'
create_users
