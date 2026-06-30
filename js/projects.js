const container = document.getElementById("projects-container");
const searchInput = document.getElementById("search");

// Replace this string with your actual live Render URL
const BACKEND_URL = "https://myportfolio-60rx.onrender.com"; 

// Global array to store fetched projects for filtering
let projects = [];

// 1. Fetch data from your live Render backend
async function fetchProjects() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/projects/`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Fallback in case your Django API uses pagination (data.results) or returns a raw list
    projects = data.results || data;

    // Render the initial list of projects
    renderProjects(projects);
  } catch (error) {
    console.error("Failed to load projects:", error);
    container.innerHTML = `<p style="color: #ef4444; text-align: center;">Failed to load projects. Please try again later.</p>`;
  }
}

// 2. Clear container and render project cards dynamically
function renderProjects(data) {
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = `<p style="color: #94a3b8; text-align: center;">No projects found matching your search.</p>`;
    return;
  }

  data.forEach(project => {
    container.innerHTML += `
      <div class="project-card">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p><strong>${project.technologies || ''}</strong></p>
        <a href="${project.github_url}" target="_blank">GitHub</a>
      </div>
    `;
  });
}

// 3. Search Filter Event Listener
searchInput.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  
  const filtered = projects.filter(project => {
    return project.title.toLowerCase().includes(searchTerm);
  });

  renderProjects(filtered);
});

// 4. Fire the initial fetch request when the page loads
fetchProjects();
