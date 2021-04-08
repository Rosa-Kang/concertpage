let showDates =
  "https://project-1-api.herokuapp.com/showdates?api_key=7a7Oxyge7NrVlk3frEHpTpu3gMMzRRcU7r4zSRpO";

  axios.get(showDates).then(function(response) {
  console.log(response.data);
  let schedule = response.data;
  schedule.forEach(function(show) {
    console.log(show.date);
  let d = new Date(show.date*1),
    yyyy = d.getFullYear(),
    mm = ("0" + (d.getMonth() + 1)).slice(-2),
    dd = ("0" + d.getDate()).slice(-2),
    convertedDate = `${mm}/${dd}/${yyyy}`;
  console.log(d);
  let div = document.createElement("table");
    div.className = "table--one";
    div.innerHTML =
      '<tr><th id="hide">DATES</th></tr ><tr><td id="fontDate">' +
      convertedDate +
      '</td></tr ><tr><th id="hide">VENUE</th></tr><tr><td>' +
      show.place +
      '</td></tr><tr><th id="hide">LOCATION</th></tr><tr><td>' +
      show.location +
      '</td></tr><tr><td id="buyTable"><button id="buyTicket" type="submit">BUY TICKETS</button></td></tr>';
    document.querySelector(".table--summary").appendChild(div);
  });
});