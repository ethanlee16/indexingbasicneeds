# frozen_string_literal: true

class ResearchFilePolicy < ApplicationPolicy
  def create?
    user.is_admin
  end
end
