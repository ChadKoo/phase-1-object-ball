function gameObject(){
    return {home:{
             teamName:"Brooklyn Nets",
             colors:["Black", "White"],
             players:[{    
               name: "Alan anderson",
               number:0,
               shoe: 16,
               points: 22,
               rebounds: 12,
               assits: 12,
               steals: 3,
               blocks: 1,
               slamdunks: 1
            },{
               name: "Reggie Evans",
               number: 30,
               shoe: 14,
               points: 12,
               rebounds: 12,
               assits: 12,
               steals: 12,
               blocks: 12,
               slamdunks: 7
            },{
               name: "Brook Lopez",
               number: 30,
               shoe: 17,
               points: 17,
               rebounds: 19,
               assits: 10,
               steals: 3,
               blocks: 1,
               slamdunks: 15
            },{
               name: "Mason Plumlee",
               number: 1,
               shoe: 19,
               points: 26,
               rebounds: 12,
               assits: 6,
               steals: 3,
               blocks: 8,
               slamdunks: 5
            },{       
               name: "Jason Terry",
               number: 31,
               shoe: 15,
               points: 19,
               rebounds: 2,
               assits: 2,
               steals: 4,
               blocks: 11,
               slamdunks: 1
            }]},
            away:{
              teamName:"Charlotte Hornets",
              colors:["Turquoise", "Purple"],
              players:[{   
                name: "Jeff Adrien",
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assits: 1,
                steals: 2,
                blocks: 7,
                slamdunks: 2
                },{
                name: "Bismak Biyombo",
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assits: 7,
                steals: 7,
                blocks: 15,
                slamdunks: 10
                },{
                name: "DeSagna Diop",
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assits: 12,
                steals: 4,
                blocks: 5,
                slamdunks: 5,
                },{      
                name: "Ben Gordon",
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assits: 2,
                steals: 1,
                blocks: 1,
                slamdunks: 2
                },{
                name: "Brendan Haywood",
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assits: 12,
                steals: 22,
                blocks: 5,
                slamdunks: 12
                }]
            }
    }
        

}



function numPointsScored(name) {
    const match = gameObject(); 
    for (let teamKey in match) {
      const team = match[teamKey];
      for (let player of team.players) {
        if (player.name === name) {
          return player.points;
        }
      }
    }
  
  }
  
    
  function shoeSize(name) {
    const match = gameObject(); 
    for (let teamKey in match) {
      const team = match[teamKey];
      for (let player of team.players) {
        if (player.name === name) {
          return player.shoe;
        }
      }
    }
  
  }
  
  function teamColors(teamName) {
    const match = gameObject(); 
    for (let teamKey in match) {
      const team = match[teamKey];
       if (team.teamName === teamName) {
          return team.colors;
        }
      }}
    
  
function teamNames(){
    const match = gameObject(); 

    return Object.values(match).map(team => team.teamName)
}


function playerStats(name) {
    const match = gameObject(); 
    for (let teamKey in match) {
      const team = match[teamKey];
      for (let player of team.players) {
        if (player.name === name) {
          return player;
        }
      }
    }
    }

function bigShoeRebounds() {
 const match = gameObject();
 const allPlayers = [
   ...match.home.players,
   ...match.away.players
        ];
const largestShoeSize = Math.max(...allPlayers.map(player => player.shoe));
const playerWithBiggestShoe = allPlayers.find(player => player.shoe === largestShoeSize);
return playerWithBiggestShoe.rebounds;
}
bigShoeRebounds();  


      
function mostPointsScored() {
    const match = gameObject();
    const allPlayers = [
        ...match.home.players,
        ...match.away.players]
    const maxPoints = Math.max(...allPlayers.map(player => player.points));
    const playerWithMaxPoints= allPlayers.find(player => player.points === maxPoints);   
    return playerWithMaxPoints.points; 
}   
mostPointsScored();
      
