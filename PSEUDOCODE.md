## Pseudocode 
  
run the app,
   create function run(){
        loadInstructions() - function with game instructions 
               1. introduction: This is the escape the dungeon room adventure game
                                Once you start the game you will enter the dungeon
                                Your goal is to escape the dungeon within a certain 'amount of time'
                                You need to find the main key for the exit door!
                                You have main options: 
                                   1. check inventory
                                   2. open exit door (only works if u have the key)
                                   3. open shelf1/shelf2(books/glass/pen)
                                   4. look in the fireplace (burnt note)         
        startTimer() - function with timer
        startGame() - function that starts game
    }
    display instructions of how the game will be played,
    instructions(){
        printing out info about the game and how to play
        ask user if he wants to continue to play the game or quit
    } 
    if(user wants to continue){
       start up game;
       start up a timer;    
    } else exit;

    time(){
        keep track of the start time in a variable;
        keep track of how long they have to beat the game in a varible;
        use these to work out when the game should forcibily stop with a lose;
    }
    add scenario (fire, books, shelf)

    give options - each option takes you a different place in the dungeon
                 - each location has things to find and locate
                 - each option should either take you somehwere or trigger an event
    functions(){
        #option 1 -- open shelf
        #option 2  -- open book
        #option 3 -- open exit door
        #option 4 -- talk to a stranger
        #option 5 -- 
    }
    inventory() - spider/iron/ history book/ burned note
    
    create key variable - boolean value (true/false)
    if(key === true){
       exit dungeon;
    } else erro.message('you gotta get ur key mate');

    let them choose options using prompts
        prompt(){
            -inventory: user checks inventory
            -doSomethingWithUserInput()  -
    }

    locate the items needed to escape
 - variables to let the program know while its running if something has been found or not maybe true or false?
- gather all of them, once you have maybe let you know to head to the door and escape? 
- go to exit
 - win the game   MAYBE YOU FIGHT THE PERSON WHO TRAPPED YOU ???

