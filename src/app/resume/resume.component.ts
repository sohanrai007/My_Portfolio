import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleService :Title,
    private renderer: Renderer2
  ){
 this.titleService.setTitle("Sohan Rai - Resume")
  }

  
  downloadpdf(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_balnk');
    link.setAttribute('href','../../assets/Sohan_Rai_SDE.pdf');
    link.setAttribute('download','sohan_rai_SDE.pdf');
    link.click();
    link.remove();
  }
}
