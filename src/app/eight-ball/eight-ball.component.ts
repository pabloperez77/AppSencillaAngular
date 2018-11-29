import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-eight-ball',
  templateUrl: './eight-ball.component.html',
  styleUrls: ['./eight-ball.component.css']
})
export class EightBallComponent {
  @Input() data;

}
