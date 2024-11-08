import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { DepartmentContext } from '../../context/DepartmentContext';

const ProjectForm = ({ onSubmit, initialData = {} }) => {
    const { departments } = useContext(DepartmentContext);
    const [formData, setFormData] = useState({
        projName: initialData.projName || '',  
        deptNo: initialData.deptNo || '',      
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const errors = {};
        if (!formData.projName) errors.projName = 'Project name is required';
        if (!formData.deptNo) errors.deptNo = 'Department number is required';
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
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="projName">
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                    type="text"
                    name="projName"
                    value={formData.projName}
                    onChange={handleChange}
                    isInvalid={!!errors.projName}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.projName}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="deptNo">
                <Form.Label>Department Number</Form.Label>
                <Form.Control
                    as="select"
                    name="deptNo"
                    value={formData.deptNo}
                    onChange={handleChange}
                    isInvalid={!!errors.deptNo}
                >
                    <option value="">Select Department</option>
                    {departments.map((department) => (
                        <option key={department.deptNo} value={department.deptNo}>
                            {department.deptName}
                        </option>
                    ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {errors.deptNo}
                </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default ProjectForm;
