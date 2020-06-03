class Api::SessionsController < ApplicationController

    def create
        # debugger
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        # debugger
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Invalid username/password combination"], status: 401
        end

    end

    def destroy
        logout
        render json: {}
    end

end
