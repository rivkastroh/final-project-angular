import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-registering',
  standalone: true,
  imports: [AgGridAngular],
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
  gridOptions = {
    context: {}
  }
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    {
      field: "name", headerName: 'שם', filter: 'agTextColumnFilter'
    },
    { field: "lesson", headerName: 'שיעור', filter: 'agTextColumnFilter', },
    {
      field: "", headerName: "פרטים",
      cellRenderer: function (params: any) {
        var eDiv = document.createElement("div");
        eDiv.innerHTML = "<button>פרטים</button>";
        eDiv.addEventListener("click", function () {
          alert(`ת"ז: ${params.data.id} ,  שם: ${params.data.name} ,  טלפון: ${params.data.phone} ,  שיעור: ${params.data.lesson} ,  מחיר: ${params.data.price} ש"ח ,  שולם: ${params.data.isPaid ? "כן" : "לא"}`);
        });
        return eDiv;
      }
    }
  ];
}
