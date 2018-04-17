// Author: Zenobia Liendo


// function called from the client
function link_idannet_frame() {
    var  myIframe = document.getElementById('idannet_frame');
    myIframe.contentWindow.addEventListener('message', function(event) {
	info_json = JSON.parse(event.data)
	 myIframe.contentWindow.patient_info = info_json[0];
	 myIframe.contentWindow.idannet_response =info_json[1];

         }, false);       

}

window._sendMessage = function(patient_info, idannet_response) {
    // read data from json input 
    var  info = [patient_info, idannet_response];
    var  myIframe = document.getElementById('idannet_frame');
    myIframe.contentWindow.postMessage(JSON.stringify( info), '*');
}

$(document).ready(function(){
      var  myIframe = document.getElementById('idannet_frame');
      	$( myIframe.contentWindow).on( "load", function() { 
		myIframe.contentWindow.render_idann_viz(myIframe.contentWindow.idannet_response, myIframe.contentWindow.patient_info);		
		})
		

});




