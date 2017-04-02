class SubscribersController < ApplicationController

  before_filter :authenticate_user!

  def new
  end

  def update

    token = params[:stripeToken]

    subscriber = Stripe::Customer.create(
        card: token,
        plan: 4010,
        email: current_user.email
    )

    current_user.subscribed = true
    current_user.stripe_id = subscriber.id
    current_user.save

    redirect_to invoices_path
  end

  # def delete
  #   subscription = Stripe::Subscription.retrieve("sub_3R3PlB2YlJe84a")
  #   subscription.delete(:at_period_end => true)
  #   redirect_to invoices_path
  #   flash.now[:notice] = "Uw abonnement is stopgezet, u kunt nog gebruik maken tot het einde van uw huidige periode."
  # end

end
