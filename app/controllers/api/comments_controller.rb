class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render :index
    end

    def new
        @comment = Comment.new
        render :new
    end

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id 
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages , status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    # def destroy
    #     @comment = Comment.find(params[:id])
    #     @comment.destroy
        
    #     # @comments = Comment.all
    #     render :index
    # end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        respond_to do |f|
            f.html { redirect_to :index }
            f.json { head :no_content }
        end
    end

    def comment_params 
        params.require(:comment).permit(:body, :author_id, :video_id)
    end
end
