var interval;
var time=0;
var started=0;

function timer () {
	if(started==0){
		started=1;
		interval = setInterval(function(){

		time=time+(1/100);
	    document.getElementById("timer").innerHTML = time.toFixed(2);
		},10)

	}
	else {
		clearInterval(interval);
		started=0;
	}
}

function record() {
	document.getElementById("record_times").innerHTML+=time.toFixed(2)+"<br>";
}

function reset() {
	time=0;
	document.getElementById("record_times").innerHTML="";
}

document.addEventListener("keydown", function(event){
	if(event.keyCode==83)
      document.getElementById("Start_stop").click();

  	if(event.keyCode==84)
  	   document.getElementById("Record").click();

  	if(event.keyCode==82)
  	   document.getElementById("Reset").click();


});