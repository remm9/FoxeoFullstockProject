class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        # debugger
        if @user.save
            login(@user)
            render "api/users/show"
            # render json: @user
        else
            render :json => { :errors => @user.errors.full_messages }, :status => 404
        end
    end

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end
