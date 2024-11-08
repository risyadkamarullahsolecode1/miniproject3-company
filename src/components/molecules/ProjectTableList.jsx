import React from 'react';
import Button from '../atoms/Button';

const ProjectTableList = ({ project, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{project.projNo}</td>
            <td>{project.projName}</td>
            <td>{project.deptNo}</td>
            <td>
                <Button variant="warning" onClick={() => onEdit(project.projNo)}>
                    Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => onDelete(project.projNo)}>
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default ProjectTableList;
