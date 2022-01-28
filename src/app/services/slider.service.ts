import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Sliders } from '../interfaces/sliders.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SliderService {

  sliders: Sliders[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarSliders();
  }

  private cargarSliders(){
    // console.log('https://alimentacionsegura-c2527-default-rtdb.firebaseio.com/sliders.json');
    this.http.get('https://alimentacionsegura-c2527-default-rtdb.firebaseio.com/sliders.json')
      .subscribe( ( resp:any ) => {
        console.log(resp)
        this.sliders = resp;
      });
  }

}
