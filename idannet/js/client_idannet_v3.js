// Author: Zenobia Liendo


// function called from the client
function link_idannet_frame() {
    var  myIframe = document.getElementById('idannet_frame');
    myIframe.contentWindow.addEventListener('message', function(event) {
	info_json = JSON.parse(event.data)
	 myIframe.contentWindow.patient_info_url = info_json[0];
	 myIframe.contentWindow.idannet_response_url =info_json[1];
	 //myIframe.contentWindow.render_idann_viz( myIframe.contentWindow.idannet_response,  myIframe.contentWindow.patient_info);	

         }, false);       

}

window._sendMessage = function(patient_info, idannet_response) {
    // read data from json input 
    var  info = [patient_info, idannet_response];
    var  myIframe = document.getElementById('idannet_frame');
    myIframe.contentWindow.postMessage(JSON.stringify( info), '*');
}

/*$(document).ready(function(){

        console.log(patient_info_url)

	$.getJSON(patient_info_url, function( patient_data ) {
		patient_info = patient_data[0]	
		$.getJSON( idannet_response_url, function( data ) {
			idannet_response = data;	
			link_idannet_frame();
			_sendMessage(patient_info, idannet_response)	;

			  var  myIframe = document.getElementById('idannet_frame');
			  $( myIframe.contentWindow).on( "load", function() { 
					console.log("in parent load");
					myIframe.contentWindow.render_idann_viz(idannet_response, patient_info);		
				})			
		})		
	})			

}); */


$(document).ready(function(){
	link_idannet_frame();
	_sendMessage(patient_info_url, idannet_response_url)	;

});




