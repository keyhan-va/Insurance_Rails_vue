module Api
    module V1
        class ThirdpartiesController < ApplicationController
             skip_before_action :verify_authenticity_token
            
            def index
                thirdparties = Thirdparty.order('created_at DESC');
                render json: {status: 'SUCCESS', message:'Loaded Thirdparties', data:thirdparties},status: :ok
            end

            def show
                thirdparty = Thirdparty.find(params[:id])
                render json: {status: 'SUCCESS', message:'Loaded Thirdparty', data:thirdparty},status: :ok
            end

            def create
        
                thirdparty = Thirdparty.new(thirdparty_params)
                if thirdparty.save
                    render json: {status: 'SUCCESS', message:'Saved Thirdparty', data:thirdparty},status: :ok
                else
                    render json: {status: 'ERROR', message:'Thirdparty not saved', data:thirdparty.errors},status: :unprocessable_entity
                end
            end



            def destroy
                thirdparty = Thirdparty.find(params[:id])
                thirdparty.destroy  
                render json: {status: 'SUCCESS', message:'Deleted thirdparty', data:thirdparty},status: :ok
            end

           
            def update
                thirdparty = Thirdparty.find(params[:id])
                if thirdparty.update_attributes(thirdparty_params)
                    render json: {status: 'SUCCESS', message:'Updated Thirdparty', data:thirdparty},status: :ok
                else
                    render json: {status: 'ERROR', message:'Thirdparty not updated', data:thirdparty.errors},status: :unprocessable_entity
                end
            end




            private

            def thirdparty_params
                params.permit(:kind, :brand, :model, :price, :year)
            end




           
        end
    end
end