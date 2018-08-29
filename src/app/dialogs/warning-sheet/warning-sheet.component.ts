import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { EditDialogComponent } from 'src/app/dialogs/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-warning-sheet',
  templateUrl: './warning-sheet.component.html',
  styleUrls: ['./warning-sheet.component.css']
})
export class WarningSheetComponent {
  constructor(public bottomSheetRef: MatBottomSheetRef<EditDialogComponent>) {}
  dismiss() {
    this.bottomSheetRef.dismiss(false);
  }

  acceptChanges() {
    this.bottomSheetRef.dismiss(true);
  }
}
