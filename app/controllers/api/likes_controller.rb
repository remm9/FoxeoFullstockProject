class LikesController < ApplicationController
    
    def index
        @likes = Like.all
        render :index
    end

    def new
        @like = Like.new
        render :new
    end

    def show
        @like = Like.find(params[:id])
        render :show
    end

    def create
        @like = Like.new(like_params)
        @like.author_id = current_user.id 
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages , status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy
        render :index
    end

    def like_params 
        params.require(:like).permit(:body, :author_id, :video_id)
    end
end
