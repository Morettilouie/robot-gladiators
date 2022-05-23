// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE"  - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 10;
var enemyAttack = 12;

// create function
var fight = function(enemyName) {

    while(playerHealth > 0 && enemyHealth > 0) {


    // Allow players to choose fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // If player chooses to skip 
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip the fight
        var confirmSkip = window.confirm("Are you sure you would like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    } 

        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack

    // Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    )

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        // award player money for winning
        playerMoney = playerMoney + 20;
        console.log("playerMoney", playerMoney);
        // leave loop since enemy is dead
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack

    //Log a resulting message to the console so we know that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )
        // check to see if the value of the playerHealth variable is greater than 0
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!")
        // leave loop since player is dead
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.")
    }
}
    
    
}





    // execute function
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
} 

