import React from 'react';
import Button from '../atoms/Button';

const EmployeeTableList = ({ employee, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{employee.empNo}</td>
            <td>{employee.Fname}</td>
            <td>{employee.Lname}</td>
            <td>{employee.position}</td>
            <td>{employee.deptNo}</td>
            <td>{employee.sex}</td>
            <td>{employee.address}</td>
            <td>
                <Button variant="warning" onClick={() => onEdit(employee.empNo)}>
                    Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => onDelete(employee.empNo)}>
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default EmployeeTableList;
