import {nameUrl, } from '../config/utils.js';


export class GitHub {
  constructor(name, type = null, status = 'release') {
    this.name = name;
    this.type = type;
    this.status = status;
    this.urlProject = `https://kingalaluna.github.io/${nameUrl(name)}/`;
    this.urlCode = `https://github.com/KingAlaluna/${nameUrl(name)}.git`;
  }
}

