function gameObject(){
    return {
        home: {
            teamName:"Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            },
        },
        away: {
            teamName:"Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            },
        }
    }
}
const game = gameObject()
const players = (game.home.players, game.away.players)

function allPlayers(){
    const all = players.map(function(team){
        const newArr = []
        for(const player in team){
            newArr.push({nameOfPlayer: player, ...team[player]})
        }
        return newArr
    })
    return all.flat()
}
function findPlayer(playerName){
    return allPlayers().find(player => {
        return player.nameOfPlayer === playerName
    })
}
function numPointsScored(playerName){
    return findPlayer(playerName).points
}

function shoeSize(playerName){
    return findPlayer(playerName).shoe
}
function isHome(team){
    return teamName === homeTeam.teamName
}
const homeTeam = game.home
const awayTeam = game.away

function teamColors(teamName){
    if(teamName === homeTeam.teamName){
        return homeTeam.colors
    }
    return awayTeam.colors
}
function teamNames(teamName){
    if(teamName === homeTeam.teamName){
        return homeTeam.teamName
    }
    return awayTeam.teamName
}
function playerNumbers(playerName){
    return findPlayer(playerName).number
}
function playerStats(playerName){
    return findPlayer(playerName)
}
function bigShoeRebounds(playerName){
    for(const player of allPlayers()){
        if(player.shoe > current.shoe){
            current.shoe = player.shoe
            current.player = player
        }
    }
    return current.player
}
function mostPointsScored(playerName){
    for (const player of allPlayers){
        if(player.points > current.points){
            current.points = player.points
            current.player = player
        }
    }
    return current.player
}
function winningTeam(teamName){
    function SumOfHome(homeTeam){
        let sumOfTeam = homeTeam.forEach(players => {
            sum += player.points
            return sumOfTeam
        })
    }
    function SumOfAway(awayTeam){
        let sumOfTeamAway = awayTeam.forEach(players => {
            sum += players.points
            return sumOfTeamAway
        })
    }
    for(const players of team){
        if(sumOfTeam => sumOfTeamAway){
            return homeTeam.teamName
        }
    return awayTeam.teamName
    }
return mostPointsScored
}
const current = {length: 0,steals: 0, player: ''}
function playerWithLongestName(players){
    for(const player of allPlayers()){
        if(player.nameOfPlayer.length > current.length){
            current.length = player.nameOfPlayer.length
            current.player = player.nameOfPlayer
        }
    }
    return current.player
}
function doesLongNameStealATon(){
    for(const player of allPlayers()){
        if(player.nameOfPlayer.length > current.length && player.steals > current.steals){
            current.length = player.nameOfPlayer.length
            current.steals = player.steals
            current.player = player.nameOfPlayer
        }
    }
    return current.player
}