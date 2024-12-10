function getQuestions() {
  let request = new XMLHttpRequest();
  request.open("GET", "question.json", true);
  request.send();
}