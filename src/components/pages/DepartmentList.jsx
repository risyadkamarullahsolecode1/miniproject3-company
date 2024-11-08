import React, { useContext } from 'react';
import { DepartmentContext } from '../../context/DepartmentContext';
import DepartmentTable from '../organisms/DepartmentTable';
import CustomButton from '../atoms/Button';
import { Alert } from 'react-bootstrap';

const DepartmentList = () => {
    const { departments, deleteDepartment } = useContext(DepartmentContext);
    const [showAlert, setShowAlert] = React.useState(false);

    const handleEdit = (deptNo) => {
        window.location.href = `/departments/${deptNo}`;
    };

    const handleDelete = (deptNo) => {
        const confirmed = window.confirm("Are you sure you want to delete this department?");
        if (confirmed) {
            deleteDepartment(deptNo)
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 4000); // Hide alert after 4 seconds
        }
    };

    return (
        <div>
            <h2>Departments</h2>
            <CustomButton variant="primary" href="/departments/new">Add New Department</CustomButton>
            {showAlert && <Alert variant="danger">Department deleted successfully!</Alert>}
            <DepartmentTable departments={departments} onEdit={handleEdit} onDelete={handleDelete}/>
        </div>
    );
};

export default DepartmentList;