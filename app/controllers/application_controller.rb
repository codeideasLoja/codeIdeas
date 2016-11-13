class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def skills

    Skills.all

  end

end
