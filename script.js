function trackMood(mood) {
  const log = document.getElementById("log");
  const entry = `${new Date().toLocaleString()}: ${mood}`;
  const li = document.createElement("li");
  li.textContent = entry;
  log.appendChild(li);

  // Save to local storage
  let moods = JSON.parse(localStorage.getItem("moods")) || [];
  moods.push(entry);
  localStorage.setItem("moods", JSON.stringify(moods));
}

window.onload = () => {
  const log = document.getElementById("log");
  let moods = JSON.parse(localStorage.getItem("moods")) || [];
  moods.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = entry;
    log.appendChild(li);
  });
};
