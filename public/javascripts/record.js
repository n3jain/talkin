var name1 = function() {return 'Yes it works!'};
name1();
console.log(name1());

$(document).ready(function(){
  var file_name = $('#user_id').val();
  console.log(file_name);
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
	   'swf_path': '/javascripts/jRecorder/jRecorder.swf',
	   'host': '/save/' + file_name,
	   'callback_started_recording' : function(){},
	   'callback_finished_recording' : function(){},
	   'callback_stopped_recording': function(){$('#record').removeAttr("disabled")},
	   'callback_error_recording' : function(){},
	   'callback_activityTime': function(time){},
	   'callback_activityLevel' : function(level){}
	};
	//initialise the recorder            
	$.jRecorder( settings ); //insert the flash object under 'body' tag


	$('#record').click(function(){
		$('#record').attr("disabled","true");
	
		$.jRecorder.record(3); // records upto 3 seconds and stops
			$('#record').attr("disabled","true");
	})



	$('#replay').click(function(){
		$.jRecorder.stop() 

	})

	$('#save').click(function(){
		$.jRecorder.sendData() // sends data to server
	})
});

