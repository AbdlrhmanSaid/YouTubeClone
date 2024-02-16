let bars = document.querySelector(".bars");
let side = document.querySelector("aside");

bars.addEventListener("click", () => {
  side.classList.toggle("closed");
});

let closer = document.querySelector(".shorts .title .close");
closer.addEventListener("click", function () {
  let shorts = document.querySelectorAll(".shorts .short");
  shorts.forEach(function (short) {
    short.style.display = "none";
  });
  let undo = document.querySelector(".hidden-shorts");
  undo.style.display = "block";
  let re = document.querySelector(".hidden-shorts .re");
  re.addEventListener("click", function () {
    shorts.forEach(function (short) {
      short.style.display = "block";
    });
    undo.style.display = "none";
  });
});
