import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { project } from '../models/project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css'
})
export class PortfolioCardComponent {
  @Input() project = {} as project;

  constructor(private projectService: ProjectsService) {

  }

  selectedProject?: project | null = null;
  currentSlideIndex: number = 0;
  showModal: boolean = false;

  getProject(id: number) {
    debugger;
    var projectDetails = this.projectService.getProjectById(id);
    this.selectedProject = projectDetails;
    this.currentSlideIndex = 0;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProject = null;
  }

  nextSlide() {
    if (this.selectedProject && this.currentSlideIndex < this.selectedProject.pictures.length - 1) {
      this.currentSlideIndex++;
    }
  }

  previousSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }
}
