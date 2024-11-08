import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { WorksOnContext } from '../../context/WorksOnContext';
import WorksOnForm from '../organisms/WorksOnForm';

const EditWorksOn = () => {
    const { empId, projId } = useParams();
    const { workRecords, editWorksOn } = useContext(WorksOnContext);
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        const recordToEdit = workRecords.find(
            (record) => record.empNo === empId && record.projNo === projId
        );
        if (recordToEdit) {
            setInitialData(recordToEdit);
        } 
    }, [empId, projId, workRecords, navigate]);

    const handleSubmit = (updatedRecord) => {
        editWorksOn(updatedRecord);
        navigate('/worksOns');  // Redirect back to list after editing
    };

    return (
        <div>
            <h2>Edit Work Record</h2>
            {initialData ? (
                <WorksOnForm onSubmit={handleSubmit} initialData={initialData} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EditWorksOn;
