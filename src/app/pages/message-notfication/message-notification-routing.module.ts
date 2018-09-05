import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageAndNotificationComponent } from './massage-notification';
import { messageComponent } from './massage/message';
import { AllSingleMessageComponent } from './all-single-message/all-single-message';



const routes: Routes = [{
  path: '',
  component: MessageAndNotificationComponent,
  children: [{
    path: 'message',
    component: messageComponent,
  }, {
    path: 'all-single-message/:id',
    component: AllSingleMessageComponent,
  },

],

}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class messageAndNotificationRoutnigModule {

}

export const routedComponents = [
  MessageAndNotificationComponent,
  messageComponent,
  AllSingleMessageComponent,

];
