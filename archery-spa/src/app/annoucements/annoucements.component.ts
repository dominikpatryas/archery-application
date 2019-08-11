import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../_services/announcement.service';
import { Announcement } from '../_models/announcement';

@Component({
  selector: 'app-annoucements',
  templateUrl: './annoucements.component.html',
  styleUrls: ['./annoucements.component.css']
})
export class AnnoucementsComponent implements OnInit {
  announcements: Announcement[];
  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.loadAnnouncements();
  }

  loadAnnouncements() {
    this.announcementService.getAnnouncement().subscribe( (announcements: Announcement[]) => {
      this.announcements = announcements;
    }, error => {
      console.log('Announcement error');
    });
  }


}
