class Api::ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def show
    render json: @item
  end

  def create
    item = Item.new(item_params)

    if item.save
      render json: item
    else
      render json: item.errors
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors
    else
  end

  def destroy
    @item.destroy
  end

  private
    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :description, :price)
end
