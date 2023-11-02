//const escapeDungeon = require('./determineWinner.js');

/*const prompt = require('prompt-sync')();
const color = require('ansi-colors');*/

// ITEMS // NOT NEEDED?? I GUESS
let exitDoor = 'closed';
let item1 = 'key';
let item2 = 'broken key';
let item3 = 'glass';
let item4 = 'burned note';

// TIMER STOPS IF USER RUNS OUT OF TIME
function failed(){
    console.log("Time is out...");
    console.log("You failed :(");
    console.log(setTimeout(failed, 120000)); //2 MINUTES
}

//TIMER STOP IF USER ESCAPES
function win(){
    if(exitDoor === 'open'){
        console.log('You have escaped!')
        clearInterval();
    } 
}

// INVENTORY //
let userInventory = ['apple'];

function checkInventory(){
    for (var i = 0; i < userInventory.length; i++) {
        console.log(myArray[i]);
    }
}

// LOCATIONS //
function exitDoor(){
    for(let i=0; i<inventory.length; i++){
        if(inventory[i] === key){
            // prompt the user to open the wooden door using the key
            gameEnd()    
        } else {
            console.log("Atop the stairs is an old but sturdy wooden door with a singlular iron lock")
            choices()
        } 
    }
}

function shelf(){
    console.log("Ontop of the shelf you see an array of glass bottles & beakers containing a collection of mysterious objects")
    //prompt the user to select if they want to check out something on the shelf or move on
    /*  if (choice === 'x')
            do this
        else if (choice === 'y)
            do this
        else
            do this
    */
}

function bookCase(){
    console.log("inside the lone bookcase you see various books behind the plain of glass")
    console.log("the draws are unlocked and slighty opened")
    //prompt the user to select if they want to check out something on the shelf or move on
    /*  if (choice === 'x')
            do this
        else if (choice === 'y)
            do this
        else
            do this
    */
}

function firePlace(){
    console.log("at the end of the room there sits a dim fireplace, the coals still hot with only a small flame showing")
    //prompt the user to select if they want to check out something on the shelf or move on
    /*  if (choice === 'x')
            do this
        else if (choice === 'y)
            do this
        else
            do this
    */
}
// EVENTS //

// GAME START //

// GAME END //
function gameEnd(){
    return 1
}

// INSTRUCTIONS //
function instructions(){
    console.log("Welcome to 'Escape The Dungeon' adventure game.")
    console.log("Your tasked is to find hidden items around the Dungeon to aid in your escape.") 
    console.log("Be careful you only have a certain amount of time to escape.")
    // prompt for user to begin or quit
}

// CHOICES //
function choices(){
    console.log("looking around the room you see a few places worth looking")
    console.log("  [Shelf]  [Bookcase]  [Fireplace]  [Old Door]  ")
    // user prompt
    switch(expression) {
        case 'Shelf':
            shelf()
            break;
        case 'Bookcase':
            bookCase()
            break;          
        case 'Fireplace':
            firePlace()
            break;            
        case 'Old Door':
            exitDoor()
            break;
        default:
            choices()
      }
}