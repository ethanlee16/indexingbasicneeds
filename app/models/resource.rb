# frozen_string_literal: true
# == Schema Information
#
# Table name: resources
#
#  id                 :bigint(8)        not null, primary key
#  title              :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  body               :text
#  description        :text
#  address            :hstore
#  contact_info       :text
#  cost               :decimal(8, 2)
#  link               :string
#  eligibility        :text
#  notes              :text
#  hours_of_operation :text
#  cost_description   :text
#  deadlines          :text
#  admin_note         :text
#

class Resource < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true

  has_many :resource_tag_instances, dependent: :destroy
  has_many :resource_tags, through: :resource_tag_instances
  accepts_nested_attributes_for :resource_tag_instances, allow_destroy: true

  has_many :resource_categories_resources, dependent: :destroy
  has_many :resource_categories, through: :resource_categories_resources
  accepts_nested_attributes_for :resource_categories_resources, allow_destroy: true

  acts_as_votable

  # Filter by multiple tags on OR condition
  scope :by_tags, ->(tag_ids) { filter_by_tags(tag_ids) }
  scope :by_category, ->(category_id) { filter_by_category(category_id) }
  scope :ordered, ->(method) { order(ORDER_METHODS.fetch(method.to_sym, DEFAULT_ORDER_METHOD)) }
  scope :with_query, ->(query) { simple_search(query) }

  ORDER_METHODS = {
    created_asc: { created_at: :asc },
    created_desc: { created_at: :desc },
    updated_asc: { updated_at: :asc },
    updated_desc: { updated_at: :desc },
    upvotes_desc: { cached_votes_score: :desc }
  }.freeze
  DEFAULT_ORDER_METHOD = ORDER_METHODS[:updated_desc]

  def self.filter_by_tags(tag_ids)
    joins(:resource_tag_instances)
      .where(resource_tag_instances: { resource_tag_id: tag_ids })
  end

  def self.filter_by_category(category_id)
    joins(:resource_categories_resources)
      .where(resource_categories_resources: { resource_category_id: category_id })
  end

  def self.simple_search(query)
    ransack(title_cont: query, description_cont: query, body_cont: query, m: 'or').result(distinct: true)
  end
end
