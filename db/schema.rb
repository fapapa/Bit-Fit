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

ActiveRecord::Schema.define(version: 2019_12_05_050948) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "battles", force: :cascade do |t|
    t.bigint "creator_id", null: false
    t.bigint "opponent_id", null: false
    t.bigint "winner_id"
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "accepted", default: false
    t.boolean "viewed_accepted", default: false
    t.boolean "creator_viewed", default: false
    t.boolean "opponent_viewed", default: false
    t.index ["creator_id"], name: "index_battles_on_creator_id"
    t.index ["opponent_id"], name: "index_battles_on_opponent_id"
    t.index ["winner_id"], name: "index_battles_on_winner_id"
  end

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
    t.integer "level", default: 1
    t.integer "current_exp"
    t.float "current_energy", default: 5.0
    t.date "died_on"
    t.integer "resurrection_days"
    t.integer "last_experience"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "color", default: 0
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
    t.index ["fitbit_id"], name: "index_users_on_fitbit_id"
  end

  add_foreign_key "battles", "users", column: "creator_id"
  add_foreign_key "battles", "users", column: "opponent_id"
  add_foreign_key "battles", "users", column: "winner_id"
  add_foreign_key "days", "users"
  add_foreign_key "fitogachis", "users"
  add_foreign_key "tokens", "users", on_delete: :cascade
end
