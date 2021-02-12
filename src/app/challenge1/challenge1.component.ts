import { ExploreDialogComponent } from './../explore-dialog/explore-dialog.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-challenge1',
  templateUrl: './challenge1.component.html',
  styleUrls: ['./challenge1.component.scss']
})
export class Challenge1Component implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }
  openExploreDialog() {
    const dialogRef = this.dialog.open(ExploreDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
