import { Component, Input } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.less'],
  standalone: true,
  imports: [DropdownModule, FileUploadModule, ButtonModule, CommonModule, FormsModule],
})
export class ConfirmPopupComponent {
  @Input() selectedRowData: any;
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    if (this.config.data) {
      this.selectedRowData = this.config.data.selectedRowData;
    }
  }
  cancellationCodes = [
    { label: 'Code 1', value: '1' },
    { label: 'Code 2', value: '2' },
  ];
  selectedCancellationCode: any;
  cancellationRemarks: string = '';
  uploadedFiles: any[] = [];



  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  confirm() {
    this.ref.close({ confirmed: true, data: { cancellationCode: this.selectedCancellationCode, remarks: this.cancellationRemarks, files: this.uploadedFiles } });
  }

  cancel() {
    this.ref.close({ confirmed: false });
  }
}
