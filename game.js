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

// INVENTORY //
let userInventory = ['apple', 'tissue', 'pen'];


// LOCATIONS //
function exitDungeon(){
    if(key){
        console.log("You hold the key in your hands, it fits perfectly into the lock")
        console.log("  [open exit door]:1 [walk away]:2  ")
        let choice = prompt()
        switch(choice){
            case '1':
                console.log("YOU WIN!!!!!");
                break;
            case '2':
                choices()
                break;
        }
    } else {
        console.log("Atop the stairs is an old but sturdy wooden door with a singlular iron lock")
        console.log("[There must be a key somewhere]")
        choices()
    } 
    return null;
}

function shelf(){
    let carryOn = true
    console.log("Ontop of the shelf you see an array of glass bottles & beakers containing a collection of mysterious objects and liquids")
    while(carryOn){
        console.log("  [look around]:1 [pick up a bottle]:2 [walk away]:3 [view inventory]:4 ")
        let choice = prompt()
        switch(choice){
            case '1':
                console.log("you move aside glasses waving your hands around seeing if you could find anything")
                console.log("but all you get is a splinter")
                break;
            case '2':
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
            case '3':
                console.log("You walk away from the old rotting shelf, what to do now?")
                carryOn = false
                break;
            case '4':
                console.log(userInventory);
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
        console.log("  [check draws]:1 [open glass hatch]:2 [walk away]:3 [view inventory]:4 ")
        let choice = prompt()
        switch(choice){
            case '1':
                console.log("Peaking inside you spot nothing but dust, cobwebs and a friendly spider")
                break;
            case '2':
                if(bookClue && key === false){
                    console.log("Searching through the book case you spot an old dusty book in the back")
                    console.log('The spine reads "Everyday Potions"')
                    console.log("picking up the book you notice it's heavier than the others and once you open it")
                    console.log("a old rusty key falls to the ground send a loud noise echoing in the damp empty room")
                    key = true
                    userInventory.push(item1);
                } else {
                    console.log("Looking at the books doesn't seem to help, They're all worn and old,")
                    console.log("[nothing worth investigation you think to yourself]") 
                }
                break;
            case '3':
                console.log("Nothing interests you in the bookshelf?")
                carryOn = false
                break;
            case '4':
                console.log(userInventory);
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
            console.log("  [put out fire]:1 [warm yourself]:2 [walk away]:3 [view inventory]:4")
            let choice = prompt()
            switch(choice){
                case '1':
                    fireON = false
                    console.log("the cold begins to creep into your body as soon as you watch the fire go out under your foot")
                    console.log("underneath your foot you notice a peice of torn paper, half burnt with indistinguishable letter written on it besides a few words")
                    console.log("you make out Po&#ion£, thats all you can make out")
                    console.log("You put the note into your pocket")
                    burntNote = true
                    break;
                case '2':
                    console.log("you feel a slight sense of peace as you warm yourself next to the fickle flame infront of you")
                    console.log("[You feel better about the situation]")
                    break;
                case '3':
                    console.log("You turn away from the fire, there's better things to do right now")
                    carryOn = false
                    break;
                case '4':
                    console.log(userInventory);
                    break;
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


// GAME END //
function ForceEnd(){
    console.log("Time is out...");
    console.log("You failed :(");
}

// CHOICES //
function choices(){
    console.log("Where should i look around?")
    console.log("  [shelf]:1  [bookcase]:2 [fireplace]:3  [old door]:4 [give up]:q")
    let choice = prompt()
    switch(choice) {
        case '1':
            shelf()
            break;
        case '2':
            bookCase()
            break;          
        case '3':
            firePlace()
            break;            
        case '4':
            exitDungeon()
            break;
        case 'q':
            console.log('You have given up');
            console.log('You will stay in the dungeon forever');
            break;
        default:
            console.log("I didn't catch that");
            choices()
    }
    clearTimeout();
}

function gameEnd(){
    return null;
}


function game(){ 
    instructions();
    let choice = prompt('Press 1 to continue or 2 to exit the program: ');
    if(choice === '1'){
        //setTimeout(ForceEnd, 180000); 
    }
    else {
        console.log('You are now exiting the program...')
        return null;
    }
    console.log('You are now inside the jungle and need to find your way out ASAP before the guard comes!')
    console.log('yYu have three minutes ')
    choices(); 
        
}

game();
