import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductFormComponent } from "./product-form/product-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [ProductFormComponent]
})
export class AppComponent {
  title = 'product-manage-app';
  optA: boolean = false
  optB: boolean = false
  changediv(option: string) {
    if (option == 'a') {
      this.optA = true
      this.optB = false
    } else {
      this.optA = false
      this.optB = true
    }
  }
}
