// Select Elements:
let countSpan = document.querySelector(".quiz-info .count");

function getQuestions() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questObj = JSON.parse(this.responseText);
      let questCount = questObj.length;
      console.log(questCount);

      // Create bullets + Set question count
      createBullets(questCount);
    }
  };
  request.open("GET", "../json/questions.json", true);
  request.send();
}

getQuestions();

function createBullets(num) {
  countSpan.innerHTML = num;
}