import React,{ useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/templates/Layout';
import Dashboard from './components/pages/Dashboard';
import EmployeesList from './components/pages/EmployeeList';
import AddEmployee from './components/pages/AddEmployee';
import EditEmployee from './components/pages/EditEmployee';
import DepartmentList from './components/pages/DepartmentList';
import AddDepartment from './components/pages/AddDepartment';
import EditDepartment from './components/pages/EditDepartment';
import EmployeeProvider from './context/EmployeeContext';
import DepartmentProvider from './context/DepartmentContext';
import ProjectProvider from './context/ProjectContext';
import AddProject from './components/pages/AddProject';
import EditProject from './components/pages/EditProject';
import ProjectsList from './components/pages/ProjectList';
import WorksOnProvider from './context/WorksOnContext';
import AddWorksOn from './components/pages/AddWorksOn';
import WorksOnList from './components/pages/WorksOnList';
import EditWorksOn from './components/pages/EditWorksOn';

function App() {

  return (
    <Router>
        <EmployeeProvider>
            <DepartmentProvider>
                <ProjectProvider>
                    <WorksOnProvider>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/employees" element={<EmployeesList />} />
                            <Route path="/employees/new" element={<AddEmployee />} />
                            <Route path="/employees/:id" element={<EditEmployee />} />
                            <Route path="/departments" element={<DepartmentList />}/>
                            <Route path="/departments/new" element={<AddDepartment />}/>
                            <Route path="/departments/:id" element={<EditDepartment />}/>
                            <Route path="/Projects" element={<ProjectsList />}/>
                            <Route path="/Projects/new" element={<AddProject />}/>
                            <Route path="/Projects/:id" element={<EditProject />}/>
                            <Route path="/worksOns" element={<WorksOnList />}/>
                            <Route path="/worksOns/new" element={<AddWorksOn />}/>
                            <Route path="/worksOns/edit/:empId/:projId" element={<EditWorksOn />} />
                        </Routes>
                    </Layout>
                    </WorksOnProvider>
                </ProjectProvider>
            </DepartmentProvider>
        </EmployeeProvider>
    </Router>
  )
}

export default App
