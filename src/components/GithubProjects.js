import React, {useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/Portfolio.css';


export default function GithubProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('https://api.github.com/users/callefransson/repos');

        const data = await response.json();
        setProjects(data);
    } catch (error) {
     console.error('Error fetching projects:', error);
   }
}
    fetchProjects();
  }, []);

  return (
    <div className='container-fluid'>
    <h1 className='text-center pt-5 display-2 text-light'>Mina Github projekt</h1>
    <div className='d-flex flex-row flex-wrap justify-content-center p-5'>
    {projects.map(project => (
      <div className='d-flex justify-content-around p-2' key={project.id}>
        <Card id="card-container">
        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/codingBootstrapImage.jpg'} />
          <Card.Body className='text-center bg-dark text-white'>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text> 
              {project.description}
            </Card.Text>
            <Button variant="light border border-1 border-dark"><a href={project.html_url} target="_blank" className="text-dark text-decoration-none">Go to github</a></Button>
          </Card.Body>
        </Card>
      </div>
    ))}
    </div>
  </div>
  );
}