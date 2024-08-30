import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InvoiceDetailsComponent } from '../invoice-details/invoice-details.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-credit-note-dialog',
  standalone: true,
  imports: [
    DropdownModule,
    FileUploadModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    InvoiceDetailsComponent,
    ConfirmDialogModule
  ],
  templateUrl: './credit-note-dialog-component.html',
  styleUrls: ['./credit-note-dialog-component.less'],
  providers: [ConfirmationService]
})
export class CreditNoteDialogComponent implements OnInit {
  @Input() selectedRowData: any;
  issueTypes = [];
  selectedIssueType: any;
  creditNoteDate: Date | undefined;
  creditNoteAmount: number | undefined;
  creditNoteTaxAmount: number | undefined;
  creditNoteRemarks: string = '';
  reportingMonths = [];
  selectedReportingMonth: any;
  uploadedFiles: any[] = [];

  constructor(private confirmationService: ConfirmationService, private config: DynamicDialogConfig) {}

  ngOnInit() {
    this.selectedRowData = this.config.data.selectedRowData;
    console.log('Received selectedRowData:', this.selectedRowData);

    if (!this.selectedRowData) {
      console.error("No selected row data passed to the component.");
    } else {
      console.log("Selected Row Data: ", this.selectedRowData);
    }
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  confirm() {
  }

  cancel() {
  }
}
