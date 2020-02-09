document.addEventListener('DOMContentLoaded', function() {

	document.getElementsByTagName('form')[0].onsubmit = function(evt) {
	  evt.preventDefault(); // Preventing the form from submitting
	  checkWord(); // Do your magic and check the entered word/sentence
	  window.scrollTo(0,150);
	}
  
	// Get the focus to the text input to enter a word right away.
	document.getElementById('terminalTextInput').focus();
  
	// Getting the text from the input
	var textInputValue = document.getElementById('terminalTextInput').value.trim();
  
	//Getting the text from the results div
	var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;
  
	// Clear text input
	var clearInput = function(){
	  document.getElementById('terminalTextInput').value = "";
	}
  
	// Scrtoll to the bottom of the results div
	var scrollToBottomOfResults = function(){
	  var terminalResultsDiv = document.getElementById('terminalReslutsCont');
	  terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
	}
  
	// Scroll to the bottom of the results
	scrollToBottomOfResults();
  
	// Add text to the results div
	var addTextToResults = function(textToAdd){
	  document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
	  scrollToBottomOfResults();
	}
  
	// Getting the list of keywords for help & posting it to the screen
	var postHelpList = function(){
	  
	  var helpKeyWords = [
		"Calling 100...📞"
	  ].join('<br>');
	  addTextToResults(helpKeyWords);
	}
  
	// Getting the time and date and post it depending on what you request for
	var getTimeAndDate = function(postTimeDay){
	  var timeAndDate = new Date();
	  var timeHours = timeAndDate.getHours();
	  var timeMinutes = timeAndDate.getMinutes();
	  var dateDay = timeAndDate.getDate();
	  console.log(dateDay);
	  var dateMonth = timeAndDate.getMonth() + 1; // Because JS starts counting months from 0
	  var dateYear = timeAndDate.getFullYear(); // Otherwise we'll get the count like 98,99,100,101...etc.
  
	  if (timeHours < 10){ // if 1 number display 0 before it.
		timeHours = "0" + timeHours;
	  }
  
	  if (timeMinutes < 10){ // if 1 number display 0 before it.
		timeMinutes = "0" + timeMinutes;
	  }
  
	  var currentTime = timeHours + ":" + timeMinutes;
	  var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;
  
	  if (postTimeDay == "time"){
		addTextToResults(currentTime);
	  }
	  if (postTimeDay == "date"){
		addTextToResults(currentDate);
	  }
	}
  
	// Opening links in a new window
	var openLinkInNewWindow = function(linkToOpen){
	  window.open(linkToOpen, '_blank');
	  clearInput();
	}
  
	// Having a specific text reply to specific strings
	var textReplies = function() {
		if(textInputValueLowerCase.includes("name"))
		{	clearInput();
			addTextToResults("My name is ishan,Ishan Extreme");
		}
		else if(textInputValueLowerCase.includes("love"))
		{	clearInput();
			addTextToResults("Love you too ❤❤❤");
			document.getElementById('back').style.background = "url("+lovebg+")"; 
		}
		else if(textInputValueLowerCase.includes("bye"))
		{	clearInput();
			addTextToResults("Byee,but before going check out my portfolio by typing home 😃😃😃");
			 
		}
		else if(textInputValueLowerCase.includes("bsdk") || textInputValueLowerCase.includes("fuck") || textInputValueLowerCase.includes("madarchod") || textInputValueLowerCase.includes("bhosdike"))
		{	clearInput();
			addTextToResults("<b>See cover photo type love you to remove this page</b>");
			document.getElementById('back').style.background = "url("+nkl+")"; 
		}
		else

		{

		
	  switch(textInputValueLowerCase){
		// funny replies [START]
		
		case "no":
		  clearInput();
		  addTextToResults("I knew it you love me 🌹😜");
		  document.getElementById('back').style.background = "url("+lovebg+")"; 
		  
		  break;
  
		case "yes":
		  clearInput();
		  addTextToResults("I accept your friend request 😜");
		  document.getElementById('back').style.background = "url("+friendbg+")"; 
		  break;
		  case "thanks":
		  clearInput();
		  addTextToResults("My Pleasure");
		  
		  break;
  
		// case "ss":
		//   clearInput();
		//   addTextToResults("Its my name 'Ishan Extreme'");
		//   break;
  
		// case "i love you":
		//   clearInput();
		//   addTextToResults("love you too");
		//   break;
		  
		// case "gustavo":
		//   clearInput();
		//   addTextToResults("🍌 + <a target='_blank' href='https://twitter.com/Dr_Gustavo'>@Dr_Gustavo</a>");
		//   break;
  
		// case "i love you":
		// case "love you":
		// case "love":
		//   clearInput();
		//   addTextToResults("Aww! That's so sweet 😍. Here's some love for you too ❤ ❤ ❤ !");
		//   break;
  
		// case "ironman":
		// case "iron man":
		// case "shoot to thrill":
		//   clearInput();
		//   addTextToResults('Shoot to Thrill!');
		//   openLinkInNewWindow('https://www.youtube.com/watch?v=xRQnJyP77tY');
		//   break;
  
		// case "git":
		//   clearInput();
		//   addTextToResults("git push origin master <br>you can check this project's repo on GitHub: <a target='_blank' href='https://github.com/MahdiF/mahdif.com/tree/master/lab/web-terminal'>https://github.com/MahdiF/mahdif.com/tree/master/lab/web-terminal</a>");
		//   break;
  
		// case "git status":
		//   clearInput();
		//   addTextToResults("nothing to commit, working directory clean.");
		//   break;
  
		// case "git push origin master":
		//   clearInput();
		//   addTextToResults("Push me baby!");
		//   break;
  
		// case "hello":
		// case "hi":
		// case "hola":
		//   clearInput();
		//   addTextToResults("Hello, it's me... I was wondering if after all these years you'd like to meet... 😍");
		//   break;
  
		// case "cat":
		//   clearInput();
		//   addTextToResults("Meow!! 🐱<br> psst: try typing (cat videos)");
		//   break;
  
		// case "what the":
		// case "wtf":
		//   clearInput();
		//   addTextToResults("F***.");
		//   break;
  
		// case "shit":
		// case "poop":
		// case "💩":
		//   clearInput();
		//   addTextToResults("💩");
		//   break;
  
		// case "cat videos":
		// case "cat v":
		//   addTextToResults("Okay I'll show you some in YouTube.");
		//   openLinkInNewWindow('https://www.youtube.com/results?search_query=cat videos');
		//   break;
  
		// case "lol":
		// case "trololo":
		//   addTextToResults("Mr. Trololo!");
		//   openLinkInNewWindow('https://www.youtube.com/watch?v=1uTAJG3Khes');
		//   break;
		// // funny replies [END]
  
		// case "youtube":
		//   clearInput();
		//   addTextToResults("Type youtube + something to search for.");
		//   break;
  
		// case "google":
		//   clearInput();
		//   addTextToResults("Type google + something to search for.");
		//   break;
  
		case "time":
		  clearInput();
		  getTimeAndDate("time");
		  break;
  
		case "date":
		  clearInput();
		  getTimeAndDate("date");
		  break;
  
		case "help":
		case "?":
		  clearInput();
		  postHelpList();
		  break;
  
		default:
		clearInput();
		openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase);
		addTextToResults("<i>I hand over this text to google sir 🔍</i>");
		break;
	  }
	}
	}
  
  // Main function to check the entered text and assign it to the correct function
	var checkWord = function() {
		
	  textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a variable
	  textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string
  
	  if (textInputValue != ""){ //checking if text was entered
		addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
		if (textInputValueLowerCase == "home") { //home page
    
		  openLinkInNewWindow(product_detail_url) ;
		  addTextToResults("<i><b>Welcome To My Portfolio</b></i>");
		}  else if (textInputValueLowerCase.substr(0,7) == "google ") {
		  openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
		  addTextToResults("<i>I've searched on Google for " + "<b>" + textInputValue.substr(7) + "</b>" + " it should be opened now.</i>");
		} else if(textInputValueLowerCase.substr(0,2) == "hi"){
			clearInput();
			
		 addTextToResults("hi,means I am friendzoned!!! 🤔🤔");
		  
		}
		else
		{
			textReplies()
		}

	  }
	};
  
  });
  