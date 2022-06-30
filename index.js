//game concept derived from https://codepen.io/cathydutton/pen/JjpxMm
window.onload = function (){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z']; // as the player clicks on the letters, the letter will disappear from the screen. 

    //identify variables that will be used throughout the coding. 
    //const word = this will represent the word the player has to guess
    //const lives = this will represent how many lives a player has left
    //const categories = this will respresent the word categories in the game
    //const clue = this will represent the clues that will help players guess the word
    //const alaphabet = this will represent the letters of the alphabet

    //Create a button element for each letter. Element ID = Buttons
    //Create ul list for the alphabet
    const button = function(){
        letButtons = document.getElementById('buttons');
        letter = document.createElement('list'); //Guide from javascripttutorial.net

        for (const i = 0; i <alphabet.length; i++) {
            letters.id ='alphabet';
            lists = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check;
            myButtons.appendChild(letter);
            letter.appendChild(list);
        }
    }   
   
    //Create a element that shows the category name (States, Film, Athletes, or Geography)
    const categories = function (){
        if (chosenCategory === category [0]){
            categoryName.innerHTML = "The category is States";
        }else if (chosenCategory === category[1]){
            categoryName.innerHTML = "The catergory is Film";
        }else if (chosenCategory === category [2]){
            categoryName.innerHTML = "The catergory is Athletes";
        }else if (chosenCategory === category [3]){
            categoryName.innerHTML = "The catergory is Geography";
    }
}

    //Create an element that shows the number of lines where a letter should be. 
    
    
    //categories and words
    //States: New Mexico, New York, Florida, Minnesota
    //Film: Grease, James Bond, A Leauge of Their Own, ET 
    //Athletes: Seth Curry, Kirby Puckett, Conor McGregor, Tom Brady
    //Geography: Washington Monument, Grand Canyon, Sydney Opera House, The Eiffel Tower

    //clue for each word
    //States: The land of enchantment, Broadway lives here, The Sunshine State, The star of the North
    //Film: Zucko and gang, Casino Royale and Never Say Never Again, There's no crying in baseball!, Phone Home
    //Athletes: The brother of Steph Curry, Won game 6 of 1991 World Series with his home run, First Irish man to join the UFC, Has won 7 Super Bowl Championships 
    //Geography: The tallest structure in Washington D.C., The most visited tourist destintation in the United States, More than 10.9 million people visit this famous place in Australia each year, This was built to mark the 100th anniversary of the French Revolution.

    //countdown for how many lives a player has left
    //total of 10 lives
    //if player guesses less than 10 times they win
    //else they lose

    //drawing of hangman = 10 chances to guess the word

    //button for hints if a player is stuck
    //button to click if a player wants to play again














    }