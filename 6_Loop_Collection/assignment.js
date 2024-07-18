/* 
We're building a Cricket app !

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the wicketkeeper and the others are field players. 
For India (team 1) create one variable ('Ind') with the wicketkeeper name, 
and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, India (team 1) used 3 substitute players. So create a new array ('players1Final') 
containing all the original team1 players plus 'Sandeep', 'John' and 'Sunil'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. The team with the lower odd is more likely to win. 
Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator.
7. Loop over the game.Century array and print each player name to the 
console, along with the Century number (Example: "Century 1: Kohli")
8. Use a loop to calculate the average odd and log it to the console 

GOOD LUCK 
*/
const game = {
    team1: "India",
    team2: "Australia",
    players: [
      [
        "Dhoni",
        "Sharma",
        "Kohli",
        "Rahul",
        "Jadeja",
        "Pandey",
        "Ashwin",
        "Chahal",
        "Khan",
        "Bhumra",
        "Shami",
      ],
      [
        "Wade",
        "Cummins",
        "Green",
        "Maxwell",
        "Finch",
        "Hazelwood",
        "Marsh",
        "Stoinis",
        "Richardson",
        "Starc",
        "Warner",
      ],
    ],
    Century: ["Kohli", "Sharma", "Warner", "Maxwell"],
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  //Task 1
  let {team1 , team2, players: [players1, players2] , Century , odds} = game; 
  console.log(team1);
  console.log(team2);
  console.log(players1);
  console.log(players2);
  console.log(Century);
  console.log(odds);

/* 
Task 2 :The first player in any player array is the wicketkeeper and the others are field players. 
For India (team 1) 
Create one variable ('Ind') with the wicketkeeper name, 
and one array ('fieldPlayers') with all the remaining 10 field players
*/

let [ind,...fieldPlayers] = players1;
console.log(ind);
console.log(fieldPlayers);

/* 
Task 3 :Create an array 'allPlayers' containing all players of both teams (22 players)
*/
let allPlayers = [...players1 , ...players2];
console.log(allPlayers);


/*
Task 4. During the game, India (team 1) used 3 substitute players. 
So create a new array ('players1Final') 
containing all the original team1 players plus 'Sandeep', 'John' and 'Sunil'
*/

let players1Final = [...players1, 'Sandeep', 'John' , 'Sunil'];
console.log(players1Final);

/* 
Task 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
*/
let { team1: team1Odd, x: drawOdd, team2: team2Odd } = odds;
console.log(team1Odd); 
console.log(drawOdd); 
console.log(team2Odd);

/* 
Task6. The team with the lower odd is more likely to win. 
Print to the console which team is more likely to win, 
*/
if (team1Odd < team2Odd) {
    console.log(`${team1} is more likely to win.`);
  } else {
    console.log(`${team2} is more likely to win.`);
  }
  
/* 
WITHOUT using an if/else statement or the ternary operator.
*/
console.log(team1Odd < team2Odd ? `${team1} is more likely to win.` : `${team2} is more likely to win.`);

/* 
Task 7. Loop over the game.Century array and print each player name to the 
console, along with the Century number (Example: "Century 1: Kohli")
*/
for (const [key , value] of Century.entries()) {
    console.log(`Century ${key +1} : ${value}`);
}

/* 
Task 8. Use a loop to calculate the average odd and log it to the console 
*/
let total = 0;
let count = 0;

for (let odd of Object.values(odds)) {
  total += odd;
  count++;
}
let averageOdd = total / count;
console.log(`Average odd: ${averageOdd}`);
  };