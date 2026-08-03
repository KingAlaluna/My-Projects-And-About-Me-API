import {getType} from './config/utils.js';
import {dataProjects} from './projects/data.js';
import {dataProjectsDetails} from './projects-details/data.js';
import {aboutMeInfo} from './about-me/data.js';
import {dataAllUrl} from './all-url/general.js'
import {errorPayload} from './error/error.js';
import {html} from './html/html.js';


export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return answerOptions();
    }
    
    if (request.method !== 'GET') {
      const config = { 
        type: 'json', 
        status: 405, 
        title: 'Method Not Allowed', 
        message: 'Only GET requests are allowed',
      };
      
      return error(config, { status: 405 });
    }
    
    const url = new URL(request.url);
    const [path1, path2, ] = url.pathname.split('/').filter(Boolean);
    const full = url.searchParams.get('full') === 'true';
    
    const acceptHeader = request.headers.get('Accept') || '';
    const type = acceptHeader.includes('text/html') ? 'html' : 'json';
    
    const config = {
      type,
      status: 200,
      title: 'All Links',
      message: `All links are below`,
    };
    
    
    if (path1 === 'projects' && full) {
      return getData(config, path2, dataProjectsDetails);
    }
    else if (path1 === 'projects' && !full) {
      return getData(config, path2, dataProjects);
    }
    else if (path1 === 'about-me') {
      return getData(config, path2, aboutMeInfo);
    }
    else if (path1 === 'urls') {
      if (config.type === 'html') {
        return getHtml(config, path2, dataAllUrl);
      }
      return getData(config, path2, dataAllUrl);
    }
    else {
      return error(config, );
    }
  },
};


function getData(config, path2, data) {
  if (path2 && Object.hasOwn(data, path2)) {
    return answerJson(data[path2], config, );
  }
  else if (path2 && !Object.hasOwn(data, path2)) {
    return error(config, );
  }
  else if (!path2) {
    return answerJson(data.all, config, );
  }
}


function getHtml(config, path2, data) {
  if (path2 && Object.hasOwn(data, path2)) {
    return answerHtml(config, data[path2]);
  }
  else if (path2 && !Object.hasOwn(data, path2)) {
    return error(config, );
  }
  else if (!path2) {
    return answerHtml(config, data.all);
  }
}


function answerOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
      'Access-Control-Max-Age': '86400',
    },
  });
}


function answerJson(data, {status = 200} = {}) {
  const jsonResponse = JSON.stringify(data);
  
  return new Response(jsonResponse, {
    status,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}


function answerHtml(config, data = dataAllUrl.all, ) {
  const {status} = config;
  
  return new Response(html(config, data, ), {
    status,
    headers: { 
      'Content-Type': 'text/html;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}


function error(config, {
  data = errorPayload, 
  status = 404,
} = {}) {
  config.title = 'Not Found';
  config.status = status;
  
  if (config.type === 'html') {
    return answerHtml(config);
  }
  
  return answerJson(getType(data) === 'function' ? data(config) : data, config, );
}
