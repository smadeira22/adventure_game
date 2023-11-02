//const escapeDungeon = require('./determineWinner.js');

/*const prompt = require('prompt-sync')();
const color = require('ansi-colors');*/

// ITEMS // NOT NEEDED?? I GUESS
let exitDoor = 'closed';
let item1 = 'key';
let item2 = 'broken key';
let item3 = 'glass';
let item4 = 'burned note';

// CONDITIONS
let fireON = true;
let burntNote = false
let bookClue = false
let key = false

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
    if(key){
        // prompt the user to open the wooden door using the key
        gameEnd()    
    } else {
        console.log("Atop the stairs is an old but sturdy wooden door with a singlular iron lock")
        //options()
    } 
}

function shelf(){
    console.log("Ontop of the shelf you see an array of glass bottles & beakers containing a collection of mysterious objects and liquids")
    console.log("[Look around the shelf] [pick up a bottle] [walk away]")
    //prompt the user
    switch(expression){
        case 'lookaround':
            console.log("you move aside glasses waving your hands around seeing if you could find anything")
            console.log("but all you get is a splinter")
            //options()
            break;
        case 'pickbottle':
            console.log("")
            if(burntNote){
                // pour liquid on burnt peice of paper
                bookClue = true
            } else {
                // dont know what to do with the bottle
            }
            //options()
            break;
        case walkaway:
            console.log("You walk away from the old rotting shelf, what to do now?")
            //options()
            break;
    }
}


function bookCase(){
    console.log("inside the lone bookcase you see various books behind the plain of glass")
    console.log("the draws are unlocked and slighty opened")
    console.log("[check in the loose draws][open the glass hatch][walk away]")
    //prompt the user
    switch(expression){
        case 'checkDraws':
            // nothing but cobwebs
            //options
            break;
        case 'openGlassHatch':
            if(bookClue){
                // look for specific book and open it
                // key falls out
                key = true
            } else {
                // stare at the books, none of them seem interesting
            }
            //options()
            break;
        case walkaway:
            console.log("Nothing interests you in the bookshelf?")
            //options()
            break;
    }
}

function firePlace(){
    console.log("at the end of the room there sits a dim fireplace,")
    console.log("the coals still hot with only a small flame showing.")
    if(fireON){
        console.log("looking at the fire you get a strange feeling, will you act on it?")
        console.log("[Put out fire] [Warm yourself] [Walk away]")
        // prompt the user for input
        switch(expression){
            case 'putOut':
                fireON = false
                console.log("the cold begins to creep into your body as soon as you watch the fire go out under your foot")
                console.log("underneath your foot you notice a peice of torn paper, half burnt with indistinguishable letter written on it besides a few words")
                console.log("you make out H...2.., thats all you can make out")
                console.log("You put the note into your pocket, what are you going to do next")
                burntNote = true
                // options()
                break;
            case 'warmyourself':
                console.log("you feel a slight sense of peace as you warm yourself next to the fickle flame infront of you")
                console.log("[You feel better about the situation]")
                // options()
                break;
            case 'walk away':
                console.log("You turn away from the fire, there's better things to do right now")
                // options()
                break;
        }
    } else {
        console.log("staring at the cold fire you wonder if putting it out was the right decision")
        console.log("[Your hands start to feel numb]")
        // options()
    }
}
// GAME START //
function gameStart(){
    instructions()
    return 1
}

// GAME END //
function gameEnd(){
    return 0
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