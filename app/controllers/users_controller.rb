class UsersController < ApplicationController
  respond_to :json

  def index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create params[:user]
    render json: @user
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
