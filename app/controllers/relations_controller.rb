class RelationsController < ApplicationController
  before_action :set_relation, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /relations
  # GET /relations.json
  def index
    @relations = current_user.relations.all
    flash.now[:notice] = 'U heeft nog geen klanten toegevoegd' if @relations.empty?
  end

  # GET /relations/1
  # GET /relations/1.json
  def show
  end

  # GET /relations/new
  def new
    @relation = current_user.relations.new

  end

  # GET /relations/1/edit
  def edit
  end

  # POST /relations
  # POST /relations.json
  def create
    @relation = current_user.relations.new(relation_params)

    respond_to do |format|
      if @relation.save
        format.html { redirect_to @relation, notice: 'Relatie is succesvol toegoevoegd' }
        format.json { render :show, status: :created, location: @relation }
      else
        format.html { render :new }
        format.json { render json: @relation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /relations/1
  # PATCH/PUT /relations/1.json
  def update
    respond_to do |format|
      if @relation.update(relation_params)
        format.html { redirect_to @relation, notice: 'Relatie is succesvol toegevoegd' }
        format.json { render :show, status: :ok, location: @relation }
      else
        format.html { render :edit }
        format.json { render json: @relation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /relations/1
  # DELETE /relations/1.json
  def destroy
    @relation.destroy
    respond_to do |format|
      format.html { redirect_to relations_url, notice: 'Relatie is succesvol verwijderd.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
    def set_relation
      @relation = current_user.relations.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def relation_params
      params.require(:relation).permit(:company_name, :first_name, :last_name, :address_line_1, :address_line_2, :zip_code, :country_name, :email_adress, :phone_number, :kvk_number, :btw_number, :iban_number, :bic_number, :bank_holder_name)
    end
end
