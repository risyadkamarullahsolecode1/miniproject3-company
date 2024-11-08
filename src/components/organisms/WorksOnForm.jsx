import React, { useState, useContext } from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import { EmployeeContext } from '../../context/EmployeeContext';  // Context for employees
import { ProjectContext } from '../../context/ProjectContext';    // Context for projects

const WorksOnForm = ({ onSubmit, initialData = {} }) => {
    const { employees } = useContext(EmployeeContext);  // Get employees from EmployeeContext
    const { projects } = useContext(ProjectContext);    // Get projects from ProjectContext

    const [formData, setFormData] = useState({
        empNo: initialData.empNo || '',
        projNo: initialData.projNo || '',
        dateWorked: initialData.dateWorked || '',
        hoursWorked: initialData.hoursWorked || '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const errors = {};
        if (!formData.empNo) errors.empNo = 'Employee No is required';
        if (!formData.projNo) errors.projNo = 'Project No is required';
        if (!formData.dateWorked) errors.dateWorked = 'Date Worked is required';
        if (!formData.hoursWorked) {
            errors.hoursWorked = 'Hours Worked is required';
        } else if (formData.hoursWorked <= 0) {
            errors.hoursWorked = 'Hours Worked must be greater than zero';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            onSubmit(formData);
            setFormData({ empNo: '', projNo: '', dateWorked: '', hoursWorked: '' });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="empNo">Employee No</label>
                <select
                    id="empNo"
                    name="empNo"
                    value={formData.empNo}
                    onChange={handleChange}
                    className={`form-control ${errors.empNo ? 'is-invalid' : ''}`}
                >
                    <option value="">Select Employee</option>
                    {employees.map((employee) => (
                        <option key={employee.empNo} value={employee.empNo}>
                            {employee.Fname} {employee.Lname} ({employee.empNo})
                        </option>
                    ))}
                </select>
                {errors.empNo && <div className="invalid-feedback">{errors.empNo}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="projNo">Project No</label>
                <select
                    id="projNo"
                    name="projNo"
                    value={formData.projNo}
                    onChange={handleChange}
                    className={`form-control ${errors.projNo ? 'is-invalid' : ''}`}
                >
                    <option value="">Select Project</option>
                    {projects.map((project) => (
                        <option key={project.projNo} value={project.projNo}>
                            {project.projNo} - {project.projName}
                        </option>
                    ))}
                </select>
                {errors.projNo && <div className="invalid-feedback">{errors.projNo}</div>}
            </div>

            <FormField
                label="Date Worked"
                id="dateWorked"
                name="dateWorked"
                type="date"
                value={formData.dateWorked}
                onChange={handleChange}
                error={errors.dateWorked}
            />
            <FormField
                label="Hours Worked"
                id="hoursWorked"
                name="hoursWorked"
                type="number"
                value={formData.hoursWorked}
                onChange={handleChange}
                error={errors.hoursWorked}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default WorksOnForm;
