import { Component, OnInit, Input } from '@angular/core';
import { Cup } from '../cup';

@Component({
  selector: 'app-cups-item',
  templateUrl: './cups-item.component.html',
  styleUrls: ['./cups-item.component.scss']
})
export class CupsItemComponent implements OnInit {

  @Input() cup: Cup;

  constructor() { }

  ngOnInit() {
  }

}
