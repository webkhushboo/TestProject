// Core module
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExploreDialogComponent } from './../explore-dialog/explore-dialog.component';

/**
 * Challenge2 component
 */
@Component({
  selector: 'app-challenge1',
  templateUrl: './challenge1.component.html',
  styleUrls: ['./challenge1.component.scss'],
})
export class Challenge1Component implements OnInit {

  /**
   * Life cycle method
   * @param dialog MatDialog
   */
  constructor(public dialog: MatDialog) {}

  
  /**
   * Life cycle init method
   */
  ngOnInit(): void {}

  /**
   * Open explore dialog
   */
  openExploreDialog(): void {
    const dialogRef = this.dialog.open(ExploreDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
