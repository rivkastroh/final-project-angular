import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [NgIf],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {

  lesson: any;

  constructor(private route: ActivatedRoute) {
    const navigation = history.state;
    this.lesson = navigation.lesson;
  }

}
