import React, { useState, useContext } from 'react';
import FormField from '../molecules/FormField';
import CustomButton from '../atoms/Button';
import { Alert, Container, Dropdown, Form, FormLabel } from 'react-bootstrap';
import { DepartmentContext } from '../../context/DepartmentContext';

const EmployeeForm = ({ onSubmit, initialData = {} }) => {
    const { departments } = useContext(DepartmentContext);
    const [formData, setFormData] = useState({
        Fname: initialData.Fname || '',
        Lname: initialData.Lname || '',
        address: initialData.address || '',
        Dob: initialData.Dob || '',
        sex: initialData.sex || '',
        position: initialData.position || '',
        deptNo: initialData.deptNo || '',
    });
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const errors = {};
        if (!formData.Fname) errors.Fname = 'First name is required';
        if (!formData.Lname) errors.Lname = 'Last name is required';
        if (!formData.address.trim()) errors.address = 'Address is required';
        if (!formData.Dob) errors.Dob = 'Date of Birth is required';
        if (!formData.sex) errors.sex = 'Sex is required';
        if (!formData.position.trim()) errors.position = 'Position is required';
        if (!formData.deptNo.trim()) errors.deptNo = 'Department Number is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            onSubmit(formData);
            console.log("set alert true"); // Debugging line
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
             {showAlert && <Alert variant="success">Employee saved successfully!</Alert>}
            <form onSubmit={handleSubmit}>
                <FormField label="First Name" id="Fname" value={formData.Fname} name="Fname" onChange={handleChange} error={errors.Fname} />
                <FormField label="Last Name" id="Lname" value={formData.Lname} name="Lname" onChange={handleChange} error={errors.Lname} />
                <FormField label="Address" id="address" value={formData.address} name="address" onChange={handleChange} error={errors.address} />
                <FormField label="Date of Birth" id="Dob" type="date" value={formData.Dob} name="Dob" onChange={handleChange} error={errors.Dob} />
                <div>
                    <Form.Label>Sex</Form.Label>
                    <div>
                        <Form.Check inline
                            type="radio"
                            id="male"
                            name="sex"
                            value="Male"
                            checked={formData.sex === 'Male'}
                            onChange={handleChange}
                        />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div>
                        <Form.Check inline
                            type="radio"
                            id="female"
                            name="sex"
                            value="Female"
                            checked={formData.sex === 'Female'}
                            onChange={handleChange}
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                    {errors.sex && <div className="text-danger">{errors.sex}</div>}
                </div>
                <FormField label="Position" id="position" value={formData.position} name="position" onChange={handleChange} error={errors.position} />
                <Form.Group controlId="deptNo">
                    <Form.Label>Department</Form.Label>
                    <Form.Select
                        name="deptNo"
                        value={formData.deptNo}
                        onChange={handleChange}
                        isInvalid={!!errors.deptNo}
                    >
                        <option value="">Select a Department</option>
                        {departments.map((dept) => (
                            <option key={dept.deptNo} value={dept.deptNo}>
                                {dept.deptName}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.deptNo}
                    </Form.Control.Feedback>
                </Form.Group>
            <CustomButton type="submit">Submit</CustomButton>
            </form>
        </div>
    );
};

export default EmployeeForm;