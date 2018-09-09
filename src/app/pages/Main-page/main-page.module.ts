import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {RouterModule, Routes} from '@angular/router';
import { mainPageComponent } from './main-page';
import { NgxEchartsModule } from 'ngx-echarts';
import { ContactsComponent } from './contacts/contacts.component';
import { NumberOfUsersComponent } from './Number-of-Users/number-of-users';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ChartModule } from 'angular2-chartjs';
import { ECommerceProgressSectionComponent } from './progress-section/progress-section.component';
import {ECommerceLegendChartComponent} from './legend-chart/legend-chart.component'

const routes: Routes = [{
  path: '',
  component: mainPageComponent,
}]
@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    ThemeModule,
    ChartModule,
    NgxChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
   mainPageComponent,
   ContactsComponent,
   ECommerceLegendChartComponent,
   NumberOfUsersComponent,
   ECommerceChartsPanelComponent,
   ChartPanelHeaderComponent,
   ChartPanelSummaryComponent,
   OrdersChartComponent,
   ProfitChartComponent,
   ECommerceProgressSectionComponent,
  ],

})
export class mainPageModule { }
