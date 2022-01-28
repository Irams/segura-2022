import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: [
  ]
})
export class SliderComponent implements OnInit {

  constructor( public sliderService: SliderService ) {
    
    
   }

   

  ngOnInit(): void {
  }

}
