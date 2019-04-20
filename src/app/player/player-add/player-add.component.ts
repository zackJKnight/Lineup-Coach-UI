import { Component, OnInit } from "@angular/core";
import { Player } from "../../player";
import { Position } from "../../position";
import { POSITIONS } from "../../positions";

import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
@Component({
  selector: "app-player-add",
  templateUrl: "./player-add.component.html",
  styleUrls: ["./player-add.component.less"]
})
export class PlayerAddComponent implements OnInit {
  positions = POSITIONS;
  player: Player = new Player();
  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<Position[]>) {
    moveItemInArray(this.positions, event.previousIndex, event.currentIndex);
    this.player.positionPreferenceRank = this.positions.map(position => position.name);
  }

  addFirst(first: string) {
    if (first) {
      this.player.firstName = first;
    }
  }

  addLast(last: string) {
    if (last) {
      this.player.lastName = last;
    }
  }

  onSave() {
    this.player = null;
    this.player = new Player();
  }
}
