import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent
  implements
  OnChanges, OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  name = 'name';

  constructor() {
    console.log('..........................');
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('OnInit');
  }

  ngDoCheck(): void {
    //console.log('DoCheck');
  }

  ngAfterContentInit(): void {
    //console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    //console.log('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    //console.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    //console.log('AfterViewChecked');
  }

  ngOnDestroy(): void {
    //console.log('OnDestroy');
  }
}
