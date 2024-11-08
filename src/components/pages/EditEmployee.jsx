import React, { useContext } from 'react';
import { EmployeeContext } from '../../context/EmployeeContext';
import EmployeeForm from '../organisms/EmployeeForm';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
    const { employees, editEmployee } = useContext(EmployeeContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const employee = employees.find((emp) => emp.empNo === parseInt(id));

    const handleSubmit = (updatedData) => {
        editEmployee({ ...employee, ...updatedData });
        navigate('/employees');
    };

    return (
        <div>
            <h2>Edit Employee</h2>
            {employee ? <EmployeeForm onSubmit={handleSubmit} initialData={employee} /> : <p>Employee not found</p>}
        </div>
    );
};

export default EditEmployee;
