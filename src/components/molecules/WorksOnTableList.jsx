import React from 'react';
import Button from '../atoms/Button';

const WorksOnTableList = ({ worksOn, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{worksOn.empNo}</td>
            <td>{worksOn.projNo}</td>
            <td>{worksOn.dateWorked}</td>
            <td>{worksOn.hoursWorked}</td>
            <td>
                <Button variant="warning" onClick={() => onEdit(worksOn)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => onDelete(worksOn)}>Delete</Button>
            </td>
        </tr>
    );
};

export default WorksOnTableList;
