const questions = [
    ['1). How many letters are the in the world "Hello"?', '5','2'],
    ['2). How many letters are the in the world "World"?', '4','5']
];
const answers = ['5','5'];
let results = [];

function startTest(arrQuestions) {

    for(let k = 1; k < arrQuestions.length; k++) {
        btnTest.addEventListener('click', (e) => {
            saveResult(k);
            containerTest.remove();
            if(k === arrQuestions.length - 1) {
                buildQuestion(questions[k], 'Finished');
            } else {
                buildQuestion(questions[k], 'Next');
            }
        })
    }

}
function buildQuestion(question, action) {

    let container, quest, answ, val, enter, btn;

    container = document.createElement('DIV');
    container.setAttribute("id", "containerTest");
    test.appendChild(container);

    quest = document.createElement('P');
    quest.innerText = question[0];
    containerTest.appendChild(quest);

    for(let i = 1; i < question.length; i++) {
        answ = document.createElement('INPUT');
        answ.setAttribute("name", "r1");
        answ.setAttribute("type", "radio");
        answ.setAttribute("value", question[i]);
        val = document.createElement('SPAN');
        val.innerText = question[i];
        enter = document.createElement('BR');
        containerTest.appendChild(answ);
        containerTest.appendChild(val);
        containerTest.appendChild(enter);
    }
    btn = document.createElement('BUTTON');
    btn.setAttribute("id", "btnTest");
    btn.innerText = action;
    containerTest.appendChild(btn);

}
function saveResult(answer) {
    let res = document.getElementsByName('r1');
    for (let m = 0; m <= res.length; m++) {
        if (res[m].checked) {
            results[answer] = m;
            alert('Выбран '+m+' radiobutton');
        }
    }
}
buildQuestion(questions[0], 'Next');
startTest(questions);