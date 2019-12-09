let timer = 0;
let timerInterval;
let currentPageI = 0;
const questionTypes = {
    NUMBER : 0,
    CHOICE : 1,
};
pages = [
    {
        title : 'Random Facts',
        content: `
        <ul>
            <li>The US acquired California in the Treaty of Guadalupe Hidalgo.</li>
            <li>Chinese gave California the Nickname 'Gam Samm' (or gold mountain)</li>
            <li>Laundrywork was one of the easiest jobs to take up as a chinese immigrant</li>
            <li>When the chinese exclusion act was put into place, the chinese made up only 0.002% of the population</li>
            <li>Before the chinese exclusion act, some men had been able to bring wives in, even though they made up only 5% of the population</li>
            <li>The first chinese american born in washington was Chin Lem, and his Father was Chin Gee Hee, who was one of the few that brought his wife in</li>
            <li>The fact that there were few women during the chinese exclusion acts was a big problem for chinese</li>
            <li>Organizations were part of life in chinese America from the start</li>
            <li>Groups called tongs controlled prostitution and gambling, but also protected many chinese</li>
            <li>Groups called fongs were made up of family/village members</li>
            <li>Many Chinatowns formed, including ones in Oakland, Los Angeles, Chicago, Seattle, Portland, New York, and Boston as well as San Francisco</li>
        </ul>
        `,
        questions : [
            {
                content : 'What was the name of the first Chinese american born in washington?',
                type : questionTypes.CHOICE,
                choices : [
                    'Ching Lin',
                    'Ching Gee Hee',
                    'Chin Lem',
                    'Chin Gee Hee'
                ],
                correctAnswer: 2
            },
            {
                content : 'Name 3 Cities that have Chinatowns',
                type : questionTypes.CHOICE,
                choices : [
                    'Phoenix,, Seattle, Portland',
                    'Los Angeles,, Oakland, Boston',
                    'San Francisco,, Seattle, Houston',
                    'Portland,, Philadelphia, San Diego'
                ],
                correctAnswer: 1
            },
            {
                content : 'Every 1 in _____ people were chinese during the Chinese Exclusion Act',
                type : questionTypes.NUMBER,
                correctAnswer: 50000
            },
            {
                content : 'TRUE OR FALSE: Tongs protected Chinese migrants',
                type : questionTypes.CHOICE,
                choices : [
                    'True',
                    'False'
                ],
                correctAnswer: 0
            },
            {
                content : 'What was a big problem for Chinese during the Chinese Exclusion Act',
                type : questionTypes.CHOICE,
                choices : [
                    'Laundrywork was highly contested',
                    'There were very few women (1 in 20 people)',
                    'There were very few women (1 in 5 people)',
                    'The Treaty of Guadalupe Hidalgo '
                ],
                correctAnswer: 1
            }
        ],
        addPage : 0
    }

];

const hiddenPages = [
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
                content : "How much was the miner's tax (in today's money)?",
                // correctAnswer : true
                type : questionTypes.NUMBER,
                correctAnswer : 84.72
            },
            {
                content : 'What event happened in 1854',
                type : questionTypes.CHOICE,
                choices : [
                    'The Central Pacific Railroad Completed',
                    'The Chinese Miner Tax was Implemented',
                    'There was a large earthquake and fire',
                    'Supreme Court declares non-whites cannot give evidence against whites in court.'
                ],
                correctAnswer: 3

            },
            {
                content : 'Why do you think that the Chinese Exclusion act was Implemented?',
                type : questionTypes.CHOICE,
                choices : [
                    'White people wanted more Racial Purity',
                    'Many White people thought that Chinese were going to "steal" their jobs',
                    'All of the Above',
                    'The economy started failing'
                ],
                correctAnswer: 2
            },
            {
                content : 'What chinese organization was made primarily of family or village members?',
                type : questionTypes.CHOICE,
                choices : [
                    'Tongs',
                    'Fongs',
                    'Chinese Miners',
                    'Clans'
                ],
                correctAnswer: 1
            }
        ],
        addPage : 1
    },
    {
        title : 'Paper Sons',
        content : `
        <p>Many young Chinese men would try to enter the US as "paper sons". <br>
        They would pretend to be the sons of chinese in the US. Eventually, <br>
        they couldn't just claim to be the children of these people they would <br>
        have to take a test to prove that these people were their fathers. <br>
        During the voyage, the paper sons would have to memorize lots of info <br>
        about their "fathers". Some people needed to memorize 200 pages of info! <br>
        Some questions were very specific, such as "How many steps are there in <br>
        your house" , and "where do you sleep". Sometimes they needed to lie and <br>
        think quick to get in to the US. When they had confronting answers then <br>
        they would have to make up lots of lies to get in
        </p>
        `,
        questions : [
            {
                content : 'How many pages of information did some paper sons have to memorize?',
                type : questionTypes.NUMBER,
                correctAnswer : 200
            },
            {
                content : 'What\'s an example of a specific question paper sons were asked?',
                type : questionTypes.CHOICE,
                choices : [
                    'How many siblings do you have?',
                    'How many doors are in your house?',
                    'How many steps are there in your house?',
                    'What kind of floor do you have in your house?'
                ],
                correctAnswer : 2
            },{
                content : 'How many years did it take to build the central pacific railroad?',
                type : questionTypes.NUMBER,
                correctAnswer : 20
            },
            {
                content : 'What year did the california records building burn?',
                type : questionTypes.NUMBER,
                correctAnswer : 1906
            },{
                content : 'What was the name of the Agreement that gave the US California',
                type : questionTypes.CHOICE,
                choices : [
                    'Treaty of Guadalupe Hidalgo.',
                    'Kin Huie Agreement',
                    'Rutherford B. Hayes Act',
                    'The California Agreement'
                ],
                correctAnswer : 0
            },{
                content : 'TRUE OR FALSE: There wasnt a chinatown in New York',
                type : questionTypes.CHOICE,
                choices : [
                    'True',
                    'False'
                ],
                correctAnswer : 1
            }
        ]

    }

];

window.addEventListener("keydown",function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
        e.preventDefault();
        timer += 30;
        alert("Nice Try, but that makes it a little too easy :) +30 seconds");
    }
});
function formatTime(time) {
    let seconds = time % 60;
    return Math.floor(time/60) + ':' +
        ((seconds <= 9) ? '0' : '') +
        seconds;
}
function tickTimer() {
    timer++;
    // $('#timer').text(Math.floor(counter / 60) +
    //     ((Math.floor(counter/60) == 1) ? ' min ' : ' mins ') +
    //     (counter % 60) + ' sec');

    $('#timer').text(formatTime(timer));
}
function loadArticleButtons() {
    $('#articleButtons').html('');
    pages.map((value, index) => {
        // $('#articleButtons').append('<button class="btn btn-main article-button">' + (index+1) + '</button>');
        $('#articleButtons').append('<button class="btn btn-main article-button" articleIndex=\"' + index + '\">' + pages[index].title + '</button>');
    });
    $('.article-button').click( function() {
        // setArticle($(this).text()-1);
        let articleIndex = $(this).attr('articleIndex');
        if (articleIndex < currentPageI) {
            timer += 15;
        }
        setArticle($(this).attr('articleIndex'));
    });
}
function checkForRightAnswers(page) {
    if ($('.questionInput[disabled]').length === page.questions.length) {
        console.log('all page answers correct');
        if (page.addPage != null) {
            if (page.pageAdded === undefined) {
                pages.push(hiddenPages[page.addPage]);
                page.pageAdded = true;
            }
            loadArticleButtons();
        } else {
            console.log('finished quiz');
            $('#articlePage').hide();
            $('#finishPage').show();
            $('#finishTitle').text('Congratulations, you finished in ' + Math.floor(timer/60) + ' minutes and ' + (timer % 60) + ' seconds!');
            $('#restartButton').click( () => {
               window.location.href = 'https://nathanm.cf/historygame';
            });
        }
    }
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
                    articleQuestions.append(`
                    <select class="form-control questionInput" questionIndex=\"`+ i +`\">
                        `+ question.choices.map( (answer, i) => {
                        return ('<option value=\"'+ i +'\">' + answer.replace(',', '') + '</option>')
                    }) +`
                    </select>
                    `);
                    break;
            }
        }
        articleQuestions.append('<div id="checkAnswers"><button class="btn btn-main">Check Answers</button></div>');
        $('#checkAnswers').click( function() {
            for (let i = 0; i < page.questions.length; i++) {
                let question = page.questions[i];
                let questionInput = $("[questionIndex=\'"+ i +"\']");
                if (questionInput.val() == question.correctAnswer) {
                    questionInput.prop('disabled', true);
                    questionInput.css('background-color', 'rgba(17,129,17,0.69)');
                    checkForRightAnswers(page);
                } else {
                    questionInput.css('background-color', 'rgba(224,145,148,0.8)');
                }
                // switch (question.type) {
                //     case questionTypes.NUMBER:
                //         if (questionInput.val() == question.correctAnswer) {
                //             questionInput.prop("disabled", true);
                //             questionInput.css('background-color', 'rgba(17,129,17,0.69)');
                //             checkForRightAnswers(page);
                //         } else {
                //             questionInput.css('background-color', 'rgba(224,145,148,0.8)');
                //         }
                //         break;
                //     case questionTypes.CHOICE:
                //         if (questionInput.val() == question.correctAnswer) {
                //             questionInput.prop('disabled', true);
                //             questionInput.css('background-color', 'rgba(17,129,17,0.69)');
                //             checkForRightAnswers(page);
                //         } else {
                //             questionInput.css('background-color', 'rgba(224,145,148,0.8)');
                //         }
                //         break;
                // }
            }
        });
    }
}

$(document).ready(() => {
    // tickTimer();
    $('#articlePage').hide();
    $('#finishPage').hide();
    $('#startButton').click( () => {
        $('#startingPage').hide();
        $('#articlePage').show();
        timerInterval = setInterval(tickTimer, 1000);
        //this line of code is very largehead /\
        setArticle(0);
        loadArticleButtons();
        //before you heck with this  realize its the only way it works fsr vruhhhhhhhhhhh
        // $(document).on('click','#check', function() {
        //     let questions = pages[currentPageI].questions;
        //     for (let i = 0; i < questions.length; i++) {
        //         let question = questions[i];
        //         //alert(question.content);
        //     }
        // });
        $('#rollButton').click( function() {
            let rollPerson = confirm('Do you really want to cheat?');
            if (rollPerson) {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                timer += 60;
                alert('Enjoy your 1 minute penalty ;)');
            }
        });
    });
});