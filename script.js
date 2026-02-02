const btn = document.getElementById("noBtn");
const box = document.querySelector(".box1");

document.addEventListener("mousemove", (e) => {
  const boxRect = box.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();

  
  const btnX = btnRect.left + btnRect.width / 2;
  const btnY = btnRect.top + btnRect.height / 2;

  
  const distX = e.clientX - btnX;
  const distY = e.clientY - btnY;

  const distance = Math.sqrt(distX*distX + distY*distY);

  
  if (distance < 100) {
    btn.style.position = "absolute";
    
   
    const maxX = boxRect.width - btnRect.width;
    const maxY = boxRect.height - btnRect.height;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
  }
});

function YES() {
  const box1 = document.getElementById("box1");
  box1.innerHTML = "<p style='text-align: center; font-size: 25px; margin-top: 100px; color: red; font-family: 'Times New Roman', serif;'>YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY!<br> LOVE YOUUU!</p>";
  

  box1.innerHTML += '<img src="cat.gif" style="display: block; margin: auto; margin-top: 50px; width: 400px;">';
}

