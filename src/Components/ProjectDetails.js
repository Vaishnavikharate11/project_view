import { useState, useEffect } from 'react';
import './ViewProjects.css';
import ProjectDetails from './ProjectDetails';

function ViewProjects() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('/rest/api/2/project')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h4><b>Projects</b></h4>

      <div className="search-container">
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        <button onClick={() => setSearchTerm('')}>Search</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Key</th>
            <th>Type</th>
            <th>Lead</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map(project => (
            <tr key={project.key} onClick={() => setSelectedProject(project.key)}>
              <td>{project.name}</td>
              <td>{project.key}</td>
              <td>{project.projectTypeKey}</td>
              <td>{project.lead.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProject && <ProjectDetails projectKey={selectedProject} />}
      
      {filteredProjects.length === 0 && (
        <div className="no-results">No projects found.</div>
      )}
    </div>
  );
}

export default ViewProjects;
