import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-warning-sheet',
  templateUrl: './warning-sheet.component.html',
  styleUrls: ['./warning-sheet.component.css']
})
export class WarningSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<EditDialogComponent>) {}
}
