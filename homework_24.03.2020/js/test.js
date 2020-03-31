const questions = [
    ['1). How many letters are the in the world "Hello"?', '5','2'],
    ['2). How many letters are the in the world "World"?', '4','5'],
    ['3). How many letters are the in the world "Old"?', '10','3']
];
const answers = ['5','5','3'];
let acc = 0;
let results = [];

function fillHtml(param) {
    if(acc !== questions.length) {
        question.innerText = param[0];
        variant1.innerText = param[1];
        variant2.innerText = param[2];
        if(acc === questions.length-1) testBtn.innerText = 'Finished';
        acc++;
    } else {
        test.innerHTML = `<p>Result: <b>${showResult()}</b> correct answers to ${questions.length} questions</p>`;
    }
}

function saveResult() {
    let radios = test.querySelectorAll('input[name="a1"]');
    let spans = test.querySelectorAll('span');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            results.push(spans[i].innerText);
        }
    }
}

function showResult() {
    let rightAnswers = 0;
    for(let t = 0; t < answers.length; t++) {
        if(answers[t] === results[t]) rightAnswers++;
    }
    return rightAnswers;
}

fillHtml(questions[acc]);
testBtn.addEventListener('click', () => {
    saveResult(acc);
    fillHtml(questions[acc]);
});