// src/components/pages/WorksOnList.jsx
import React, { useContext } from 'react';
import { WorksOnContext } from '../../context/WorksOnContext';
import WorksOnTable from '../organisms/WorksOnTable';
import Button from '../atoms/Button';

const WorksOnList = () => {
    const { workRecords,  deleteWorksOn } = useContext(WorksOnContext);

    const handleEdit = (workRecord) => {
        window.location.href = `/worksOns/edit/${workRecord.empNo}/${workRecord.projNo}`;
    };

    const handleDelete = (workRecord) => {
        deleteWorksOn(workRecord);
    };

    return (
        <div>
            <h2>Works On Records</h2>
            <Button variant="primary" href="/worksOns/new">Add New Work Record</Button>
            <WorksOnTable workRecords={workRecords} onEdit={handleEdit} onDelete={deleteWorksOn} />
        </div>
    );
};

export default WorksOnList;
