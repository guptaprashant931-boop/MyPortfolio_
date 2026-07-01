const container =
document.getElementById(
"skill-grid"
);

const BACKEND_URL = "https://myportfolio-60rx.onrender.com";

let skills = [];

async function fetchSkills(){

try{

  const response = await fetch(`${BACKEND_URL}/api/skills/`);

  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  skills = data.results || data;

  renderSkills(skills);

}
  catch(error){
  console.error("Failed to load skills:", error);
    container.innerHTML = `<p style="color: #ef4444; text-align: center;">Failed to load skills. Please try again later.</p>`;
console.log(error);

}}

function renderSkills(data){

container.innerHTML = "";

data.forEach(skill=>{

container.innerHTML += `

<div class="skill-card">

<h2>${skills.name}</h2>

<p>${skills.percentage}</p>

</div>

`;

});

}

fetchSkills();
