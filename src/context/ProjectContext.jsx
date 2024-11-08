import React, { createContext, useState, useEffect } from 'react';
import { getFromStorage, saveToStorage } from '../utils/storage';

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const storedProjects = getFromStorage('projects');
        if (storedProjects) {
            setProjects(storedProjects);
        }
    }, []);

    const addProject = (newProject) => {
        const updatedProjects = [...projects, { ...newProject, projNo: projects.length + 1 }];
        setProjects(updatedProjects);
        saveToStorage('projects', updatedProjects);
    };

    const editProject = (updatedProject) => {
        const updatedProjects = projects.map((project) =>
            project.projNo === updatedProject.projNo ? updatedProject : project
        );
        setProjects(updatedProjects);
        saveToStorage('projects', updatedProjects);
    };

    const deleteProject = (projNo) => {
        const updatedProjects = projects.filter((proj) => proj.projNo !== projNo);
        setProjects(updatedProjects);
        saveToStorage('projects', updatedProjects);
    };


    return (
        <ProjectContext.Provider value={{ projects, addProject, editProject, deleteProject }}>
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectProvider;
