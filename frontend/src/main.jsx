import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee.jsAddEmployee';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <EmployeeList/>
    <AddEmployee/>
  </>
);
