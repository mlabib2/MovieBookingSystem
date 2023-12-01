let cinema = document.getElementById("cinema");
let cinemaBox=document.getElementById("cinemaMovie");
function selectCinema() {
  let a = "";
  getCinemas().forEach((ele) => {
    a += `
         <option value="${ele.branchName}">${ele.branchName}</option>`;
  });
  a=`<select title="cinema Select">
  ${a}</select.`;
  cinema.innerHTML=a;
}
function displayMovies(index){
    let a="";
getCinemas()[index].movies.forEach((ele)=>{
    getMovies().forEach((element)=>{
        if(element.id===ele.id)
        {let b="";
            a+=`
        <div class="Movie">
          <img
            src="../images/${element.thumbnail}"
            alt=""
            height="150"
            width="100"
          />
          <div class="inner">
          <form method="get" action="page3.html">
          <label>Movie name:</label>
            <input type="text" name="Moviename" value="${element.name}"></input>
           <label for="item">Select Show</label>
            <select title="Location" name="item" id="item">
            ${ele.shows.forEach((item)=>{
                b+=`<option  value="${item.index}">${item.datetime} House ${item.house}</option>`;
            })
            }
            ${b}
            </select>
            <input class="submit" type="submit" value="Buy Ticket"></input>
            </form>
          </div>
        </div>`;
        }
    })
    cinemaBox.innerHTML="";
cinemaBox.innerHTML+=a;
})
}
function updateMovies(e){
    let i;
    getCinemas().forEach((ele,index)=>{
        if(ele.branchName===e.target.value){
            i=index;
        }
    })
    displayMovies(i);
}

cinema.addEventListener('change',updateMovies);
selectCinema();
displayMovies(0);
