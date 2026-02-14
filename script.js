const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const title = document.getElementById("title");
const gif = document.getElementById("gif");

let step = 0;

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random()*80 + "%";
  noBtn.style.top = Math.random()*80 + "%";
});

yesBtn.addEventListener("click", () => {
  step++;

  if(step === 1){
    title.innerHTML = "Think again 😭";
    gif.src="https://media.tenor.com/Wx9IEmZZXSoAAAAC/sad-bear.gif";
  }
  else if(step === 2){
    title.innerHTML = "Are you sure 😡?";
    gif.src="https://media.tenor.com/9qF4Z7WfZ8AAAAAC/angry-bear.gif";
  }
  else{
    document.body.innerHTML = `
      <div class="card">
        <img src="https://media.tenor.com/FyX0KZC8C1gAAAAC/bear-hug.gif">
        <h1>Happy Valentine Day Baby! 💍</h1>
        <p>Every second with you is a celebration ❤️</p>
      </div>
    `;
  }
});
