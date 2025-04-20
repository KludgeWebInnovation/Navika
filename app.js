
let mood = "";

function logMood(selectedMood) {
  mood = selectedMood;
  document.getElementById("log").innerText = `Mood: ${mood}`;
}

function saveCheckIn() {
  const reflection = document.getElementById("reflection").value;
  const date = new Date().toLocaleDateString();
  const entry = { date, mood, reflection };

  let logs = JSON.parse(localStorage.getItem("navikaLogs") || "[]");
  logs.push(entry);
  localStorage.setItem("navikaLogs", JSON.stringify(logs));

  document.getElementById("log").innerText = "Check-in saved!";
  document.getElementById("reflection").value = "";
}
