import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <div class="container">
        <h3>{{ counter }}</h3>
    </div>
    <button type="button" (click)="increaseBy(5)">+1</button>
    <button type="button" (click)="resetCounter()">reset</button>
    <button type="button" (click)="decrementBy()" *ngIf="counter>=10">-1</button>    
    `
})

export class CounterComponent {
    public counter: number = 0;

    constructor() { }

    protected increaseBy( value: number): void{
        this.counter +=  value;
    }

    protected decrementBy(): void{
        this.counter -= 1;
    }

    protected resetCounter(): void {
        this.counter = 10;
    }
    
}