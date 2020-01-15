import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-message-dialog',
  styleUrls: ['../services.scss'],
  template: `
<div>
  <div class="modal-header" style="background-color: #b20000; color: white;">
    <h4 class="modal-title">NOI Auditing Department</h4>
  </div>
  <div class="modal-body">
    <p>{{message}}</p>
  </div>
  <div class="modal-footer">
    <button type="button"
      class="btn btn-primary"
      (click)="activeModal.close(true)">OK</button>
  </div>
</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageDialogComponent {
  title: string;
  message: string;

  constructor(public activeModal: NgbActiveModal) {
  }
}
