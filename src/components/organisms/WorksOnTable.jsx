import React from 'react';
import WorksOnTableList from '../molecules/WorksOnTableList';
import { Table } from 'react-bootstrap';

const WorksOnTable = ({ workRecords, onEdit, onDelete }) => {
    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>Employee No</th>
                    <th>Project No</th>
                    <th>Date Worked</th>
                    <th>Hours Worked</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {workRecords.map((workRecord) => (
                    <WorksOnTableList
                        key={`${workRecord.empNo}-${workRecord.projNo}`}
                        worksOn={workRecord}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </tbody>
        </Table>
    );
};

export default WorksOnTable;
