let info = document.getElementById("info");
let s = location.search.slice(1).replaceAll("+", " ").split("&");
let cinemaName = s[0].substring(11);
let movieName = s[1].substring(10);
let date = s[2].substring(5).replace("%2C", ",").replace("%3A", ":");
let house = s[3].substring(6);
function updateInfo() {
  let a = "";
  for (let i = 4; i <= s.length - 1; i++) {
    a += `<div class="cinema">
        <h3>Ticket ${i-3}</h3>
        <p>Cinema: ${cinemaName}</p>
        <p>Movie: ${movieName}</p>
        <p>Date Time: ${date}</p>
        <p>House No: ${house}</p>
        <p>Seat: ${s[i].substring(s[i].length-2)}</p>
        </div>
        <hr />`;
    }
    info.innerHTML=a;
}
updateInfo();
