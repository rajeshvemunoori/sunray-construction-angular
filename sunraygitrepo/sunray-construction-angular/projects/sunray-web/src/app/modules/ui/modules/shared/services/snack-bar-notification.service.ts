import { Injectable }     from '@angular/core';
import { MatSnackBar }    from '@angular/material';

@Injectable()
export class SnackBarNotificationService {
  constructor(
    private snackBar: MatSnackBar
  ) { }

  showNotification(
    message: string,
    action: string = "Got it.",
    timeOut: number = 50000
  ){
    this.snackBar.open(message, action, {
      duration: timeOut,
    });
  }

}
