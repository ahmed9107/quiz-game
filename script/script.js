function getQuestions() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questions = JSON.parse(this.responseText);
      console.log(questions[0].title);
    }
  }
  request.open("GET", "../json/questions.json", true);
  request.send();
}

getQuestions();