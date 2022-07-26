import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyReactComponent } from "./MyReactComponent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,AfterViewInit,
OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }
  ngAfterViewInit(): void {
    this.render()
  }
  ngOnDestroy(): void {
    
  }

  private render() {
    ReactDOM.render(React.createElement(MyReactComponent), document.getElementById('root'))
  }
}
