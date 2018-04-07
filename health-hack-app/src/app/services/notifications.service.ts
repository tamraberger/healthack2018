import { Injectable } from '@angular/core';

@Injectable()
export class Notifications {

  private notifications: {}[];

  constructor() {
      this.notifications.push();
      this.notifications.push();
      this.notifications.push();
  }

  getNotifications() {
    return this.notifications;
  }

  addNotification(notification) {
    this.notifications.push(notification);
  }

}
