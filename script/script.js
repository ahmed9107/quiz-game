// Select Elements:
let questCount = document.querySelector(".quiz-info .count");

function getQuestions() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questions = JSON.parse(this.responseText);
    }
  }
  request.open("GET", "../json/questions.json", true);
  request.send();
}

function createBullets(num) {
  
}