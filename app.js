
const steps = [
  {
    question: "What excites you most?",
    options: ["Building tech or software", "Creative expression or design", "Helping people solve problems", "Leading teams or strategy"]
  },
  {
    question: "What do you value most in work?",
    options: ["Flexibility", "Growth potential", "Impact", "Stability"]
  },
  {
    question: "Pick a preferred learning style",
    options: ["Hands-on", "Structured courses", "Collaboration", "Exploration"]
  }
];

let currentStep = 0;
let answers = [];

function showStep(step) {
  document.getElementById("title").innerText = `Hi, I'm Navika!`;
  document.getElementById("subtitle").innerText = steps[step].question;
  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";

  steps[step].options.forEach(option => {
    const btn = document.createElement("div");
    btn.className = "card";
    btn.innerText = option;
    btn.onclick = () => handleAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function handleAnswer(answer) {
  answers.push(answer);
  currentStep++;
  if (currentStep < steps.length) {
    showStep(currentStep);
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("subtitle").innerText = "";
  document.getElementById("options").innerHTML = "";
  document.getElementById("title").innerText = "You're on your way!";
  document.getElementById("result").innerText = "Based on your answers: " + answers.join(" → ");
}

window.onload = () => {
  showStep(currentStep);
}
