# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_28_034406) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "days", force: :cascade do |t|
    t.integer "avg_heart_rate"
    t.integer "calories"
    t.integer "steps"
    t.date "stats_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_days_on_user_id"
  end

  create_table "fitogachis", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.string "color"
    t.integer "level"
    t.integer "current_exp"
    t.integer "current_energy"
    t.date "died_on"
    t.integer "resurrection_days"
    t.integer "last_experience"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_fitogachis_on_user_id"
  end

  create_table "tokens", force: :cascade do |t|
    t.string "access_token"
    t.string "refresh_token"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_tokens_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "fitbit_id"
    t.date "last_login"
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "days", "users"
  add_foreign_key "fitogachis", "users"
  add_foreign_key "tokens", "users", on_delete: :cascade
end
