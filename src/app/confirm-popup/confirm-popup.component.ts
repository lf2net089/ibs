import { Component, Input } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InvoiceDetailsComponent } from '../../app/invoice-details/invoice-details.component';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.less'],
  standalone: true,
  imports: [DropdownModule, FileUploadModule, ButtonModule, CommonModule, FormsModule, InvoiceDetailsComponent, ConfirmDialogModule],
  providers: [ConfirmationService],
})
export class ConfirmPopupComponent {
  @Input() selectedRowData: any;
  constructor(private confirmationService: ConfirmationService,
    public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
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
    this.confirmationService.confirm({
      message: '是否改開開票?',
      header: '確認',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: '是',
      rejectLabel: '否',
      accept: () => {
        console.log('Confirmed');
      },
      reject: () => {
        console.log('Rejected');
      }
    });
  }


  cancel() {
    this.ref.close({ confirmed: false });
  }
}
