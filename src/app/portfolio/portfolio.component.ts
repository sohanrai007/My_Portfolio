import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PortfolioCardComponent } from "../portfolio-card/portfolio-card.component";
import { project } from '../models/project';
import { Tag } from '../models/tag';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioCardComponent,CommonModule ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  projects= {} as project[];
  constructor(private titleService :Title,
private ProjectsService: ProjectsService,
  ){
 this.titleService.setTitle("Sohan Rai - Portfolio")
  }
  ngOnInit(): void {
    debugger
    this.projects=this.ProjectsService.getProjects()
  }


  
}
