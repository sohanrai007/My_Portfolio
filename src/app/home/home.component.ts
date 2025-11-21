import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../services/projects.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  projects : any;
  i = 0
  FeaturedInfo: any;
  constructor(private titleService :Title,
    private projectService : ProjectsService
  ){
 this.titleService.setTitle("Sohan Rai - Home")
  }

  ngOnInit() {
    debugger
   this.projects = this.projectService.getProjects();
   this.FeaturedInfo = this.projects[0];
  }

  previousButton(){
    debugger
    if(this.i ==0){
            this.i =3;
       this.FeaturedInfo = this.projects[this.i];
       return
    }
    this.i--
    this.FeaturedInfo = this.projects[this.i];

  }

    nextButton(){
      debugger
    if(this.i ==3){
      this.i =0;
       this.FeaturedInfo = this.projects[this.i];
       return
    }
    this.i++
    this.FeaturedInfo = this.projects[this.i];

  }

}
