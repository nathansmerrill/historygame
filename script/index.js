let timer = 0;
let timerInterval;
let currentPageI = 0;
const questionTypes = {
    NUMBER : 0,
    CHOICE : 1,
    TRUEFALSE : 2
};
const pages = [
     {
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
                    <h2>1849</h2>
                    <ul>
                        <li>Chinese migrants start arriving in America because China is full of war, rebellion, high taxes, floods, and famine</li>
                        <li>America seems to beckon them</li>
                        <li>America has good Gold and job opportunities</li>
                    </ul>
                </div>
            </div>
            
            <div class="container timeline-left">
                <div class="timeline-content">
                    <h2>1852</h2>
                    <ul>
                        <li>Chinese miner tax implemented. Tax is $3 dollars a month (~$84.72 today)</li> 
                    </ul>
                </div>
            </div>
            <div class="container timeline-right">
                <div class="timeline-content">
                    <h2>1854</h2>
                    <ul>
                        <li>California State Supreme Court rules “Chinese and other people not white” cannot give evidence against whites in court</li>
                    </ul>
                </div>
            </div>
            
            <div class="container timeline-left">
                <div class="timeline-content">
                    <h2>1860s</h2>
                    <ul>
                        <li>Laborer Wages: $3-5/month - China, $30/month - California</li> 
                    </ul>
                </div>
            </div>
            <div class="container timeline-right">
                <div class="timeline-content">
                    <h2>1869</h2>
                    <ul>
                        <li>Central Pacific Railroad Completed</li>
                    </ul>
                </div>
            </div>
            
            <div class="container timeline-left">
                <div class="timeline-content">
                    <h2>1870s</h2>
                    <ul>
                        <li>~63,000 Chinese in the United States - 19/20 people were men
                        </li> 
                        <li>California had collected a total of 5 million tax dollars from Chinese immigrants.</li>
                    </ul>
                </div>
            </div>
            <div class="container timeline-right">
                <div class="timeline-content">
                    <h2>1879</h2>
                    <ul>
                        <li>President Rutherford B. Hayes issued a racist warning to the American people about the “Chinese problem”  </li>
                    </ul>
                </div>
            </div>
            
            <div class="container timeline-left">
                <div class="timeline-content">
                    <h2>1880</h2>
                    <ul>
                        <li>~More than ⅔ farm workers in Sacramento, Solano, and Yuba counties were chinese</li> 
                    </ul>
                </div>
            </div>
            <div class="container timeline-right">
                <div class="timeline-content">
                    <h2>1882</h2>
                    <ul>
                        <li>3 years after Rutherford B. Hayes issues the warning. The US passes a law that makes it illegal for chinese to immigrate to the US.</li>
                    </ul>
                </div>
            </div>
            
            <div class="container timeline-left">
                <div class="timeline-content">
                    <h2>1906</h2>
                    <ul>
                        <li>Giant earthquake & Fire that burn Chinese birth certificates and Citizenship records in california, which means many chinese can claim to be US. Citizens.</li> 
                    </ul>
                </div>
            </div>
            <div class="container timeline-right">
                <div class="timeline-content">
                    <h2>1910-30s</h2>
                    <ul>
                        <li>Between 1910 and 1924 one in five Chinese immigrants was female, compared with only 1 in 20 before 1900.</li>
                    </ul>
                </div>
            </div>
            <div class="container timeline-left">
                <div class="timeline-content">
                    <h2>1930</h2>
                    <ul>
                        <li>400,000 chinese had made the pacific crossing.</li> 
                    </ul>
                </div>
            </div>
            <div class="container timeline-right">
                <div class="timeline-content">
                    <h2>1943</h2>
                    <ul>
                        <li>The chinese exclusion act came to an end</li>
                    </ul>
                </div>
            </div>
        </div>
        `,
         questions : [
             {
                 content : 'How many years did the Chinese Exclusion Act last?',
                 type : questionTypes.NUMBER,
                 correctAnswer : 61
             },
             {
                 content : "Did the percent of Chinese women spike in 1910-30?",
                 // type : questionTypes.TRUEFALSE,
                 // correctAnswer : true
                 type : questionTypes.NUMBER,
                 correctAnswer : 69
             }
         ],
         addPage : 0
    }
];

const hiddenPages = [
    {
        title : 'TestHidden Page',
        content: `
        <h1>Efe dummy thicc tho</h1>
        `
    }
];

window.addEventListener("keydown",function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
        e.preventDefault();
        timer += 30;
        alert("Nice Try, but that makes it a little too easy :) +30 seconds");
    }
});

function tickTimer() {
    timer++;
    // $('#timer').text(Math.floor(counter / 60) +
    //     ((Math.floor(counter/60) == 1) ? ' min ' : ' mins ') +
    //     (counter % 60) + ' sec');
    let seconds = timer % 60;
    $('#timer').text(Math.floor(timer/60) + ':' +
        ((seconds <= 9) ? '0' : '') +
        seconds);
}
function checkForRightAnswers(page) {
    // console.log($('.questionInput, [disabled]').length);
    if ($('.questionInput[disabled]').length === page.questions.length) {
        alert('all correct answers');
        // pages.push(hiddenPages[page.addPage]);
    }
    // console.log($('.questionInput[disabled]').length);
    console.log(page.questions.length);
}
function setArticle(pageI) {
    currentPageI = pageI;
    let page = pages[pageI];
    $('#articleTitle').text(page.title);
    // $('#articleContent').text(articles[articleI].content);
    $('#articleContent').html(page.content);
    $('#articleQuestions').html('');
    if (page.questions !== undefined) {
        let articleQuestions = $('#articleQuestions');
        for (let i = 0; i < page.questions.length; i++) {
            let question = page.questions[i];
            articleQuestions.append('<h4>'+ question.content +'</h4>');
            switch (question.type) {
                case questionTypes.NUMBER:
                    console.log('loading number question');
                    articleQuestions.append('<input questionIndex=\"' + i + '\" type="number" class="form-control questionInput">');
                    break;
                case questionTypes.CHOICE:
                    console.log('loading multiple choice question');
                    break;
                case questionTypes.TRUEFALSE:
                    console.log('loading true false question');
                    break;
            }
        }
        articleQuestions.append('<div id="checkAnswers"><button class="btn btn-main">Check Answers</button></div>');
        $('#checkAnswers').click( function() {
            for (let i = 0; i < page.questions.length; i++) {
                let question = page.questions[i];
                switch (question.type) {
                    case questionTypes.NUMBER:
                        let questionInput = $("[questionIndex=\'"+ i +"\']");
                        if (questionInput.val() == question.correctAnswer) {
                            console.log('correct answer');
                            questionInput.prop("disabled", true);
                            questionInput.css('background-color', 'rgba(17,129,17,0.69)');
                            checkForRightAnswers(page);
                        } else {
                            console.log('wrong answer');
                            questionInput.css('background-color', 'rgba(224,145,148,0.8)');
                        }
                        break;
                }
            }
        });
    }
}

$(document).ready(() => {
    // tickTimer();
    $('#articlePage').hide();
    $('#startButton').click( () => {
        $('#startingPage').hide();
        $('#articlePage').show();
        timerInterval = setInterval(tickTimer, 1000);
        //this line of code is very largehead /\
        setArticle(0);
        pages.map((value, index) => {
            // $('#articleButtons').append('<button class="btn btn-main article-button">' + (index+1) + '</button>');
            $('#articleButtons').append('<button class="btn btn-main article-button" articleIndex=\"' + index + '\">' + pages[index].title + '</button>');
        });
        $('.article-button').click( function() {
           // setArticle($(this).text()-1);
            setArticle($(this).attr('articleIndex'));
        });
        //before you heck with this  realize its the only way it works fsr
        // $(document).on('click','#check', function() {
        //     let questions = pages[currentPageI].questions;
        //     for (let i = 0; i < questions.length; i++) {
        //         let question = questions[i];
        //         //alert(question.content);
        //     }
        // });
        $('#rollButton').click( function() {
            let rollPerson = confirm('Are you sure you don\'t want to finish the scavenger hunt legitimately?');
            if (rollPerson) {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                timer += 60;
                alert('Enjoy your 1 minute penalty ;)');
            }
        });
    });
});

