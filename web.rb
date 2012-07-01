require 'rubygems'
require 'sinatra'
require 'sqlite3'
require 'dm-core'
require 'dm-timestamps'
require 'dm-migrations'

configure do
  # Use Heroku or local Sqlite
  DataMapper.setup(:default, "sqlite3://#{Dir.pwd}/inaudio.db")
end

class Audio

  include DataMapper::Resource

  property :id,           Serial
  property :login,        String
  property :filename,     String
  property :is_active,    Boolean
  property :created_at,   DateTime
  property :updated_at,   DateTime

end

DataMapper.auto_upgrade!

get '/test' do
  headers "X-Frame-Options" => "GOFORIT"
  erb :html_page
end

get '/iframe_handler/:profile_id/:is_owner' do
  headers "X-Frame-Options" => "GOFORIT"
  @profile_id = params[:profile_id]
  @is_owner = params[:is_owner]
  @filename = "#{Dir.pwd}/public/audio/#{@profile_id}.mp3"
  @present = File.exists?(@filename)
  erb :html_page
end

get '/view/:name' do
  @name = params[:name]
  erb :profile_view
end

get '/view/edit_profile/:name' do
  @name = params[:name]
  erb :edit_profile
end

get '/view/edit_basic_info/:name' do
  @name = params[:name]
  erb :edit_basic_info
end

post '/save/:name' do
  @filename = "#{Dir.pwd}/public/audio/#{params[:name]}.mp3"
  puts @filename
  f = File.open(@filename, 'wb+')
  raw_data = request.env["rack.input"].read
  f.puts(raw_data)
  f.close
end

post '/profile/edit-basic-info-submit' do
  audio = Audio.new
  audio[:login] = @name
  audio[:filename] = @filename
  audio[:is_active] = true
  audio.save
end
