import { Component, OnInit, Input } from '@angular/core';
import { CupsService } from '../cups.service';
import { Cup } from '../cup';

@Component({
  selector: 'app-cups-list',
  templateUrl: './cups-list.component.html',
  styleUrls: ['./cups-list.component.scss']
})
export class CupsListComponent implements OnInit {

  cups: Cup[] = []

  constructor(private cupsService: CupsService) { }

  ngOnInit() {
    this.cups = this.cupsService.getCups();
  }

}
