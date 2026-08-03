import {
  gitPagesUrl, 
  gitCodeUrl,
} from '../config/utils.js';


export class Project {
  constructor({
    name, 
    type = null, 
    status = 'release', 
    urlProject, 
    param = '', 
    urlCode, 
  }) {
    this.name = name;
    this.type = type;
    this.status = status;
    this.urlProject = urlProject ? urlProject(name, param) : gitPagesUrl(name);
    this.urlCode = urlCode ? urlCode(name) : gitCodeUrl(name);
  }
}

