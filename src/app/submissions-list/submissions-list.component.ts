import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

interface Submission {
  title: string;
  from: string;
  to: string;
  dueDate: string;
  status: string;
}

@Component({
  selector: 'app-submissions-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submissions-list.component.html',
  styleUrls: ['./submissions-list.component.css'],
})
export class SubmissionsListComponent implements OnInit {
  submissions: Submission[] = [];
  filteredSubmissions: Submission[] = [];
  selectedStatus: string = 'All';

  constructor(private dataService: DataService) {
    this.selectedStatus = 'All';
  }

  ngOnInit(): void {
    this.generateSubmissions();
    this.dataService.selectedStatus$.subscribe((status) => {
      this.selectedStatus = status;
      this.filterSubmissions(); // Call filterSubmissions when status changes
    });
    this.filteredSubmissions = [...this.submissions];
  }

  filterSubmissions() {
    if (this.selectedStatus === 'All') {
      this.filteredSubmissions = [...this.submissions];
    } else {
      this.filteredSubmissions = this.submissions.filter(
        (submission) => submission.status === this.selectedStatus
      );
    }
  }

  getClass(status: string): string {
    // Replace spaces with dashes and convert to lowercase
    return `status-${status.toLowerCase().replace(/\s/g, '-')}`;
  }

  generateSubmissions() {
    const statuses = ['Incomplete', 'Complete', 'Needs Review'];

    for (let i = 0; i < 15; i++) {
      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];
      this.submissions.push({
        title: 'Work Flow: Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        dueDate: '06 December',
        status: randomStatus,
      });
    }
  }
}
