import React, { useContext } from 'react';
import { ProjectContext } from '../../context/ProjectContext';
import ProjectForm from '../organisms/ProjectForm';
import { useParams, useNavigate } from 'react-router-dom';

const EditProject = () => {
    const { projects, editProject } = useContext(ProjectContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find((proj) => proj.projNo === parseInt(id));

    const handleSubmit = (updatedData) => {
        editProject({ ...project, ...updatedData });
        navigate('/projects');
    };

    return (
        <div>
            <h2>Edit Project</h2>
            {project ? <ProjectForm onSubmit={handleSubmit} initialData={project} /> : <p>Project not found</p>}
        </div>
    );
};

export default EditProject;
