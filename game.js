const prompt = require('prompt-sync')();

// const color = require('ansi-colors');

// ITEMS //
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

//TIMER STOP IF USER ESCAPES
function win(){
    //IDEA FOR LATER -> return game result details e.g time spent etc
    clearInterval();
    return 'You have escaped!';
}

// INVENTORY //
let userInventory = ["apple", "tissue", "pen"];
function viewInventory(){
    /*for (var i = 0; i < userInventory.length; i++) {
        console.log(userInventory[i]);
    }*/
    return userInventory;
}
viewInventory();

// LOCATIONS //
function exitDungeon(){
    if(key){
        console.log("You hold the key in your hands, it fits perfectly into the lock")
        console.log("  [open] [walk away]  ")
        let choice = prompt()
        switch(choice){
            case 'open':
                console.log("YOU WIN!!!!!")
            case 'walk away':
                choices()
        }
    } else {
        console.log("Atop the stairs is an old but sturdy wooden door with a singlular iron lock")
        console.log("[There must be a key somewhere]")
        choices()
    } 
}

function shelf(){
    let carryOn = true
    console.log("Ontop of the shelf you see an array of glass bottles & beakers containing a collection of mysterious objects and liquids")
    while(carryOn){
        console.log("  [look around] [pick up a bottle] [walk away]  ")
        let choice = prompt()
        switch(choice){
            case 'look around':
                console.log("you move aside glasses waving your hands around seeing if you could find anything")
                console.log("but all you get is a splinter")
                break;
            case 'pick up a bottle':
                console.log("")
                if(burntNote && bookClue === false){
                    console.log("You look at the bottles and see one called Cleaner")
                    console.log("You take it and pour a little over the burnt paper and rub it in")
                    console.log("The title of a book page called Potions is on the paper")
                    console.log("A book about potions huh...")
                    bookClue = true
                } else {
                    console.log("Bottles line the shelf, some are labeld parts, liquid, potions")
                }
                console.log("..what to do, what to do")
                break;
            case 'walk away':
                console.log("You walk away from the old rotting shelf, what to do now?")
                carryOn = false
                break;
            default:
                console.log("I didn't catch that")
                break;
        }
    }
    choices()
}


function bookCase(){
    let carryOn = true
    console.log("inside the lone bookcase you see various books behind the plain of glass")
    console.log("the draws are unlocked and slighty opened")
    while(carryOn){
        console.log("  [check draws] [open glass hatch] [walk away]  ")
        let choice = prompt()
        switch(choice){
            case 'check draws':
                console.log("Peaking inside you spot nothing but dust, cobwebs and a friendly spider")
                break;
            case 'open glass hatch':
                if(bookClue && key === false){
                    console.log("Searching through the book case you spot an old dusty book in the back")
                    console.log('The spine reads "Everyday Potions"')
                    console.log("picking up the book you notice it's heavier than the others and once you open it")
                    console.log("a old rusty key falls to the ground send a loud noise echoing in the damp empty room")
                    key = true
                } else {
                    console.log("Looking at the books doesn't seem to help, They're all worn and old,")
                    console.log("[nothing worth investigation you think to yourself]") 
                }
                break;
            case 'walk away':
                console.log("Nothing interests you in the bookshelf?")
                carryOn = false
                break;
            default:
                console.log("I didn't catch that")
                break;
        }
    }
    choices()
}

function firePlace(){
    let carryOn = true
    console.log("at the end of the room there sits a fireplace,")
    if(fireON){
        console.log("the coals still hot with only a small flame showing.")
        console.log("looking at the fire you get a strange feeling, will you act on it?")
        while(carryOn){
            console.log("  [put out fire] [warm yourself] [walk away]  ")
            let choice = prompt()
            switch(choice){
                case 'put out fire':
                    fireON = false
                    console.log("the cold begins to creep into your body as soon as you watch the fire go out under your foot")
                    console.log("underneath your foot you notice a peice of torn paper, half burnt with indistinguishable letter written on it besides a few words")
                    console.log("you make out Po&#ion£, thats all you can make out")
                    console.log("You put the note into your pocket")
                    burntNote = true
                    break;
                case 'warm yourself':
                    console.log("you feel a slight sense of peace as you warm yourself next to the fickle flame infront of you")
                    console.log("[You feel better about the situation]")
                    break;
                case 'keep searching':
                    console.log("You turn away from the fire, there's better things to do right now")
                    carryOn = false
                    break;
                //q give up!    
                default:
                    console.log("I didn't catch that")
                    break;
            }
        }
        choices()
    } else {
        console.log("staring at it you wonder if putting the fire out was the right decision")
        console.log("[Your hands start to feel numb]")
        choices()
    }
}

// INSTRUCTIONS //
function instructions(){
    console.log("Welcome to 'Escape The Dungeon' adventure game.")
    console.log("Your tasked is to find hidden items around the Dungeon to aid in your escape.") 
    console.log("Be careful you only have a certain amount of time to escape.")
}

// GAME START //
function gameStart(){
    return instructions()
}

// GAME END //
function ForceEnd(){
    console.log("Time is out...");
    console.log("You failed :(");
}

// CHOICES //
function choices(){
    console.log("Where should i look around?")
    console.log("  [shelf]  [bookcase]  [fireplace]  [old door]  ")
    let choice = prompt()
    switch(choice) {
        case 'shelf':
            shelf()
            break;
        case 'bookcase':
            bookCase()
            break;          
        case 'fireplace':
            firePlace()
            break;            
        case 'old door':
            exitDungeon()
            break;
        default:
            return "I didn't catch that";
            choices()
      }
}

gameStart();


let choice = prompt('Press 1 to continue or 2 to exit the program: ');
if(choice === '1'){
    setTimeout(ForceEnd, 100000); 
    }
    else {
        console.log('you are now exiting the program...')
        return null;
}

console.log('You are now inside the jungle and need to find your way out ASAP before the guard comes!')
choices();


