<!--1차-->
  function solution(players, callings) {
  var playerMap = {};
    for (let i = 0; i<players.length; i++){
        playerMap[players[i]] = i;
    }
    for (let i = 0; i<callings.length; i++){
        const idx = playerMap[callings[i]];
        const play = players[idx-1];
        players[idx-1]=callings[i];
        players[idx]= play ;
        playerMap[callings[i]]=idx-1;
        playerMap[play]=idx;
        
    }
    return players
}

<!--2차-->
  function solution(players, callings) {
  var playerMap = {};
    for (let i = 0; i<players.length; i++){
        playerMap[players[i]] = i;
    }
    for (let i = 0; i<callings.length; i++){
        const idx = playerMap[callings[i]];
        const play = players[idx-1];
        [players[idx-1],players[idx]]=[players[idx],players[idx-1]];
        playerMap[callings[i]]=idx-1;
        playerMap[play]=idx;
    }
    return players
}
