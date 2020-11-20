class form{
    constructor (){

    }
    display(){
        var title  = createElement('h2');
        title.html("CAR RACING!!!!");
        title.position(200,10);

        var input = createInput("Enter your name:");
        var button = createButton("START");
        var greeting = createElement('h2');

        input.position(200, 150);
        button.position(300,250);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();

            greeting.html("Hye!!!" +name);
            greeting.position(200,160);

            playerCount = playerCount +1;
            player1.update(name);
            player1.updateCount(playerCount);
        })
    }
}