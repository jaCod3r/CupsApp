import { Injectable } from '@angular/core';
import { Cup } from './cup';

@Injectable({
  providedIn: 'root'
})
export class CupsService {

  private cups: Cup[] = [
    {
      id: "1",
      name: "Large",
      image: "https://via.placeholder.com/250",
      size: "24oz"
    },
    {
      id: "2",
      name: "Medium",
      image: "https://via.placeholder.com/250",
      size: "18oz"
    },
    {
      id: "3",
      name: "Small",
      image: "https://via.placeholder.com/250",
      size: "14oz"
    },
  ]


  public getCups(): Cup[] {
    return this.cups;
  }

}
