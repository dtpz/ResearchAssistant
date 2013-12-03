// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

/*var settings = new Store("settings", {
   "sample_setting": "This is how you use Store.js to remember values"
});
*/

//example of using a message handler from the inject scripts
/*chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
 });*/

//listen to message from contentscript
/*chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });*/

//allow port to be opened from contentscript and communicate
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "knockknock");
  port.onMessage.addListener(function(msg) {
  	var question;
    if (msg.joke == "Knock knock")
      question = "Who's there?";
    else if (msg.answer == "Madame")
      question = "Madame who?";
    else if (msg.answer == "Madame... Bovary")
      question = "I don't get it.";

	if(question){
  		port.postMessage({question: question});
  	}
  });
});