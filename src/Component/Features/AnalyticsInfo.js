import { Typography ,Box} from "@mui/material";
import React from "react";

const Analytics =({})=>{
  return(
    <Box className="analyticsBox">

       <Typography className="anaTypo">360 Critical Care success stories</Typography>
       <Typography className="subTypo">Begin your journey to success</Typography>
       <Box className="analyticsCount">
       <div >
         <p className="calCount">1000+</p>
          <p className="calMsg">Happy Students</p>
       </div>
       <div >
         <p className="calCount">100+</p>
          <p className="calMsg">Video Lectures</p>
       </div>
       <div >
         <p className="calCount">150+</p>
          <p className="calMsg">Mock test</p>
       </div>
       <div >
         <p className="calCount">10000+</p>
          <p className="calMsg">Questions </p>
       </div>
       </Box>
    </Box>
  )
}
export default Analytics;