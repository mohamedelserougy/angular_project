import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dilog-component',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dilog-component.html',
  styleUrl: './dilog-component.css'
})
export class DilogComponent {


   constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);

   }

}
