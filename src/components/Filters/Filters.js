import React from 'react'
import styles from './Filters.module.css'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



function CustomTabPanel(props) {
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
        <Box sx={{ p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



export default function Filters({filters, indexOfSelectedFilter, setIndexOfSelectedFilter}) {
//   const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setIndexOfSelectedFilter(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
        <Tabs value={indexOfSelectedFilter} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
            style:{
                backgroundColor:"#34c94b",
            }
        }} textColor="inherit">
            {filters.map((item,index)=>{
                return <Tab key={item.label} className={styles.tabs} label={item.label} {...a11yProps(index)} />
            })}
          
        </Tabs>
      
        {filters.map((item,index)=>{
            return (<CustomTabPanel key={item.label} value={item.label} index={index} />)
        })}
    </div>
  );
}