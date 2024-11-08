import React from 'react';
import CustomButton from '../atoms/Button';

const DepartmentTableList = ({ department, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{department.deptNo}</td>
            <td>{department.deptName}</td>
            <td>{department.mgrEmpNo}</td>
            <td>{department.spvEmpNo}</td>
            <td>
                <CustomButton variant="warning" onClick={() => onEdit(department.deptNo)}>
                    Edit
                </CustomButton>{' '}
                <CustomButton variant="danger" onClick={() => onDelete(department.deptNo)}>
                    Delete
                </CustomButton>
            </td>
        </tr>
    );
};

export default DepartmentTableList;
