class Person {
    constructor(fullName) {
        this.fullName = fullName;
        this.firstName = fullName.split(" ")[0];
        this.lastname = fullName.split(" ")[1];
    }    
}

class TennisPlayer extends Person{
    constructor(fullName, firstName, lastName) {
        super(fullName, firstName, lastName);
        this.numSetsWon = 0;
        this.numWins = 0;
        this.numLosses = 0; 
    }

    // will add 1 respectively to each statistic 
    win_set() {
        return this.numSetsWon++;
    }

    win_game() {
        return this.numWins++;
    }

    lose_game() {
        return this.numLosses++;
    }

    get setsWon() {
        return this.numSetsWon;
    }

    get wins() {
        return this.numWins;
    }

    get losses() {
        return this.numLosses;
    }
}

class TennisGame {
    constructor(player1, player2) {
        this.player1 = new TennisPlayer(player1);
        this.player2 = new TennisPlayer(player2);
    }

    play_match() {

        // playing sets until a player wins 5 sets
        while(this.player1.setsWon < 5 && this.player2.setsWon < 5){
            let dice = Math.floor(Math.random() * 2) // randomizer to decide which player wins a set 
            if(dice === 0){
                this.player1.win_set();
                document.getElementById('results').innerHTML = (`<b> ${this.player1.firstName} has won the match </b> <br>`)
                document.getElementById('results').innerHTML += (`The final score is ${this.player1.firstName} ${this.player1.setsWon} : ${this.player2.firstName} ${this.player2.setsWon} <br>`)
            }
            else {
                this.player2.win_set();
                document.getElementById('results').innerHTML = (`<b> ${this.player2.firstName} has won the match </b> <br>`)
                document.getElementById('results').innerHTML += (`The final score is ${this.player1.firstName} ${this.player1.setsWon} : ${this.player2.firstName} ${this.player2.setsWon} <br>`)
            }
        }
        
        // determine winner
        if (this.player1.setsWon > this.player2.setsWon){
            this.player1.win_game();
            this.player2.lose_game();
        }
        
        else{
            this.player2.win_game();
            this.player1.lose_game();
        }
    }

    show_stats() {
        document.getElementById('playerWin').innerHTML = (`${this.player1.firstName} Wins:${this.player1.wins} Losses:${this.player1.losses} <br>`)
        document.getElementById('playerWin').innerHTML += (`${this.player2.firstName} Wins:${this.player2.wins} Losses:${this.player2.losses}`)
    }
}

// start new game
function playGame() {
    let game = new TennisGame(document.getElementById(`player1name`).value, document.getElementById(`player2name`).value);
    game.play_match();
    game.show_stats(); 
}




