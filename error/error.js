import {dataAllUrl} from '../all-url/general.js';


export const errorPayload = ({
  status,
  title,
  message,
}) => {
  return {
    status,
    error: title,
    message,
    availableEndpoints: dataAllUrl.all,
    timestamp: new Date().toISOString(),
  };
};
