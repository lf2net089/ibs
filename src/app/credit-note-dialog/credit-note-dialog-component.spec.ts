import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditNoteDialogComponent } from './credit-note-dialog-component';

describe('CreditNoteDialogComponentComponent', () => {
  let component: CreditNoteDialogComponent;
  let fixture: ComponentFixture<CreditNoteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditNoteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
