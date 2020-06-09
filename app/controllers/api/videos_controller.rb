class Api::VideosController < ApplicationController

    def index
        @videos = Video.all # ? do i need to filter by owner
        render :index
    end

    def new
        @video = Video.new
        render :new
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end

    def create
        @video = Video.new(video_params)
        @video.owner_id = current_user.id # comment in if needed
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages , status: 422
        end
    end

    def update
        @video = Video.find(params[:id])
        if @video.update(video_params)
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = Video.find(params[:id])
        @video.destroy
        render :index
    end

    def video_params 
        params.require(:video).permit(:video_title, :video_description, :owner_id, :video_url)
    end

end
