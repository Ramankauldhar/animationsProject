import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  isAnimationActive = false; // Initialize as false


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }


  checkVisibility() {
    const animation1 = document.querySelectorAll(".animationFromRight");
    const animation2 = document.querySelectorAll(".animationFromLeft");
    const windowHeight = window.innerHeight;
    const elementVisible = 200;

    // Check if at least one element has the 'active' class
    this.isAnimationActive = Array.from(animation1).some((element) =>
      element.classList.contains("active")
    ) || Array.from(animation2).some((element) =>
      element.classList.contains("active2")
    );

    animation1.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
    animation2.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active2");
      } else {
        element.classList.remove("active2");
      }
    });
  }
}