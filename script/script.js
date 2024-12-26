// Select Elements:
let countSpan       = document.querySelector(".quiz-info .count span");
let bulletContainer = document.querySelector(".bullets .spans");
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
      addQuestions(questCount[0], questCount);
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
  console.log(obj);
  // let questionTxt   = document.createTextNode();
}