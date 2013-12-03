
/* can write some code, though document and window options may not be the same*/
console.log('contentscript loaded');

//send message to extension code (background.js), callback with response
/*chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});*/

//open port to extension and send messages
var port = chrome.runtime.connect({name: "knockknock"});
port.postMessage({joke: "Knock knock"});
console.log("Knock knock");
port.onMessage.addListener(function(msg) {
	var answer;
  if (msg.question == "Who's there?")
    answer = "Madame";
  else if (msg.question == "Madame who?")
    answer ="Madame... Bovary";
	
  if(answer){
		console.log(msg.question);
		console.log(answer);
		port.postMessage({answer: answer});
	}
});

/* to inject via middleman, have some inject logic which will do the following if you decide to inject: */
/*
var s = document.createElement('script');
s.src = chrome.extension.getURL("src/content.js");
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);
*/