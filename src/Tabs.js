import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';
//import { SimpleList, List, Datagrid, EmailField, TextField } from 'react-admin';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Contributions" {...a11yProps(0)} />
          <Tab label="Exchange Rates" {...a11yProps(1)}/>
          <Tab label="Purchase Estimates" {...a11yProps(2)}/>
          <Tab label="Reports" {...a11yProps(3)}/>
          <Tab label="User Management" {...a11yProps(4)}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TabOne/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography component="div"> 
      <TabTwo/>
      </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabThree/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>

    </Box>
  );
}




// export default function ColorTabs() {
//   const [value, setValue] = React.useState('one');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className="MainTemplate" bgcolor="Blue" >
//     <Box sx={{bgcolor: 'background.paper', width: '100%' }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor="secondary"
//         indicatorColor="secondary"
//         textColor="White"
//         aria-label="secondary tabs example"
//         variant="fullWidth"
//       >
//         <Tab value="one" label="Contributions" />
//         <Tab value="two" label="Exchange Rates" />
//         <Tab value="three" label="Purchase Estimates" />
//         <Tab value="four" label="Reports" />
//         <Tab value="five" label="User Management" />
//       </Tabs>
//     </Box>
//     </div>
//   );
// }