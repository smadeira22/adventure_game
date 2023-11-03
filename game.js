const prompt = require('prompt-sync')();

// const color = require('ansi-colors');

// ITEMS //
let exitDoor = 'closed';
let item1 = 'key';
let item2 = 'spider';
let item3 = 'glass';
let item4 = 'burned note';

// CONDITIONS
let fireON = true;
let burntNote = false
let bookClue = false
let key = false

// INVENTORY //
let userInventory = ['apple', 'pen'];


// LOCATIONS //
function exitDungeon(){
    if(key){
        console.log("You hold the key in your hands, it fits perfectly into the lock.")
        console.log("  [open]:1 [walk away]:2  ")
        let choice = prompt()
        switch(choice){
            case '1':
                console.log("YOU HAVE ESCAPED!!!!!");
                break;
            case '2':
                choices()
                break;
            default :
                console.log("I didn't catch that")
                exitDungeon();
        }
    } else {
        console.log("Atop the stairs is an old but sturdy wooden door with a singlular iron lock.")
        console.log("[There must be a key somewhere]")
        choices()
    } 
    return null;
}

function shelf(){
    let carryOn = true
    console.log("Atop the shelf you see an array of bottles containing a collection of mysterious objects and liquids.")
    while(carryOn){
        console.log("  [check shelf]:1 [pick up a bottle]:2 [walk away]:3 [view inventory]:4 ")
        let choice = prompt()
        switch(choice){
            case '1':
                console.log("Rubbing your hands over the shelf,")
                console.log("you reach to try find something further back but all you get is a splinter.")
                console.log("[blood slowly drips down from your finger]")
                break;
            case '2':
                console.log("")
                if(burntNote && bookClue === false){
                    console.log("You look at the bottles and see one labled Cleaner")
                    console.log("Pouring it all over the burnt paper you begin to rub it in")
                    console.log("The title of a book page is revealed...Potions.")
                    console.log("A book about potions huh...")
                    bookClue = true
                    carryOn = false
                } else {
                    console.log("Bottles line the shelf, some contain parts, liquids, and some are potions,")
                    console.log("you check them out but nothing stands out")
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
    console.log("Inside the lone bookcase you see various books behind the plain of glass")
    console.log("the drawers are unlocked and slighty opened")
    while(carryOn){
        console.log("  [check drawers]:1 [open glass hatch]:2 [walk away]:3 [view inventory]:4 ")
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
                    console.log("a old rusty key falls to the ground sending a loud noise echoing through the damp empty room")
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
    console.log("At the end of the room there sits a fireplace,")
    if(fireON){
        console.log("the coals still hot with only a small flame showing.")
        console.log("looking at the fire you get a strange feeling, will you act on it?")
        while(carryOn){
            console.log("  [put out fire]:1 [warm yourself]:2 [walk away]:3 [view inventory]:4")
            let choice = prompt()
            switch(choice){
                case '1':
                    fireON = false
                    console.log("The cold begins to creep into your body as soon as you watch the fire go out under your foot")
                    console.log("However, underneath you notice a peice of torn paper, half burnt with indistinguishable letter written on it")
                    console.log("you make out Po&#ion£, but nothing more")
                    console.log("[You put the note into your pocket]")
                    userInventory.push(item4);
                    burntNote = true
                    carryOn = false
                    break;
                case '2':
                    console.log("Feeling a slight sense of peace as you warm yourself next to the fickle flame infront of you")
                    console.log("You feel a little better about the situation")
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
        console.log("Staring at it you wonder if putting the fire out was the right decision")
        console.log("[Your hands start to feel numb as cold creeps in]")
        choices()
    }

}

// INSTRUCTIONS //
function instructions(){
    console.log("Welcome to 'Escape The Dungeon' adventure game.")
    console.log("Your task is to find hidden items around the Dungeon to aid in your escape.") 
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
    console.log("  [shelf]:1  [bookcase]:2 [fireplace]:3  [old door]:4 [view inventory]:5 [give up]:q")
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
        case '5':
            console.log(userInventory);
            choices()
            break;
        case 'q':
            console.log('You have given up!');
            console.log('You will stay in the dungeon forever :((');
            break;
        default:
            console.log("I didn't catch that");
            choices()
    }
    //clearTimeout();
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
    // console.log('You have three minutes ')
    choices(); 
   // clearInterval();
    return null;
}

game();
