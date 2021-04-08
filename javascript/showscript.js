let showDates =
  "https://project-1-api.herokuapp.com/showdates?api_key=7a7Oxyge7NrVlk3frEHpTpu3gMMzRRcU7r4zSRpO";

axios.get(showDates).then(function(response) {
  console.log(response.data);
  let schedule = response.data;
  schedule.forEach(function(show) {
    let div = document.createElement("table");
    div.className = "table--one";
    div.innerHTML =
      '<tr><th id="hide">DATES</th></tr ><tr><td id="fontDate">' +
      show.date +
      '</td></tr ><tr><th id="hide">VENUE</th></tr><tr><td>' +
      show.place +
      '</td></tr><tr><th id="hide">LOCATION</th></tr><tr><td>' +
      show.location +
      '</td></tr><tr><td id="buyTable"><button id="buyTicket" type="submit">BUY TICKETS</button></td></tr>';
    document.querySelector(".table--summary").appendChild(div);
  });
});