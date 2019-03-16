import { Component, OnInit } from '@angular/core';
import { Cup } from '../cup';
import { CupsService } from '../cups.service';


@Component({
  selector: 'app-cups-detail',
  templateUrl: './cups-detail.component.html',
  styleUrls: ['./cups-detail.component.scss']
})
export class CupsDetailComponent implements OnInit {

  cup: Cup;

  constructor(private cupsService: CupsService) { }

  ngOnInit() {

  }
}
