import { MatDialog } from '@angular/material/dialog';
// Core module
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPlaylist } from '../challenge5/challenge5.component';

/**
 * Playlist card component
 */
@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss'],
})

export class PlaylistCardComponent implements OnInit {
  @Input() playlist: IPlaylist;
  @Output() editPlaylist = new EventEmitter<IPlaylist>();
  @Output() deletePlaylist = new EventEmitter<IPlaylist>();

  totalDuration: number = 0;

  /**
   * Life circle method
   */
  constructor(private dialog: MatDialog) {}

  /**
   * Life cycle init method
   */
  ngOnInit(): void {
    this.playlist.songsArr.forEach((item) => {
      this.totalDuration += item.duration;
    });
  }

  /**
   * Edit playlist component
   */
  editPlaylistClick() {
    this.editPlaylist.emit(this.playlist);
  }

  /**
   * Delete playlist component
   */
  deletePlaylistClick() {
    this.deletePlaylist.emit(this.playlist);
  }
}
