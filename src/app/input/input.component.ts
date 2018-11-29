import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
    @Output() onNewPanel = new EventEmitter<string>()
    currentPanel = '';

    submit(){
      console.log(this.currentPanel);
      this.onNewPanel.emit(this.currentPanel);
      this.currentPanel = '';
    }
}


