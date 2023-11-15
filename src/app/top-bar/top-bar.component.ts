import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  FormsLogo: string = './assets/icons/form-list.svg';
  CustomerLogo: string = './assets/icons/customer.svg';
  SubmissionLogo: string = './assets/icons/submissions.svg';
  HistoryLogo: string = './assets/icons/history.svg';
  ReportsLogo: string = './assets/icons/reports.svg';
  WorkflowLogo: string = './assets/icons/workflow.svg';
  BellLogo: string = './assets/icons/bell.svg';
  ExitLogo: string = './assets/icons/exit.svg';
}
