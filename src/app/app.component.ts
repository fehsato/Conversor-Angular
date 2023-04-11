import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conversao-angular';

  valor1 = 0;
  resp = '0';

  centimetros(): void {
    this.resp= `${this.valor1 * 100}`;
  }

  milimetros(): void {
    this.resp= `${this.valor1 * 1000}`;
  }

  quilometros(): void {
    this.resp= `${this.valor1 * 0.001}`;
  }
}
