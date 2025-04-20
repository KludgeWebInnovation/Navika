
function startJourney() {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('journey').style.display = 'block';
}
function selectPath(choice) {
  let pathText = '';
  switch (choice) {
    case 'Tech':
      pathText = 'Explore coding, automation, and product development.';
      break;
    case 'Creative':
      pathText = 'Learn storytelling, UX/UI, and branding.';
      break;
    case 'Helping':
      pathText = 'Grow in coaching, facilitation, or team support roles.';
      break;
    case 'Leadership':
      pathText = 'Develop strategy, management, and visionary skills.';
      break;
  }
  document.getElementById('journey').style.display = 'none';
  document.getElementById('pathOutput').innerText = pathText;
  document.getElementById('result').style.display = 'block';
}
function restart() {
  document.getElementById('result').style.display = 'none';
  document.getElementById('splash').style.display = 'block';
}
