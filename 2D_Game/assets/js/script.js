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
}
