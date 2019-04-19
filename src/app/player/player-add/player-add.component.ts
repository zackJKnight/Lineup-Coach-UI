import { Component, OnInit } from '@angular/core';
import { Position } from '../../position';
import { POSITIONS } from '../../positions';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.less']
})
export class PlayerAddComponent implements OnInit {
  positions = POSITIONS;
  constructor() { }

  ngOnInit() {
  }

drop(event: CdkDragDrop<Position[]>) {
  moveItemInArray(this.positions, event.previousIndex, event.currentIndex);
}
}
