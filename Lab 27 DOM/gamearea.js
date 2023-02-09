function GameArea(){
    //  Wrapper Div
    this.wrapperDiv = document.getElementById("wrapperDiv");
    this.wrapperDiv.setAttribute("style", " background-color:yellow; border: 5px solid black; width:1300px; height:800px;");
    // create tileMenuDiv

    //top panel
    this.tileMenuDiv = document.createElement("div");
    this.wrapperDiv.appendChild(this.tileMenuDiv)
    this.tileMenuDiv.setAttribute("style", " background-color:#27273F; width:1300px; height:100px;float:left;");

    //left panel
    this.tileMenuDivL = document.createElement("div");
    this.wrapperDiv.appendChild(this.tileMenuDivL)
    this.tileMenuDivL.setAttribute("style", " background-color:#27273F; width:100px; height:700px; float:left;");

    // create canvasDiv
    this.canvasDiv = document.createElement("div");
    this.wrapperDiv.appendChild(this.canvasDiv)
    this.canvasDiv.setAttribute("style", " background-color:pink; width:1100px; height:700px;float:left;");

    //right panel
    this.tileMenuDivR = document.createElement("div");
    this.wrapperDiv.appendChild(this.tileMenuDivR)
    this.tileMenuDivR.setAttribute("style", " background-color:#27273F; width:100px; height: 700px; float:left;");

    // place canvas in div and style
    this.canvasDiv.appendChild(canvas);
    //  create tiles for tile menu
    this.tiles = [];
    this.tileText = [];
    //top
    for(let i = 0; i < 7; i++){
       this.tiles[i] = document.createElement("div");
       this.tileMenuDiv.appendChild(this.tiles[i]);
       this.tiles[i].setAttribute("class", "tile");
       this.tileText[i] = document.createTextNode("Tile " + (i + 1) + "");
       //this.t1Text.style.padding = "10px";
       this.tiles[i].appendChild(this.tileText[i]);
    }
    //right
    for(let i = 0; i < 5; i++){
      this.tiles[i] = document.createElement("div");
      this.tileMenuDivR.appendChild(this.tiles[i]);
      this.tiles[i].setAttribute("class", "tileV"); //floating doesn't seem to be working
      this.tileText[i] = document.createTextNode("Tile " + (i + 1) + "");
      //this.t1Text.style.padding = "10px";
      this.tiles[i].appendChild(this.tileText[i]);
   }
   //left
   for(let i = 0; i < 5; i++){
    this.tiles[i] = document.createElement("div");
    this.tileMenuDivL.appendChild(this.tiles[i]);
    this.tiles[i].setAttribute("class", "tileV");
    this.tileText[i] = document.createTextNode("Tile " + (i + 1) + "");
    //this.t1Text.style.padding = "10px";
    this.tiles[i].appendChild(this.tileText[i]);
 }
    //this.wrapperDiv.appendChild(this.canvasDiv);


    //  Add listeners to tile objects
    for(let i = 0; i < this.tiles.length; i++){
        this.tiles[i].addEventListener('mouseover', // mouseover is the name of an event
                                        function(){//  JavaScript has anonymous functions
                                          //  'this' is the listener target object: tile
                                          //  'this' does not refer to the PlayArea object
                                          this.style.backgroundColor = "#ac8fe3"
                                        },
                                        false);
        this.tiles[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = "#d5dee0"
          },false);
        this.tiles[i].addEventListener('click', function(){
            game.gamePaused = !game.gamePaused;
            console.log("Mouse Clicked");
          },false);
    }


}
