import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component'
import { OutputComponent } from './output/output.component';
import { EightBallComponent } from './eight-ball/eight-ball.component'

@NgModule({
    declarations: [AppComponent,InputComponent,OutputComponent, EightBallComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
