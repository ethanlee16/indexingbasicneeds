# frozen_string_literal: true

class ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def dashboard?
    user.is_admin
  end
  
  def index?
    user.is_admin
  end

  def show?
    user.is_admin
  end

  def create?
    user.is_admin
  end

  def new?
    create?
  end

  def update?
    user.is_admin
  end

  def edit?
    update?
  end

  def destroy?
    user.is_admin
  end

  def export? 
    user.is_admin
  end 

  def bulk_delete?
    user.is_admin
  end 

  def show_in_app?
    user.is_admin
  end

  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      scope.all
    end
  end
end
