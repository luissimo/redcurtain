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

end
