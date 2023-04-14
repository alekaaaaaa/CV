var position = 0;
function changeNavbar() {
  if (window.innerWidth > 1024) {
    let start = Date.now();
    let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      if (position === 0) {
        clearInterval(timer);
        console.log(position);
        return;
      }
      if (timePassed >= 200) {
        clearInterval(timer);
        position = 0;
        return;
      }

      document.getElementById("app").style.bottom = 60 - timePassed / 4 + "px";
    }, 20);
  }
}

function rechangeNavbar() {
  if (window.innerWidth > 1024) {
    if (position === 1) {
      console.log(position);
      return;
    }
    let start = Date.now();

    let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      if (timePassed >= 200) {
        clearInterval(timer);
        position = 1;
        return;
      }

      document.getElementById("app").style.bottom = timePassed / 4 + "px";
    }, 20);
  }
}
