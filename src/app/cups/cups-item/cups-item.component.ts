import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cups-item',
  templateUrl: './cups-item.component.html',
  styleUrls: ['./cups-item.component.scss']
})
export class CupsItemComponent implements OnInit {

  @Input() cup: any;

  constructor() { }

  ngOnInit() {
  }

}
