import React, { useState, useContext } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import { EmployeeContext } from '../../context/EmployeeContext';

const DepartmentForm = ({ onSubmit, initialData = {} }) => {
    const { employees } = useContext(EmployeeContext);
    const [formData, setFormData] = useState({
        deptName: initialData.deptName || '',
        mgrEmpNo: initialData.mgrEmpNo || '',
        spvEmpNo: initialData.spvEmpNo || '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const errors = {};
        if (!formData.deptName) errors.deptName = 'Department name is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            onSubmit(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="deptName">
                    <Form.Label>Department Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="deptName"
                        value={formData.deptName}
                        onChange={handleChange}
                        isInvalid={!!errors.deptName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.deptName}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="mgrEmpNo">
                    <Form.Label>Manager Employee No</Form.Label>
                    <Form.Select
                        name="mgrEmpNo"
                        value={formData.mgrEmpNo}
                        onChange={handleChange}
                        isInvalid={!!errors.mgrEmpNo}
                    >
                        <option value="">Select a Manager</option>
                        {employees.map((emp) => (
                            <option key={emp.empNo} value={emp.empNo}>
                                {emp.Fname} {emp.Lname}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.mgrEmpNo}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="spvEmpNo">
                    <Form.Label>Supervisor Employee No</Form.Label>
                    <Form.Select
                        name="spvEmpNo"
                        value={formData.spvEmpNo}
                        onChange={handleChange}
                        isInvalid={!!errors.spvEmpNo}
                    >
                        <option value="">Select a Supervisor</option>
                        {employees.map((emp) => (
                            <option key={emp.empNo} value={emp.empNo}>
                                {emp.Fname} {emp.Lname}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.spvEmpNo}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" variant="primary">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default DepartmentForm;
