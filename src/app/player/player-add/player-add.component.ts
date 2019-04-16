import { Component, OnInit } from '@angular/core';
import { POSITIONS } from '../../positions';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.less']
})
export class PlayerAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
positions = POSITIONS;
}
