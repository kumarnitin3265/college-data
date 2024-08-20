
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CollegeTable from './components/collegeTable';


function App() {
  return (
    <Provider store={store}>
      <div className= "App">
        <h1>College Table</h1>
        <CollegeTable />
      </div>
    </Provider>
  );
}

export default App;
