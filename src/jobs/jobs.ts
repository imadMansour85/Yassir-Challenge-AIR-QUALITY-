var cron = require('node-cron');
import axios from 'axios' ;
var constants = require('../constants');
const externalAPICall = axios.create();

const AIR_QUALITY_PARIS = cron.schedule("*/10 * * * * *",async () => {
    try {
        console.log(`JOB EXCUTED AT ${new Date()}`);
        
        let result: any = await externalAPICall.get(`http://api.airvisual.com/v2/nearest_city?lat=${constants.PARIS_LATITUDE}&lon=${constants.PARIS_LONGITUDE}&key=${process.env.AIR_QUALITY_API}`);
        console.log(result.data.data.current);
        
        return { result: result.data.data.current };
      } catch (error) {
        console.log(error.message);
        return error.message
      }})

AIR_QUALITY_PARIS.start()
