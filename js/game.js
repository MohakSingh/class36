class Game{
    constructor(){

    }

getState(){
   var getStateref=database.ref("gameState");
   getStateref.on("value",function(data){
       gameState=data.val();
   })
}

update(state){
    database.ref("/").update({
gameState:state

    })   
}

async start(){
    if(gameState===0){
   
player=new Player();
var playerCountref=await database.ref('playerCount').once("value");
if(playerCountref.exists){
playerCount=playerCountref.val();
player.getCount();
}

form=new Form();
form.display();
}
}

play(){
    form.hide();
    textSize(20);
    text("Game Started",120,100);
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
var display_position=130;
for(var plr in allPlayers){
if(plr==="player"+player.index){
    fill("red")
}
else{
    fill("black");
}
display_position+=20;
textSize(15);
text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
}
    }
}
}