var messageInput = document.getElementById("message");
var requestedTime = document.getElementById("requested");

function subForm(){
	// console.log(messageInput.value)
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	// console.log(date + " " + time);
	
	fetch("https://api.apispreadsheets.com/data/QLY1YlefFb5Q8MpX/", {
		method: "POST",
		body: JSON.stringify({"data": {"time":date + " " + time,"message":messageInput.value,"requested":requestedTime.value}}),
	}).then(res =>{
		if (res.status === 201){
			// console.log("worked!")
			messageInput.value = ""
			requestedTime.value = ""
		}
	});
}