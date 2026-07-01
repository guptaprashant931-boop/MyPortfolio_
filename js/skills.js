const container =
document.getElementById(
"skill-grid"
);

const BACKEND_URL = "https://myportfolio-60rx.onrender.com";

let skills = [];

async function fetchSkills(){

try{

const response =
await fetch(
`${BACKEND_URL}/api/skills/`
);

const data =
await response.json();

skills = data.results || data;

renderSkills(skills);

}
catch(error){

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
