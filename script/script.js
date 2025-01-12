// Select Elements:
let countSpan       = document.querySelector(".quiz-info .count span");
let quizArea        = document.querySelector(".quiz-area");
let bulletContainer = document.querySelector(".bullets .spans");
let answerArea      = document.querySelector(".answers-area");
let submitBtn       = document.querySelector(".submit-button");
let currentIndex    = 0;

function getQuestions() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questObj = JSON.parse(this.responseText);
      let questCount = questObj.length;

      // Create bullets + Set question count
      createBullets(questCount);

      // Add Questions Data
      addQuestions(questObj[currentIndex], questCount);

      // Click on submit btn
      submitBtn.onclick = () => {
        let rightAnswer = questObj[currentIndex].right_answer;
      }
    }
  };
  request.open("GET", "../json/questions.json", true);
  request.send();
}

getQuestions();

function createBullets(num) {
  countSpan.innerHTML = num;

  for (let i = 0; i < num; i++) {
    let bullet = document.createElement("span");
    if (i === 0) {
      bullet.className = "on";
    }

    bulletContainer.appendChild(bullet);
  }
}

function addQuestions(obj, count) {
  let questionTitle = document.createElement("h2");
  let questionTxt   = document.createTextNode(obj.title);
  questionTitle.appendChild(questionTxt);
  quizArea.appendChild(questionTitle);
  for (let i = 1; i <= 4; i++) {
    let mainDiv       = document.createElement("div");
    mainDiv.className = "answer";
    let radioInput    = document.createElement("input");
    radioInput.name   = "question";
    radioInput.type   = "radio";
    radioInput.id     = `answer_${i}`;
    radioInput.dataset.answer = obj[`answer_${i}`];

    // First Option selected by default:
    if (i === 1) {
      radioInput.checked = true;
    }

    let label     = document.createElement("label");
    label.htmlFor = `answer_${i}`;
    let labelTxt  = document.createTextNode(obj[`answer_${i}`]);
    label.appendChild(labelTxt);
    mainDiv.appendChild(radioInput);
    mainDiv.appendChild(label);
    answerArea.appendChild(mainDiv);
  }
}