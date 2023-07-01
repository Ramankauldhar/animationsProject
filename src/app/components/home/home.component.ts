import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  texts: string[] = ["Welcome To Toronto!", "Want to explore Toronto?", "Hurry Up! Book Your tickets online."];
  currentText!: string;

    pictureUrls: string[] = [
    "../../../assets/view.png",
    "../../../assets/t1.jpg"
  ];
  currentPictureUrl!: string;

  ngOnInit() {
    this.currentText = this.texts[0]; 

    setInterval(() => {
      const currentIndex = this.texts.indexOf(this.currentText);
      this.currentText = this.texts[(currentIndex + 1) % this.texts.length];
    }, 2000); 


    this.currentPictureUrl = this.pictureUrls[0]; 

    setInterval(() => {
      const currentIndex = this.pictureUrls.indexOf(this.currentPictureUrl);
      this.currentPictureUrl = this.pictureUrls[(currentIndex + 1) % this.pictureUrls.length];
    }, 5000); 
  }

}