# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170130113225) do

  create_table "companies", force: :cascade do |t|
    t.string   "company_name"
    t.string   "btw_number"
    t.string   "iban_number"
    t.integer  "invoice_id"
    t.integer  "user_id"
    t.integer  "quote_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "invoices", force: :cascade do |t|
    t.string   "number"
    t.string   "currency"
    t.date     "date"
    t.date     "duedate"
    t.decimal  "btwtotal",   precision: 20, scale: 2
    t.decimal  "subtotal",   precision: 20, scale: 2
    t.decimal  "total",      precision: 20, scale: 2
    t.integer  "user_id"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  create_table "items", force: :cascade do |t|
    t.integer  "quantity"
    t.text     "description"
    t.decimal  "unitprice",   precision: 11, scale: 2
    t.decimal  "total",       precision: 11, scale: 2
    t.decimal  "btw",         precision: 3,  scale: 2
    t.integer  "invoice_id"
    t.integer  "user_id"
    t.integer  "quote_id"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

  create_table "quotes", force: :cascade do |t|
    t.string   "number"
    t.string   "currency"
    t.date     "date"
    t.date     "duedate"
    t.decimal  "btwtotal",   precision: 20, scale: 2
    t.decimal  "subtotal",   precision: 20, scale: 2
    t.decimal  "total",      precision: 20, scale: 2
    t.integer  "user_id"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  create_table "relations", force: :cascade do |t|
    t.string   "company_name"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "address_line_1"
    t.string   "address_line_2"
    t.string   "zip_code"
    t.string   "country_name"
    t.string   "email_adress"
    t.string   "phone_number"
    t.string   "kvk_number"
    t.string   "btw_number"
    t.string   "iban_number"
    t.string   "bic_number"
    t.string   "bank_holder_name"
    t.integer  "invoice_id"
    t.integer  "user_id"
    t.integer  "quote_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.boolean  "subscribed"
    t.string   "stripe_id"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
