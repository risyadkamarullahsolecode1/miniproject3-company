// src/context/WorksOnContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getFromStorage, saveToStorage } from '../utils/storage';

export const WorksOnContext = createContext();

const WorksOnProvider = ({ children }) => {
    const [workRecords, setWorkRecords] = useState([]);

    useEffect(() => {
        const storedWorksOn = getFromStorage('worksOns');
        if (storedWorksOn) {
            setWorkRecords(storedWorksOn);
        }
    }, []);

    const addWorksOn = (newWorkRecord) => {
        const updatedWorksOn = [...workRecords, newWorkRecord];
        setWorkRecords(updatedWorksOn);
        saveToStorage('worksOns', updatedWorksOn);
    };

    const deleteWorksOn = (workRecordToDelete) => {
        const updatedWorksOn = workRecords.filter(
            (record) => record.empNo !== workRecordToDelete.empNo || record.projNo !== workRecordToDelete.projNo
        );
        setWorkRecords(updatedWorksOn);
        saveToStorage('worksOns', updatedWorksOn);
    };

    const editWorksOn = (updatedWorkRecord) => {
        const updatedWorksOn = workRecords.map((record) =>
            record.empNo === updatedWorkRecord.empNo && record.projNo === updatedWorkRecord.projNo
                ? updatedWorkRecord
                : record
        );
        setWorkRecords(updatedWorksOn);
        saveToStorage('worksOns', updatedWorksOn);
    };

    return (
        <WorksOnContext.Provider value={{ workRecords, addWorksOn, deleteWorksOn, editWorksOn }}>
            {children}
        </WorksOnContext.Provider>
    );
};

export default WorksOnProvider;
