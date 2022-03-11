import { Component, Input, OnInit } from '@angular/core';
import { PlaceItem } from 'src/types/PlaceItem';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss'],
})
export class PlaceCardComponent implements OnInit {
  constructor() {}
  @Input() public placeItem: PlaceItem | null = null;
  ngOnInit(): void {}
}
