let counter = 0;
let currentArticle = 1;
let timerInterval;
const articles = [
    {
        title : 'Facts',
        content :`
        <p class="lead">
        Thicc Nut
        </p>
        `
    }, {
        title : 'Timeline',
        content : `
        <div class="timeline">
            <div class="container timeline-left">
                <div class="timeline-content">
                    <h2>1848</h2>
                    <ul>
                        <li>US acquires California</li>
                        <li>Policymaker Aaron H. Palmer sends plan to congress</li>
                        <li>This plan recommends the US should import Chinese workers to work
                        on the transcontinental railroad</li>
                    </ul>
                </div>
            </div>
            <div class="container timeline-right">
                <div class="timeline-content">
                    <h2>1969</h2>
                    <p>They did more stuff</p>
                </div>
            </div>
        </div>
        `
    }
];

function tickTimer() {
    counter++;
    // $('#timer').text(Math.floor(counter / 60) +
    //     ((Math.floor(counter/60) == 1) ? ' min ' : ' mins ') +
    //     (counter % 60) + ' sec');
    let seconds = counter % 60;
    $('#timer').text(Math.floor(counter/60) + ':' +
        ((seconds <= 9) ? '0' : '') +
        seconds);
}
function setArticle(articleI) {
    $('#articleTitle').text(articles[articleI].title);
    // $('#articleContent').text(articles[articleI].content);
    $('#articleContent').html(articles[articleI].content);
}

$(document).ready(() => {
    // tickTimer();
    $('#articlePage').hide();
    $('#secretPasswordPage').hide();
    $('#startButton').click( () => {
        $('.article-button').click( () => {
           alert('Hello World');
        });
        $('#startingPage').hide();
        $('#articlePage').show();
        timerInterval = setInterval(tickTimer, 1000);
        //this line of code is very largehead /\
        setArticle(currentArticle);
        articles.map((value, index) => {
            $('#articleButtons').append('<button class="btn btn-main article-button">' + (index + 1) + '</button>');
        });
    });
});