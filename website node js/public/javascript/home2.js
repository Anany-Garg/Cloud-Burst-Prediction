const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//onmouse over event setter
document.querySelector(".text-2").onmouseover = (event) => {
  let iteration = 0;
  const interval = setInterval(() => {
    event.target.innerHTML = event.target.innerHTML
      .split("")
      .map((letters, index) => {
        if (index < Math.floor(Math.random() * iteration)) {
            // Math.floor(Math.random() * iteration)
          //Randomizes when each character get set
          return event.target.dataset.value[index];
        } //If index is not matching will present randomizing char from letter array
        return letter[Math.floor(Math.random() * 26)];
      })
      .join("");
    //Clears interval once the text matches the Data set
    if (event.target.innerHTML == event.target.dataset.value) {
      clearInterval(interval);
    }

    iteration += 1;
  }, 15);
};


