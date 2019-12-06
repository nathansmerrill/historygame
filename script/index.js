function tickTimer() {

}

$(document).ready(() => {
    $('#articlePage').hide();
    $('#startButton').click( () => {
        $('#startingPage').hide();
        $('#articlePage').show();
    });
});