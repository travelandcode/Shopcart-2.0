import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import { useState } from 'react';

import FAQSection from '../components/faq_section';

function FAQTabs({faqs}){
  const [value, setValue] = useState("0")
  const tags = new Set()
  faqs.forEach(faq => tags.add(faq.tag))
  const uniqueTags = Array.from(tags)
  const categories = uniqueTags.filter(item => item !== "others").concat(uniqueTags.filter(item => item === "others"));
  const sortedFAQs = faqs.reduce((acc, faq) => {
      // Check if the tag already exists in the accumulator object
      if (!acc[faq.tag]) {
        acc[faq.tag] = []; // If not, initialize it as an empty array
      }
      acc[faq.tag].push({
        question: faq.question,
        answer: faq.answer,
        tag: faq.tag // Including tag in each FAQ object, though it's optional given the new structure
      });
    
      return acc;
      }, {}
  )
  const handleChange = (event, newValue) => {
    setValue(newValue)
  };
  return(
    <Box sx={{width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <TabList onChange={handleChange} sx={{ '&& .Mui-selected': {color: 'black', fontWeight: '700'},'.MuiTabs-indicator': {backgroundColor: 'black'} }}>
                    {
                        categories.map((category,index) =>( <Tab label={category} value={String(index)} />))
                    }
                </TabList>
            </Box>
            {
              categories.map((category,index) => (
                <TabPanel value={String(index)}>
                {
                    sortedFAQs[category].map(faq =>( <FAQSection question={faq.question} info={faq.answer} />))
                }
                </TabPanel>)
              )
            }
        </TabContext>
        <div className='[ h-[50px] w-full ][ bg-[#E0E0E0] ][ rounded-[10px] ][ flex ]'>
            <p className="[ my-auto mx-auto ][ text-[17px] ]"> See more questions about <b>{categories[value].charAt(0).toUpperCase() + categories[value].slice(1)}</b></p>
        </div>
    </Box>
  );
}

export default FAQTabs;