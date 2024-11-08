import React, { useContext } from 'react';
import { EmployeeContext } from '../../context/EmployeeContext';
import EmployeeTable from '../organisms/EmployeeTable';
import Button from '../atoms/Button';
import { Alert } from 'react-bootstrap';

const EmployeesList = () => {
    const { employees, deleteEmployee } = useContext(EmployeeContext);
    const [showAlert, setShowAlert] = React.useState(false);

    const handleEdit = (empNo) => {
        window.location.href = `/employees/${empNo}`;
    };

    const handleDelete = (empNo) => {
        const confirmed = window.confirm("Are you sure you want to delete this employee?");
        if (confirmed) {
            deleteEmployee(empNo);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 4000); // Hide alert after 4 seconds
        }
    };

    return (
        <div>
            <h2>Employees</h2>
            <Button variant="primary" 
            href="/employees/new">Add New Employee</Button>
            {showAlert && <Alert variant="danger">Employee deleted successfully!</Alert>}
            <EmployeeTable employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default EmployeesList;