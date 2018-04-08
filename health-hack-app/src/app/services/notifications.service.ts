import { Injectable } from '@angular/core';

@Injectable()
export class Notifications {

  private notifications: {}[];

  constructor() {
      this.notifications = [];
      this.notifications.push({
        img: '<img class="post-img" src="./assets/meep.jpg">',
        time: '<p class="post-date">10:31 March 31, 2018</p>',
        html: '<p class="post-message">Meep Berger completed some learning!</p>'
      });
      this.notifications.push({
        img: '<img class="post-img" src="./assets/meep.jpg">',
        time: '<p class="post-date">10:31 March 31, 2018</p>',
        html: '<p class="post-message">Meep Berger completed some learning!</p>'
      });
      this.notifications.push({
        img: '<img class="post-img" src="./assets/meep.jpg">',
        time: '<p class="post-date">10:31 March 31, 2018</p>',
        html: '<p class="post-message">Meep Berger completed some learning!</p>'
      });
  }

  getNotifications() {
    return this.notifications;
  }

  addNotification(notification) {
    this.notifications.unshift(notification);
  }

}
