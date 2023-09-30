var runStart =0;
function Start (evevt){

    //Enter key

    if (evevt.which == 13){
        if (runWorkerId == 0){
            runWorkerId = setInterval(run, 100);
            runStart =1;
            runSound.play();
            sound.play();

            backgroundWorkeId = setInterval(moveBackground,100);
            scoreWorkerId = setInterval(updateScore,100);
            blockWorkerId = setInterval(createBlock,100);
            moveBlockWorkerId=setInterval(moveBlocks,100);

        }
    }

    //space key
    if (evevt.which==32){
        if (runStart==1){
            if (jumpWorkerId == 0){
                clearInterval(runWorkerId);
                runSound.pause();
                runWorkerId = -1;
                jumpWorkerId = setInterval(jump,100);
                jumpSound.play();
            }
        }
    }

    //Run Function
   var player=document.getElementById("player");
    var runImageNumber =1;
    var runWorkerId =0;
    var sound= new Audio("run.mp");
    var sound = new Audio("");
    var runSound =new Audio('run.mp');
    var snowSound = new Audio("");
    runSound.loop  = true;
    
   function run(){
       runImageNumber++;
       if (runImageNumber == 9){
           runImageNumber = 1;
       }
       player.src ="Run ("+runImageNumber+").png";
   }

   //Jump function

        var jumpImgeNumber = 1;
        var jumpWorkId =0;
        var playerMarginTop = 400;

        var playerMarginTop = 400;
        var jumpSound = new Audio("jump.mp3");
        function jump(){
            jumpImgeNumber ++;

            // 2-7 jump Images

            if(jumpImgeNumber <=7){
                playerMarginTop = playerMarginTop - 40;
                player.style.marginTop = playerMarginTop +"px";
            }

            // 8-13 jump images
            if(jumpImgeNumber >=8){
                playerMarginTop = playerMarginTop + 40;
                player.style.marginTop = playerMarginTop +"px";
            }

            if (jumpImgeNumber== 13){
                jumpImgeNumber =1;
                clearInterval(jumpWorkerId);
                jumpWorkerId =0;

                runWorkerId =setInterval(run ,100);
                runSound.play();
            }
            player.src="jump( "+jumpImgeNumber +").png";
        }
// background move function
        var background =document.getElementById("background");
        backgroundDx =0;
        backgroundWorkeId =0;

        function moveBackground(){
            backgroundDx =backgroundDx - 20;
            background.style.backgroundPositionX +"px";
        }

        // score function
        var score =document.getElementById("score");
        var scoreValue= 0;
        var scoreWorkerId = 0;

        function updateScore(){
            scoreValue = scoreValue + 5;
            score.innerHTML = scoreValue;
        }

        //creat obstacles
        var blockWorkerId =0;
        var blockMarginLeft =600;
        var blockId=1;

        function createBlock(){
            var block = document.createElement("div");
            block.className ="block";
            block.id ="block"+blockId;
            blockId++;

            var gap =Math.random() * (1000 - 400)+400;
            blockMarginLeft = blockMarginLeft + gap;
            block.style.marginLeft = blockMarginLeft +"px";

            background.appendChild(block);
        }
}
