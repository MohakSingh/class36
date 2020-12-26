class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    getCount(){
       var getCountref=database.ref("playerCount");
       getCountref.on("value",(data)=>{
           playerCount=data.val();
       })
    }
    
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    
static getPlayerInfo(){
var playerInforef=database.ref("players");
playerInfo.on("value",(data)=>{
    allPlayers=data.val();
})
}
    update(name){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
        distance:this.distance    
        });
    }
}