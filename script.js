//your JS code here. If required.
let count = 0;

document.getelementBYId("incrementBtn").addEventListner("click" function(){

	alert("current value: " count);
	count++;
	 document.getElementById("counter").textContent = count;
});
