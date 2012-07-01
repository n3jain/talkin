require 'rubygems'
require 'sinatra'

get '/' do
  erb :index
end

get '/iframe_handler/:profile_id/:is_owner' do
  headers "X-Frame-Options" => "GOFORIT"
  @profile_id = params[:profile_id]
  @is_owner = params[:is_owner]
  @filename = "#{Dir.pwd}/public/audio/#{@profile_id}.mp3"
  @present = File.exists?(@filename)
  erb :html_page
end

post '/save/:name' do
  @filename = "#{Dir.pwd}/public/audio/#{params[:name]}.mp3"
  puts @filename
  f = File.open(@filename, 'wb+')
  raw_data = request.env["rack.input"].read
  f.puts(raw_data)
  f.close
end
