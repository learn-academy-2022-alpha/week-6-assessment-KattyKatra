# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)Line 9 is the main controller for the app being called in and establishing the main class for ruby on rails. Line 10 is the start of method index which is used to convey all data in the database.
class BlogPostsController < ApplicationController
  def index
    # ---2)Line 13 is an instance variable and function combo to allow index to call upon all instances of BlogPost
    @posts = BlogPost.all
  end

  # ---3)Lines 17-19 are setting up the show method for the app. Show is used to convey individual objects or instances of a class meeting the params stated (in this case just the id number)
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)Lines 22-24 are setting up the new method allowing a form for the creation of new blog posts in this app. It would be tied to it's own html.erb page in this application to give the user a physical form to fill out.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)Lines 28-33 are used to fully add a new post for the application. This works with the New method to add the post to index or, if it's invalid, prompt the user to retry.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)Line 38 is the part of the edit method allowing the user to pull up a form to manipulate the data of that particular post in the database.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)Lines 44-49 are used in the update method to actually accept or deny the changes to the data in the database. The changes if valid will appear after the edit form is accepted and the post is refreshed, otherwise it will redirect the user back to the edit form.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)Line 58 is used in the destroy method to redirect the user back to the post in case it actually was not deleted/destroyed.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Lines 63 & 64 are the starts of the private method blog_post_params which is used to secure data in the rails app.
  private
  def blog_post_params
    # ---10) Line 66 is the strict requirements and permissions for the params fields on the app. This one has a strict requirement of :blog_post and permits :title and :content to be passed through the params inputs. 
    params.require(:blog_post).permit(:title, :content)
  end
end
