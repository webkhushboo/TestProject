// Core module
import { Component, Inject, OnInit } from '@angular/core';

// Forms module
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPlaylist } from '../challenge5/challenge5.component';

/**
 * Create New Playlist Component
 */
@Component({
  selector: 'app-create-new-playlist',
  templateUrl: './create-new-playlist.component.html',
  styleUrls: ['./create-new-playlist.component.scss'],
})

export class CreateNewPlaylistComponent implements OnInit {
  playlistForm: FormGroup;

  /**
   * Life cycle method
   */
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: IPlaylist
  ) {}
  /**
   * Life cycle init method
   */
  ngOnInit(): void {
    this.playlistForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      songsArr: new FormArray([]),
    });
    if (this.data) {
      // Edit playlist case
      if (this.data.songsArr.length > 0) {
        this.data.songsArr.forEach((item) => this.addToSongsArray());
      }
      this.playlistForm.patchValue(this.data);
    } else {
      // Create new playlist case
      this.addToSongsArray();
    }
  }

  /**
   * Return playlistName
   */
  get playlistName(): AbstractControl {
    return this.playlistForm.get('title');
  }

  /**
   * Return description
   */
  get description(): AbstractControl {
    return this.playlistForm.get('description');
  }

  /**
   * Return songsArr
   */
  get songsArr(): FormArray {
    return this.playlistForm.get('songsArr') as FormArray;
  }

  /**
   * Add to songs playlist array
   */
  addToSongsArray() {
    const formGroup = new FormGroup({
      songTitle: new FormControl('', Validators.required),
      artist: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
    });
    this.songsArr.push(formGroup);
  }

  /**
   * Remove from songs playlist array
   * @param index
   */
  removeFromArray(index) {
    this.songsArr.removeAt(index);
  }
}
