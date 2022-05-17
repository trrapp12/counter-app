(() => {
  window.addEventListener('load', () => {
    let total = 0;
    const displaySection = document.getElementById('current-display');
    const savedDisplaySecion = document.getElementById('saved-display');

    function updateCurrentDisplay (input) {
      displaySection.innerText = input
    }

    function updateSavedDisplay (input) {
      savedDisplaySecion.innerText += ` / ${input} `
    }

    function setToZero () {
      total = 0;
    }

    document.getElementById('add').addEventListener('click', () => {
      total += 1;
      updateCurrentDisplay(total);
    })
    document.getElementById('minus').addEventListener('click', () => {
      total -= 1;
      updateCurrentDisplay(total);
    })
    document.getElementById('save').addEventListener('click', () => {
      updateSavedDisplay (total);
      setToZero();
      updateCurrentDisplay(total)
    })

  })
})();