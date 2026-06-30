const container =
document.getElementById(
"projects-container"
);

async function loadProjects() {
  try {
    // Replace this string with your actual live Render URL
    const BACKEND_URL = "https://your-backend-service-name.onrender.com"; 

    // Fetching from the live Render API instead of 127.0.0.1
    const response = await fetch(`${BACKEND_URL}/api/projects/`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const projects = data.results || data;

    // Clear container before injecting (good practice to avoid duplicates)
    container.innerHTML = "";

    projects.forEach(project => {
      container.innerHTML += `
        <div class="card">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <a href="${project.github_url}" target="_blank">GitHub</a>
        </div>
      `;
    });
  } catch (error) {
    console.error("Failed to load projects:", error);
    container.innerHTML = `<p style="color: #ef4444;">Failed to load projects. Please try again later.</p>`;
  }
}

loadProjects();

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
