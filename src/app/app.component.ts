import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  endTime = "22:00:00"
  remainingMembers = 5
  remainingTime = "0"

  ngOnInit(): void {
    this.update()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update()
  }

  update() {
    // Recompute remaining time
    const end = Date.parse(this.endTime)
    const now = Date.now()
    const remainingMillis = end - now
    
    this.remainingTime = `${remainingMillis / 1000} s`
  }
}

//Venni Fehér szalvéták az IKEA
