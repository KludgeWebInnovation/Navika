
const questions = [
  {
    q: "What excites you most?",
    a: ["Building tech or software", "Creative expression or design", "Helping people solve problems", "Leading teams or strategy"]
  },
  {
    q: "Which describes your mindset best?",
    a: ["Exploring new things", "Focusing and improving", "Teaching and guiding", "Inventing or experimenting"]
  },
  {
    q: "How do you like to work?",
    a: ["Flexible & remote", "Structured & stable", "Collaborative & social", "Independent & deep work"]
  }
];

let step = 0;
let answers = [];

function nextStep(choice = null) {
  const headline = document.getElementById("headline");
  const text = document.getElementById("text");
  const btn = document.getElementById("nextBtn");
  const area = document.getElementById("reflection");
  const result = document.getElementById("result");
  const choiceBox = document.getElementById("choices");

  if (choice !== null) {
    answers.push(choice);
  }

  if (step < questions.length) {
    headline.innerText = "Hi, I'm Navika!";
    text.innerText = questions[step].q;
    choiceBox.innerHTML = "";
    questions[step].a.forEach(ans => {
      const btn = document.createElement("button");
      btn.innerText = ans;
      btn.className = "choice-btn";
      btn.onclick = () => nextStep(ans);
      choiceBox.appendChild(btn);
    });
    btn.style.display = "none";
    area.style.display = "none";
  } else {
    headline.innerText = "You're on your way!";
    choiceBox.innerHTML = "";
    text.innerText = "Based on your answers, we recommend:";

    let path = "a Tech Learning Path";
    if (answers.includes("Creative expression or design")) path = "a Creative Learning Path";
    else if (answers.includes("Helping people solve problems")) path = "a Human-Centered Learning Path";
    else if (answers.includes("Leading teams or strategy")) path = "a Strategic Leadership Path";

    result.innerText = path;
    btn.style.display = "block";
    btn.innerText = "Start Again";
    btn.onclick = () => location.reload();
  }
  step++;
}
