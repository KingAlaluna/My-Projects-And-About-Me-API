import {dataAllProject} from './projects/data.js';
import {dataProjectDetails} from './projects-details/data.js';
import {aboutMeInfo} from './about-me/data.js';


export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const urlPath = url.pathname;
    
    if (urlPath == '/projects') {
      return answer(dataAllProject);
    }
    else if (urlPath == '/projects-details') {
      return answer(dataProjectDetails);
    }
    else if (urlPath == '/about-me') {
      return answer(aboutMeInfo);
    }
    else {
      return new Response("Not Found", { 
        status: 404,
      });
    }
  },
};


function answer(data) {
  const jsonResponse = JSON.stringify(data);
  
  return new Response(jsonResponse, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
  });
}


console.log(dataProjectDetails);