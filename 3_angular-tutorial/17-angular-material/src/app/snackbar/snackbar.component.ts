import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(mess, action){
    let snackbarRef = this.snackbar.open(mess, action, {duration: 2000});

    // ấn hoặc tự động biến mất đều rơi vô đây
    snackbarRef.afterDismissed().subscribe(()=>{
      console.log("The snackbar was dismissed");
    })

    // ấn mới vô đây
    snackbarRef.onAction().subscribe(()=>{
      console.log("The snacker action was triggered!");
    })

  }

}
