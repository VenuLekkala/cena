import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
//import {DataGrid} from '@material-ui/data-Grid';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 4, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
  { field: 'col3', headerName: 'Column 3', width: 150 },
];

export default function App() {
  return (
    <div style={{ height: 300, width: '100%' }}>
        <div>
            <h2>Upload Contributions</h2>
            {/* <div style={{height: 1, backgroundColor: 'rgba(255, 255, 255 ,0.3)', alignSelf: 'stretch'}}></div> */}
        </div>
      <DataGrid rows={rows} columns={columns}/>
      
    </div>
  );
}