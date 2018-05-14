class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_action :configure_permitted_parameters, if: :devise_controller?
  protected

  def configure_permitted_parameters
    # added_attrs = [:username, :email, :password, :password_confirmation, :remember_me, :avatar, :avatar_cache]
    # devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    # devise_parameter_sanitizer.permit :account_update, keys: added_attrs

  devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :email, :password,
    :password_confirmation, :remember_me, :avatar, :avatar_cache, :remove_avatar) }
    # devise_parameter_sanitizer(:sign_in) { |u| u.permit(:login, :username, :email, :password, :remember_me) }
  devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:username, :email, :password,
    :password_confirmation, :current_password, :avatar, :avatar_cache, :remove_avatar)}
  end
end
