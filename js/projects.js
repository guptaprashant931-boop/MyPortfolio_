const container =
document.getElementById(
"projects-container"
);

const searchInput =
document.getElementById(
"search"
);

let projects = [];

async function fetchProjects(){

try{

const response =
await fetch(
"http://127.0.0.1:8000/api/projects/"
);

const data =
await response.json();

projects =
data.results || data;

renderProjects(projects);

}
catch(error){

console.log(error);

}

}

function renderProjects(data){

container.innerHTML = "";

data.forEach(project=>{

container.innerHTML += `

<div class="project-card">

<h2>${project.title}</h2>

<p>${project.description}</p>

<p>
<strong>
${project.technologies}
</strong>
</p>

<a
href="${project.github_url}"
target="_blank"
>
GitHub
</a>

</div>

`;

});

}

searchInput.addEventListener(
"keyup",
(e)=>{

const filtered =
projects.filter(project=>{

return (
project.title
.toLowerCase()
.includes(
e.target.value.toLowerCase()
)
);

});

renderProjects(filtered);

}
);

fetchProjects();