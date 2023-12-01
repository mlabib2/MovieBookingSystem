let box = document.getElementById("box");
let table = document.getElementById("table");
let confirm=document.getElementById("confirm");
let p = location.search;
var ct=0;
let queryIndex = +location.search.substring(p.length - 1);
let queryName = location.search.substring(11, p.length - 7).replace("+", " ");
function updateBox() {
  let a = "";
  getCinemas().forEach((el) => {
    el.movies.forEach((ele) => {
      ele.shows.forEach((item) => {
        if (item.index === queryIndex) {
          box.innerHTML = `
          <label>Cinema:</label>
      <input name="CinemaName" value="${el.branchName}" ></input>
      <label>Movie Name:</label>
      <input name="MovieName" value="${queryName}"></input>
      <label>Date and time:</label>
      <input name="date" value="${item.datetime}"></input>
      <label>House:</label>
      <input name="house" value="${item.house}"></input>`;
        }
      });
    });
  });
}

updateBox();

function bookSeat(e){
    ct++;
    if(e.target.tagName==='TD'){
        e.target.style.backgroundColor='blue';
        e.target.style.color='white';
        e.target.style.pointerEvents='none';
        confirm.innerHTML+=`<input type="text" name="seat" value=${e.target.innerText}></input>`;
    }
}
table.addEventListener('click',bookSeat);
