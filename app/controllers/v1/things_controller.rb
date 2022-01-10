class V1::ThingsController < ApplicationController
  def index
    render json: {:things => [
      {
        :name => 'some-thing',
        :guid => '0415674-a0e8-4748-af68-a5f53a05c453'
      },
      {
        :name => 'some-thing2',
        :guid => '0415674-a0e8-4748-af68-a5f53a05c453'
      }
    ]}.to_json
  end 
end