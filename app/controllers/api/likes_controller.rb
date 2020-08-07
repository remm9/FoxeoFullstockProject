class Api::LikesController < ApplicationController
    
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
        # @like.liker_id = current_user.id 
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages , status: 422
        end
    end

    # def destroy
    #     @like = Like.find(params[:id])
    #     @like.destroy
    #     render :show
    #     # respond_to do |f|
    #     #     f.html { redirect_to :index }
    #     #     f.json { head :no_content }
    #     # end
    # end
    def destroy
        @like = Like.find_by(id: params[:id])
        if @like 
            @like.destroy
            render :index
        else
            render json: ['Cannot find like'], status: :not_found
        end
    end

    def like_params 
        params.require(:like).permit(:liker_id, :video_id)
    end

end
