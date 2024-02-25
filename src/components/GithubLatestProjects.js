import React, {useState, useEffect } from 'react';
import '../css/Portfolio.css';
import {Card } from 'react-bootstrap';
import GithubImage from '../assets/labb4bildglitch.jpg';
import { Link } from 'react-router-dom';

const GithubLatestProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        async function fetchProjects(){
            try {
                const response = await fetch('https://api.github.com/users/callefransson/repos');
                const data = await response.json();
                data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                const latestProjects = data.slice(0, 3);
                setProjects(latestProjects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }
        fetchProjects();
    },[]);

  return (
    <div className='container-fluid'>
    <div className='d-flex flex-row flex-wrap justify-content-center p-5'>
    {projects.map(project => (
      <div className='d-flex justify-content-around p-2' key={project.id}>
        <Card id="card-container">
        <Card.Img variant="top" src={GithubImage}/>
          <Card.Body className='text-center bg-dark text-white'>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text> 
              {project.description}
            </Card.Text>
            <Link to={project.html_url}  target="_blank">
            <button className='btn-light text-light'>Gå till github</button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    ))}
    </div>
  </div>
  )
}

export default GithubLatestProjects
