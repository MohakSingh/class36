class Form {
    constructor(){
        this.title = createElement('h1'); 
         this.input=createInput("Name");
         this.button = createButton("play")
         this.greetings = createElement('h2');
    }
    display(){
     this.title.html("Car Racing Game");
        this.title.position(130,0);

        
               this.input.position(130,150);

 
this.button.position(250,200);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    this.greetings.html("Welcome "+player.name);
    this.greetings.position(130,160);
    playerCount=playerCount+1;
    player.index=playerCount;
    player.updateCount(playerCount);
    player.update(name);
})


    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.greetings.hide();
    }
}