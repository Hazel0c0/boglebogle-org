const $score =0;

function initEvent(){
    $('#kill').keyup(function(){
        addScore();
    })
}

function addScore() {
    if(playing==true){
        count++;
        $score.html(count);
    }
}