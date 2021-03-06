class ReviewRepliesController < ApplicationController
    def create
        @review = Review.find(params[:review_id])
        @review_reply = @review.review_replies.build
        @review_reply.body = params[:body]
        @review_reply.user = current_user
        @review_reply.save
        redirect_to "/reviews/#{@review.id}"
    end
    
    def destroy
        @review = Review.find(params[:review_id])
        @review_reply = @review.review_replies.find(params[:id])
        @review_reply.destroy
        redirect_to "/reviews/#{@review.id}"
    end
end


