import React, { createContext, useState, useEffect } from 'react';
import { getFromStorage, saveToStorage } from '../utils/storage';

export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const savedEmployees = getFromStorage('employees') || [];
        setEmployees(savedEmployees);
    }, []);

    const addEmployee = (employee) => {
        const newEmployee = { ...employee, empNo: employees.length + 1 };
        const updatedEmployees = [...employees, newEmployee];
        setEmployees(updatedEmployees);
        saveToStorage('employees', updatedEmployees);
    };

    const editEmployee = (updatedEmployee) => {
        const updatedEmployees = employees.map((emp) =>
            emp.empNo === updatedEmployee.empNo ? updatedEmployee : emp
        );
        setEmployees(updatedEmployees);
        saveToStorage('employees', updatedEmployees);
    };

    const deleteEmployee = (empNo) => {
        const updatedEmployees = employees.filter((emp) => emp.empNo !== empNo);
        setEmployees(updatedEmployees);
        saveToStorage('employees', updatedEmployees);
    };

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, editEmployee, deleteEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeProvider;
