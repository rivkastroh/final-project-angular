import { Component } from '@angular/core';


@Component({
  selector: 'app-registering',
  standalone: true,
  imports: [],
  templateUrl: './registering.component.html',
  styleUrl: './registering.component.css'
})
export class RegisteringComponent {
  registereds = [
    { name: "יוסי כהן", phone: "0501234567", id: "123456789", lesson: "התעמלות בסיסית", price: "90", isPaid: true },
    { name: "מרים לוי", phone: "0502345678", id: "987654321", lesson: "שיעור פילאטיס", price: "100", isPaid: false },
    { name: "דוד ישראלי", phone: "0503456789", id: "456789123", lesson: "יוגה מתקדמת", price: "95", isPaid: true },
    { name: "שרה פז", phone: "0504567890", id: "321654987", lesson: "שיעור אירובי", price: "85", isPaid: false },
    { name: "רן אברהם", phone: "0505678901", id: "654321789", lesson: "זומבה", price: "80", isPaid: true },
    { name: "ניר בן-אדם", phone: "0506789012", id: "789123456", lesson: "שיעור קיקבוקסינג", price: "110", isPaid: false },
    { name: "טלי בר", phone: "0507890123", id: "159753486", lesson: "שיעור ריקוד", price: "75", isPaid: true },
    { name: "חיים שטרן", phone: "0508901234", id: "753159846", lesson: "התעמלות לגיל הזהב", price: "70", isPaid: true },
    { name: "עידו רוזן", phone: "0509012345", id: "951753486", lesson: "שיעור ספורט חורף", price: "95", isPaid: false },
    { name: "נועה גולן", phone: "0500123456", id: "258963147", lesson: "שיעור טאי צ'י", price: "85", isPaid: true }
  ];


}
