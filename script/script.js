function getQuestions() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    }
  }
  request.open("GET", "../json/questions.json", true);
  request.send();
}

getQuestions();