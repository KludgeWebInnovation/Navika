
const questions = [
  {
    q: "What excites you most?",
    a: ["Building tech or software", "Creative expression", "Helping others", "Leading teams"]
  },
  {
    q: "Your ideal work vibe?",
    a: ["Remote & flexible", "Fast-paced startup", "Team-oriented", "Structured & stable"]
  },
  {
    q: "What are you naturally good at?",
    a: ["Problem-solving", "Visual storytelling", "Empathy", "Strategy"]
  }
];

const paths = {
  "Building tech or software": "Tech Explorer Path: Learn to code, explore cloud, dive into automation.",
  "Creative expression": "Creative Trailblazer Path: UX/UI, content design, branding, storytelling.",
  "Helping others": "Human Impact Path: Coaching, facilitation, people-focused product roles.",
  "Leading teams": "Strategic Leadership Path: Management, systems thinking, and vision shaping."
};

let step = 0;
let answers = [];

function nextStep(choice = null) {
  const title = document.getElementById("title");
  const text = document.getElementById("text");
  const choicesDiv = document.getElementById("choices");
  const result = document.getElementById("result");
  const btn = document.getElementById("startBtn");

  if (choice) answers.push(choice);

  if (step < questions.length) {
    title.innerText = "Hi, I'm Navika!";
    text.innerText = questions[step].q;
    choicesDiv.innerHTML = "";
    questions[step].a.forEach(ans => {
      const opt = document.createElement("button");
      opt.className = "choice";
      opt.innerText = ans;
      opt.onclick = () => nextStep(ans);
      choicesDiv.appendChild(opt);
    });
    btn.style.display = "none";
  } else {
    title.innerText = "You're ready to grow!";
    text.innerText = "";
    choicesDiv.innerHTML = "";
    const picked = paths[answers[0]] || "Custom Growth Path: You're unique—let's build something together!";
    result.innerText = picked;
    btn.innerText = "Start Again";
    btn.style.display = "block";
    btn.onclick = () => location.reload();
  }
  step++;
}
