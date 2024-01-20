function updateLosAngelesTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTimezone = moment().tz("America/Los_Angeles");
  let losAngelesTime = losAngelesTimezone.format("h:mm:ss");
  let losAngelesAmPm = losAngelesTimezone.format("A");

  losAngelesDateElement.innerHTML = losAngelesTimezone.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime} <small>${losAngelesAmPm}</small>`;
}

function updateParisTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTimezone = moment().tz("Europe/Paris");
  let parisTime = parisTimezone.format("h:mm:ss");
  let parisAmPm = parisTimezone.format("A");

  parisDateElement.innerHTML = parisTimezone.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = `${parisTime} <small>${parisAmPm}</small>`;
}

function updateAccraTime() {
  let accraElement = document.querySelector("#accra");
  let accraDateElement = accraElement.querySelector(".date");
  let accraTimeElement = accraElement.querySelector(".time");
  let accraTimezone = moment().tz("Africa/Accra");
  let accraTime = accraTimezone.format("h:mm:ss");
  let accraAmPm = accraTimezone.format("A");

  accraDateElement.innerHTML = accraTimezone.format("MMMM Do YYYY");
  accraTimeElement.innerHTML = `${accraTime} <small>${accraAmPm}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
  <h2>${cityName}</h2>
  <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

setInterval(updateLosAngelesTime, 1000);
setInterval(updateParisTime, 1000);
setInterval(updateAccraTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
