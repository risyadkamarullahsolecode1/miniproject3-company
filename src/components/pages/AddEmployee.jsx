import React, { useContext } from 'react';
import { EmployeeContext } from '../../context/EmployeeContext';
import EmployeeForm from '../organisms/EmployeeForm';
import { useNavigate } from 'react-router-dom';

const AddEmpployee = () => {
    const { addEmployee } = useContext(EmployeeContext);
    const navigate = useNavigate();

    const handleSubmit = (employeeData) => {
        addEmployee(employeeData);
        navigate('/employees');
    };

    return (
        <div>
            <h2>Create New Employee</h2>
            <EmployeeForm onSubmit={handleSubmit} />
        </div>
    );
};

export default AddEmpployee;
