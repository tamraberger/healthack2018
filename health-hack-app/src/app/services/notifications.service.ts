import { Injectable } from '@angular/core';

@Injectable()
export class Notifications {

  private notifications: {}[];

  constructor() {
      this.notifications = [];
      this.notifications.push({
        img: '<img class="img-thumbnail" src="./assets/Gibbons_Sean.jpg">',
        time: '<p class="post-date">Sat Apr 07 2018</p>',
        html: '<p class="post-message">Sean achieved his daily step goal!</p>'
      });
      this.notifications.push({
        img: '<img class="img-thumbnail" src="./assets/Berger_Tamra.jpg">',
        time: '<p class="post-date">Fri Apr 06 2018</p>',
        html: '<p class="post-message">Tamra completed some learning!</p>'
      });
      this.notifications.push({
        img: '<img class="img-thumbnail" src="./assets/Banko_Peter.jpg">',
        time: '<p class="post-date">Wed Apr 04 2018</p>',
        html: '<p class="post-message">Peter achieved his daily step goal!</p>'
      });
      this.notifications.push({
        img: '<img class="img-thumbnail" src="./assets/CHELLADURAI_PRABHAKARAN.jpg">',
        time: '<p class="post-date">Tue Apr 03 2018</p>',
        html: '<p class="post-message">Prabhakaran completed some learning!</p>'
      });
      this.notifications.push({
        img: '<img class="img-thumbnail" src="./assets/Ondrus_Keri.jpg">',
        time: '<p class="post-date">Sun Apr 01 2018</p>',
        html: '<p class="post-message">Keri completed some learning!</p>'
      });
  }

  getNotifications() {
    return this.notifications;
  }

  addNotification(notification) {
    this.notifications.push(notification);
  }

}
