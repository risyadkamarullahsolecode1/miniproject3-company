import React, { useContext } from 'react';
import { ProjectContext } from '../../context/ProjectContext';
import ProjectTable from '../organisms/ProjectTable';
import Button from '../atoms/Button';
import { Alert } from 'react-bootstrap';

const ProjectsList = () => {
    const { projects, deleteProject } = useContext(ProjectContext);
    const [showAlert, setShowAlert] = React.useState(false);

    const handleEdit = (projNo) => {
        window.location.href = `/projects/${projNo}`;
    };

    const handleDelete = (projNo) => {
        const confirmed = window.confirm("Are you sure you want to delete this project?");
        if (confirmed) {
            deleteProject(projNo)
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 4000); // Hide alert after 4 seconds
        }
    };


    return (
        <div>
            <h2>Projects</h2>
            <Button variant="primary" href="/projects/new">Add New Project</Button>
            {showAlert && <Alert variant="danger">Project deleted successfully!</Alert>}
            <ProjectTable projects={projects} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default ProjectsList;