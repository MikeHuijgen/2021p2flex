class player
{
    constructor(index)
    {
        this.index = index;
        this.atTile = 0;
        this.pawn = document.getElementsByName("pawn" + index)[0];
        this.pawn.style.display = "block";
    }
}

class tile
{
    constructor(div)
    {
        this.div = div;
        this.goto = -1;
    }
}

class game
{
    constructor()
    {
        this.selectplayerDiv = document.getElementsByName("selectplayers");
        this.winnerDiv = document.getElementsByName("winner")[0];
        this.playerturnDiv = document.getElementsByName("playerturn")[0];
        this.rollDiv = document.getElementsByName("roll")[0];
        this.mainDiv = document.getElementsByName("main")[0];
        this.boardDiv = document.getElementsByName("board")[0];
        this.boardoverlayDiv = document.getElementsByName("boardoverlay")[0];

        this.tile = [];
        this.player = [];
        this.playerturn = [];
    }
}