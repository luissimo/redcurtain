require "rails_helper"

RSpec.describe PagesController, type: :controller do

  describe 'get homepage' do
    it 'renders index page' do
      get :index
      expect(response).to render_template :index
      expect(response).to have_http_status(200)
    end
  end

end
