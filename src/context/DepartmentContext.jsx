import React, { createContext, useState, useEffect } from 'react';
import { getFromStorage, saveToStorage } from '../utils/storage';

export const DepartmentContext = createContext();

const DepartmentProvider = ({ children }) => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const savedDepartments = getFromStorage('departments') || [];
        if (savedDepartments){
            setDepartments(savedDepartments);
        }
    }, []);

    const addDepartment = (department) => {
        const newDepartment = { ...department, deptNo: departments.length + 1 };
        const updatedDepartments = [...departments, newDepartment];
        setDepartments(updatedDepartments);
        saveToStorage('departments', updatedDepartments);
    };

    const editDepartment = (updatedDepartment) => {
        const updatedDepartments = departments.map((dept) =>
            dept.deptNo === updatedDepartment.deptNo ? updatedDepartment : dept
        );
        setDepartments(updatedDepartments);
        saveToStorage('departments', updatedDepartments);
    };

    const deleteDepartment = (deptNo) => {
        const updatedDepartments = departments.filter((deptartment) => deptartment.deptNo !== deptNo);
        setDepartments(updatedDepartments);
        saveToStorage('departments', updatedDepartments);
    };

    return (
        <DepartmentContext.Provider value={{ departments, addDepartment, editDepartment, deleteDepartment }}>
            {children}
        </DepartmentContext.Provider>
    );
};

export default DepartmentProvider;
