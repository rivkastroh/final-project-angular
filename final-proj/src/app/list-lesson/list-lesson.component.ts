import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-lesson',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-lesson.component.html',
  styleUrl: './list-lesson.component.css'
})
export class ListLessonComponent {
  lessons = [
    { name: "התעמלות בסיסית", nameTeacher: "מאמן יוסי", numSessions: 4, startDate: "2025-01-01", price: 90, day: "שני", time: "9:20" },
    { name: "שיעור פילאטיס", nameTeacher: "מאמנת מרים", numSessions: 4, startDate: "2025-01-07", price: 100, day: "שלישי", time: "10:00" },
    { name: "יוגה מתקדמת", nameTeacher: "מאמן דוד", numSessions: 4, startDate: "2025-01-01", price: 95, day: "רביעי", time: "11:30" },
    { name: "שיעור אירובי", nameTeacher: "מאמנת שרה", numSessions: 4, startDate: "2025-07-01", price: 85, day: "חמישי", time: "18:00" },
    { name: "זומבה", nameTeacher: "מאמן רן", numSessions: 4, startDate: "2025-01-01", price: 80, day: "שישי", time: "10:30" },
    { name: "שיעור קיקבוקסינג", nameTeacher: "מאמן ניר", numSessions: 4, startDate: "2025-01-01", price: 110, day: "שני", time: "19:00" },
    { name: "שיעור ריקוד", nameTeacher: "מאמנת טלי", numSessions: 4, startDate: "2025-05-01", price: 75, day: "שלישי", time: "17:00" },
    { name: "התעמלות לגיל הזהב", nameTeacher: "מאמן חיים", numSessions: 4, startDate: "2025-01-01", price: 70, day: "רביעי", time: "10:00" },
    { name: "שיעור ספורט חורף", nameTeacher: "מאמן עידו", numSessions: 4, startDate: "2027-01-01", price: 95, day: "חמישי", time: "16:00" },
    { name: "שיעור טאי צ'י", nameTeacher: "מאמנת נועה", numSessions: 4, startDate: "2026-01-01", price: 85, day: "שישי", time: "9:00" }
  ];

  constructor(private router: Router) {}

  navigateToLessonDetails(lesson: any) {
    this.router.navigate(['/lesson'], { state: { lesson } });
  }
  isLessonStarted(startDate: string): boolean {
    const today = new Date();
    const lessonDate = new Date(startDate);
    return lessonDate < today;
  }
}