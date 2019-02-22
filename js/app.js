// Start guessing game about me

"use-strict";

// Fetch the username
var user = prompt('Hello there! ' + ' What is your name?');
console.log('Username: ', user);

alert('Hello ' + user + '! \n ' + 'Welcome to my guessing game!');
alert('Let us see how well you really know about me!' );

//variables for number of questions and correct answers
var numQuestions = 0;
var numCorrectAnswers = 0;

    //1st question
    var firstAnswer = prompt('My nickname is Danny. Yes or No?');
    numQuestions++;
    console.log('Answer to first question:', firstAnswer);

    if(firstAnswer.toUpperCase() === 'Y' || firstAnswer.toUpperCase() === 'YES') {
        //Increment correct answer counter 
        numCorrectAnswers++;
        alert("Your answer is correct!");
    }
     else if(firstAnswer.toUpperCase() === 'N' || firstAnswer.toUpperCase() === 'NO') {
        alert("Your answer is incorrect!");
     }
     else
     {
       alert("Invalid entry. Answer not accepted.");
     }

    //2nd question
    var secondAnswer = prompt('I am five foot tall. Yes or No?');
    numQuestions++;
    console.log('Answer to second question:', secondAnswer);

    if(secondAnswer.toUpperCase() === 'Y' || secondAnswer.toUpperCase() === 'YES') {
        alert("Your answer is wrong! I am actually six foot tall.");
    }
     else if(secondAnswer.toUpperCase() === 'N' || secondAnswer.toUpperCase() === 'NO') {
        //Increment correct answer counter  
        numCorrectAnswers++; 
        alert("Your answer is correct!");
     }
     else
     {
       alert("Invalid entry. Answer not accepted.");
     }
     
    //3nd question
    var thirdAnswer = prompt('Kill Bill is my all time favorite movie. Yes or No?');
    numQuestions++;
    console.log('Answer to third question:', thirdAnswer);

    if(thirdAnswer.toUpperCase() === 'Y' || thirdAnswer.toUpperCase() === 'YES') {
        //Increment correct answer counter
        numCorrectAnswers++;  
        alert("Your answer is correct!");
    }
     else if(thirdAnswer.toUpperCase() === 'N' || thirdAnswer.toUpperCase() === 'NO') {
        alert("Your answer is wrong!");
     }
     else
     {
       alert("Invalid entry. Answer not accepted.");
     }
     
    //4th question
    var fourthAnswer = prompt('Among recent music artists, my favorite singer is Ariana Grande. Yes or No?');
    numQuestions++;
    console.log('Answer to fourth question:', fourthAnswer);

    if(fourthAnswer.toUpperCase() === 'Y' || fourthAnswer.toUpperCase() === 'YES') {
        alert("Your answer is wrong!");
    }
     else if(fourthAnswer.toUpperCase() === 'N' || fourthAnswer.toUpperCase() === 'NO') {
        //Increment correct answer counter
        numCorrectAnswers++;           
        alert("Your answer is correct! My favorite singer from recent times is Charlie Puth.");
     }
     else
     {
       alert("Invalid entry. Answer not accepted.");
     }

    //final question
    var finalAnswer = prompt('I have worked on the same technology for twelve years. Yes or No?');
    numQuestions++;
    console.log('Answer to final question:', finalAnswer);

    if(finalAnswer.toUpperCase() === 'Y' || finalAnswer.toUpperCase() === 'YES') {
        //Increment correct answer counter
        numCorrectAnswers++;        
        alert("Your answer is correct!");
    }
     else if(finalAnswer.toUpperCase() === 'N' || finalAnswer.toUpperCase() === 'NO') {
        alert("Your answer is wrong!");
     }
     else
     {
       alert("Invalid entry. Answer not accepted.");
     }

    alert('You have answered  ' + numCorrectAnswers + ' out of ' + numQuestions +' questions correctly.');
    alert('That brings us to the end of our little game. Thanks for playing!');