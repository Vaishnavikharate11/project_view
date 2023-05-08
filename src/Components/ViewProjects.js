
// import { useState, useEffect } from 'react';
// import './ViewProjects.css';

// function ViewProjects() {
//   const [projects, setProjects] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('/rest/api/2/project')
//       .then(response => response.json())
//       .then(data => setProjects(data));
//   }, []);

//   const filteredProjects = projects.filter(project =>
//     project.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container">
//                          <h4><b>Projects</b></h4>

//       <div className="search-container">
//         <label htmlFor="search-input">Search:</label>
//         <input
//           type="text"
//           id="search-input"
//           value={searchTerm}
//           onChange={event => setSearchTerm(event.target.value)}
//         />
//         <button onClick={() => setSearchTerm('')}>Search</button>
//       </div>
    
//       <table>
//         <thead>
//           <tr>
//           <th>Name</th>
//             <th>Key</th>
//             <th>Type</th>
//             <th>Lead</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProjects.map(project => (
//             <tr key={project.key}>
//               <td>{project.key}</td>
//               <td>{project.name}</td>
//               <td>{project.projectTypeKey}</td>
//               <td>{project.lead.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ViewProjects;





// import { useState, useEffect } from 'react';
// import './ViewProjects.css';

// function ViewProjects() {
//   const [projects, setProjects] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('/rest/api/2/project')
//       .then(response => response.json())
//       .then(data => setProjects(data));
//   }, []);

//   const filteredProjects = projects.filter(project =>
//     project.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <h4><b>Projects</b></h4>

//       <div className="search-container">
//         <label htmlFor="search-input">Search:</label>
//         <input
//           type="text"
//           id="search-input"
//           value={searchTerm}
//           onChange={event => setSearchTerm(event.target.value)}
//         />
//         <button onClick={() => setSearchTerm('')}>Search</button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Key</th>
//             <th>Type</th>
//             <th>Lead</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProjects.map(project => (
//             <tr key={project.key}>
//               <td>{project.key}</td>
//               <td>{project.name}</td>
//               <td>{project.projectTypeKey}</td>
//               <td>{project.lead.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {filteredProjects.length === 0 && (
//         <div className="no-results">No projects found.</div>
//       )}
//     </div>
//   );
// }

// export default ViewProjects;



















import { useState } from 'react';
import './ViewProjects.css';

function ViewProjects() {
  const initialProjects = [
    { name: 'Project ABC', key: 'ABC', projectTypeKey: 'Task Management', lead: { name: 'John Doe' } },
    { name: 'Project DEF', key: 'DEF', projectTypeKey: 'Bug Tracking', lead: { name: 'Jane Smith' } },
    { name: 'Project GHI', key: 'GHI', projectTypeKey: 'Software Development', lead: { name: 'Bob Johnson' } },
  ];
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredProjects = projects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProjects);
  };

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
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchResults.length > 0 && (
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
            {searchResults.map(project => (
              <tr key={project.key}>
                <td>{project.name}</td>
                <td>{project.key}</td>
                <td>{project.projectTypeKey}</td>
                <td>{project.lead.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {searchResults.length === 0 && searchTerm && (
        <div className="no-results">No projects found.</div>
      )}

      {searchResults.length === 0 && !searchTerm && (
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
            {projects.map(project => (
              <tr key={project.key}>
                <td>{project.name}</td>
                <td>{project.key}</td>
                <td>{project.projectTypeKey}</td>
                <td>{project.lead.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewProjects;




































// import { useState, useEffect } from 'react';
// import './ViewProjects.css';
// import ProjectDetails from './ProjectDetails';

// function ViewProjects() {
//   const [projects, setProjects] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     fetch('/rest/api/2/project')
//       .then(response => response.json())
//       .then(data => setProjects(data));
//   }, []);

//   const handleProjectClick = project => {
//     setSelectedProject(project);
//   };

//   const filteredProjects = projects.filter(project =>
//     project.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <h4><b>Projects</b></h4>

//       <div className="search-container">
//         <label htmlFor="search-input">Search:</label>
//         <input
//           type="text"
//           id="search-input"
//           value={searchTerm}
//           onChange={event => setSearchTerm(event.target.value)}
//         />
//         <button onClick={() => setSearchTerm('')}>Search</button>
//       </div>

//       {selectedProject ? (
//         <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Key</th>
//               <th>Type</th>
//               <th>Lead</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredProjects.map(project => (
//               <tr key={project.key}>
//                 <td><a href="#" onClick={() => handleProjectClick(project)}>{project.name}</a></td>
//                 <td>{project.key}</td>
//                 <td>{project.projectTypeKey}</td>
//                 <td>{project.lead.name}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {filteredProjects.length === 0 && (
//         <div className="no-results">No projects found.</div>
//       )}
//     </div>
//   );
// }

// export default ViewProjects;
