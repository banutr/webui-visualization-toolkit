import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BootstrapComponent } from './bootstrap.component';
import { MapChartModule } from '../components/map-chart/map-chart-module'
import { DonutChartModule } from '../components/donut-chart/donut-chart-module'
import { RadialChartModule } from '../components/radial-chart/radial-chart-module'
import { BootstrapService } from './bootstrap.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [BrowserModule, HttpModule, MapChartModule, DonutChartModule, RadialChartModule],
  declarations: [BootstrapComponent],
  providers: [BootstrapService],
  bootstrap: [BootstrapComponent]
})
export class BootstrapModule {
}
