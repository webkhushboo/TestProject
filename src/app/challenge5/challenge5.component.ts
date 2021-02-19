// Core module
import { CreateNewPlaylistComponent } from './../create-new-playlist/create-new-playlist.component';
import { Component, OnInit } from '@angular/core';
// Mat dialog
import { MatDialog } from '@angular/material/dialog';

export interface ISongsList {
  songTitle: string;
  duration: number;
  artist: string;
}

export interface IPlaylist {
  title: string,
  description: string,
  songsArr: ISongsList[];
}

/**
 * Challenge5 component
 */
@Component({
  selector: 'app-challenge5',
  templateUrl: './challenge5.component.html',
  styleUrls: ['./challenge5.component.scss'],
})

export class Challenge5Component implements OnInit {
  
  playlistArray: IPlaylist[] = [];
  /**
   * Life cycle method
   * @param _snackBar MatSnackBar
   */
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(CreateNewPlaylistComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.playlistArray.push(result);
      }
    });
  }

  /**
   * Life cycle init method
   */
  ngOnInit(): void {
    this.playlistArray = [{
      title: 'Kopikustik',
      description: 'More than a coffee, this is all of your favorite accoustic songs.',
      songsArr: [
        {
          duration: 2,
          artist: 'Ardhito Pramono',
          songTitle: 'Cigarettes of ours'
        },
        {
          duration: 2,
          artist: 'Walking Back Home',
          songTitle: 'Cigarettes of ours'
        }
      ]
    }]
  }

  /**
   * Edit playlist-card component
   */
  editPlaylist(playlist) {
    const dialogRef = this.dialog.open(CreateNewPlaylistComponent, {
      data: playlist
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.playlistArray.forEach((item,index) => {
        if(item.title === result.title){
          this.playlistArray[index] = result;
        }
      })
    });
  }

  /**
   * Delete playlist-card component
   */
  deletePlaylist(playlist) {
    this.playlistArray.forEach((item,index) => {
      if(item.title === playlist.title){
        this.playlistArray = [...this.playlistArray.slice(0,index) ,...this.playlistArray.slice(index + 1 ,this.playlistArray.length)];
      }
    })
  }
}
