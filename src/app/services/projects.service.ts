import { Injectable } from '@angular/core';
import { project } from '../models/project';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  project: project[] = [
    { id: 1, projectName: "project 1", description: "project 1 desciption", summary: "suru description barepe baka undu", tags: [Tag.Angular, Tag.TypeScript],pictures:["../../assets/Screenshot (2).png","../../assets/Screenshot (3).png","../../assets/Screenshot (4).png"] },
    { id: 2, projectName: "project 2", description: "project 2 desciption", summary: "suru description barepe baka undu", tags: [Tag.Angular, Tag.TypeScript, Tag.DotNet, Tag.CSharp],pictures:["../../assets/Screenshot (2).png","../../assets/Screenshot (3).png","../../assets/Screenshot (4).png"] },
    { id: 3, projectName: "project 3", description: "project 3 desciption", summary: "suru description barepe baka undu", tags: [Tag.react, Tag.TypeScript],pictures:["../../assets/Screenshot (2).png","../../assets/Screenshot (3).png","../../assets/Screenshot (4).png"] }, 
    { id: 4, projectName: "project 4", description: "project 4 desciption", summary: "suru description barepe baka undu", tags: [Tag.Angular],pictures:["../../assets/Screenshot (2).png","../../assets/Screenshot (3).png","../../assets/Screenshot (4).png","../../assets/Screenshot (5).png"]}
  ]
  constructor() { }

  getProjects(){
    return this.project
  }
  getProjectById(id:number){
   let projectfteched = this.project.find(x => x.id == id);
   return projectfteched
  }
}
