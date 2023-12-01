let nowShowing = document.getElementById("fieldset1");
let upcoming = document.getElementById("fieldset2");
let video = document.getElementById("VIDEO");
let videoBox = document.getElementById("video");
let BOX = document.getElementById("videoBox");
var globalIndex = 0;

function updateShowing(p) {
  let a = "",
    arr = getMovies();
  arr.forEach((ele) => {
    if (ele.type === p) {
      a += `<div class="outercontainer">
    <h3>Movie Name:${ele.name}</h3>

    <div class="nowShowingContainer">
      <img src="../images/${ele.thumbnail}" onClick="playVideo(${ele.id})" alt="img" />
      <div class="nowShowinginner">
        <!-- <title>Casablanca</title> -->

        <p>Cast:${ele.cast}</p>
        <p>Director:${ele.director}</p>
        <p>Duration: ${ele.duration}</p>
      </div>
    </div>
  </div>
  <br>`;
    }
  });
  return a;
}

function playVideo(id) {
  globalIndex = id - 1;
  video.src = `https://courses.cs.cityu.edu.hk/cs2204/video/${
    getMovies()[globalIndex].src
  }`;
  BOX.innerHTML = `
<div>Movie Name: ${getMovies()[globalIndex].name}</div>
<div>Cast: ${getMovies()[globalIndex].cast}</div>
<div>Director:${getMovies()[globalIndex].director}</div>
<div>Duration: ${getMovies()[globalIndex].duration}</div>`;
}
function nextVideo() {
  if (video.currentTime === video.duration) {
    setTimeout(() => {
      globalIndex++;
      video.src = `https://courses.cs.cityu.edu.hk/cs2204/video/${
        getMovies()[globalIndex].src
      }`;
      if (globalIndex === getMovies().length - 1) {
        globalIndex = -1;
      }
      BOX.innerHTML = `
      <div>Movie Name: ${getMovies()[globalIndex].name}</div>
      <div>Cast: ${getMovies()[globalIndex].cast}</div>
      <div>Director:${getMovies()[globalIndex].director}</div>
      <div>Duration: ${getMovies()[globalIndex].duration}</div>`;
    }, 2000);
   
  }
}
nowShowing.innerHTML += updateShowing("now");
upcoming.innerHTML += updateShowing("upcoming");
video.addEventListener("timeupdate", nextVideo);
