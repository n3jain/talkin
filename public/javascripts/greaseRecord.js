var name1 = function() {return 'Yes it works!'};
name1();
console.log(name1());

//$(document).ready(function(){
  console.info('this should alwasys fire');
  var file_name = $('#filename').val();
	var settings = {
		
	   'rec_width': '300',
	   'rec_height': '200',
	   'rec_top': '0px',
	   'rec_left': '0px',
	   'recorderlayout_id' : 'flashrecarea',
	   'recorder_id' : 'audiorecorder',
	   'recorder_name': 'audiorecorder',
	   'wmode' : 'transparent',
	   'bgcolor': '#ff0000',
	   'swf_path': 'http://localhost:9393/javascripts/jRecorder/jRecorder.swf',
	   'host': 'http://localhost:9393/javascripts/jRecorder/jRecorder.swf?host=/save/neha',
	   'callback_started_recording' : function(){},
	   'callback_finished_recording' : function(){},
	   'callback_stopped_recording': function(){$('#record').removeAttr("disabled")},
	   'callback_error_recording' : function(){},
	   'callback_activityTime': function(time){},
	   'callback_activityLevel' : function(level){}
	};
	//initialise the recorder            
	$.jRecorder( settings ); //insert the flash object under 'body' tag
var test_but = "<li class='in-audio'> <input id='filename' value='neha' style='display: none;'> <input type='button' id='record' class='j-enable' value='record'> <input type='button' id='replay' class='j-enable' value='replay'> <input type='button' id='save' class='j-enable' value='save'> </li>";
$('.full-name').append(test_but);

console.log('test-record', $('#record'));

	$('#record').click(function(){
console.log('test-record');
$('#record').attr("disabled","true");
	
try{
		$.jRecorder.record(3); // records upto 3 seconds and stops
			$('#record').attr("disabled","true");
}
catch(e) {console.log(e);}
	})



	$('#replay').click(function(){
		$.jRecorder.stop() 

	})

	$('#save').click(function(){
		$.jRecorder.sendData() // sends data to server
	})
//});

