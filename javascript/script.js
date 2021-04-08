let apiURL =
  "https://project-1-api.herokuapp.com/comments?api_key=7a7Oxyge7NrVlk3frEHpTpu3gMMzRRcU7r4zSRpO";

axios.get(apiURL).then(function(response) {
  let feedback = response.data;
  let after = feedback.sort(
    (a, b) => parseFloat(b.timestamp) - parseFloat(a.timestamp)
  );
  let i =0;
  after.map(function(review) {
    if (review.timestamp < 1617923314961) {
      imgSrc = `../images/${review.id}.jpg`}
      else {
      imgSrc = "../images/Mohan-muruge.jpg"}
    let existingComment = new commentsData(
      convertTime(review.timestamp),
      review.name,
      review.comment,
      imgSrc
    );
    commentsArray.push(existingComment);
    logComment(commentsArray[i]);
    i++;
  });
});

let time = new Date();
let timeStr = time.toLocaleDateString();

function commentsData(date, name, comment, imgSrc) {
  this.date = date;
  this.name = name;
  this.comment = comment;
  this.imgSrc = imgSrc;
}

let commentsArray = [];

let commentButton = document.getElementById("myButton");
commentButton.addEventListener("click", getInfo);

function getInfo() {
  let nameValue = document.getElementById("inputName").value;
  let contentsValue = document.getElementById("inputComment").value;
  let dateValue = timeStr;
  let imgSrc = "../Images-2/Mohan-muruge.jpg";

  let commentsO = new commentsData(dateValue, nameValue, contentsValue, imgSrc);
  commentsArray.unshift(commentsO);
  let commentObj = {
    name: commentsO.name,
    comment: commentsO.comment
  };
  axios.post(apiURL, commentObj).catch(error => {
    console.log("failed");
  });
  document.getElementById("existingComment").innerHTML = "";
  for (i = 0; i < commentsArray.length; i++) {
    logComment(commentsArray[i]);
  }
  document.getElementById("inputName").value = "";
  document.getElementById("inputComment").value = "";
}

function convertTime(timestamp) {
  var d = new Date(timestamp),
    yyyy = d.getFullYear(),
    mm = ("0" + (d.getMonth() + 1)).slice(-2),
    dd = ("0" + d.getDate()).slice(-2),
    hh = d.getHours(),
    h = hh,
    min = ("0" + d.getMinutes()).slice(-2),
    ampm = "AM",
    time;
  if (hh > 12) {
    h = hh - 12;
    ampm = "PM";
  } else if (hh === 12) {
    h = 12;
    ampm = "PM";
  } else if (hh == 0) {
    h = 12;
  }
  time = mm + "/" + dd + "/" + yyyy;
  return time;
}

function logComment(comments) {
  let div = document.createElement("div");
  div.innerHTML =
    '<div class="existingBox">' +
    '<div id="avatar">' +
    '<img id="emoji"' +
    "src=" +
    comments.imgSrc +
    ">" +
    "</div>" +
    '<div id="letters">' +
    '<div id="nameDate">' +
    '<div id="name">' +
    comments.name +
    "</div>" +
    '<div id="date">' +
    comments.date +
    "</div>" +
    "</div>" +
    '<div id="text">' +
    comments.comment +
    "</div>" +
    "</div>" +
    "</div>";
  document.getElementById("existingComment").appendChild(div);
}