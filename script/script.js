// Select Elements:
let countSpan       = document.querySelector(".quiz-info .count span");
let bulletContainer = document.querySelector(".bullets .spans");

function getQuestions() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questObj = JSON.parse(this.responseText);
      let questCount = questObj.length;

      // Create bullets + Set question count
      createBullets(questCount);

      // Add Questions Data
      addQuestions();
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