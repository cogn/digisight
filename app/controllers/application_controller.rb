class ApplicationController < ActionController::Base
  protect_from_forgery
 before_filter :authenticate_user!
 layout :layout_by_resource

  def after_sign_out_path_for(resource_or_scope)    
    new_user_session_path
  end

  def after_sign_in_path_for(resource)
  	if params[:login_from] == "kpi_finder"
  		kpi_finder_path
    else
        campaign_email_path
    end
  end

   protected

  def layout_by_resource
    if user_signed_in?
      "application"
    else
      "login_layout"
    end
  end
end
