import { Component } from '@angular/core';
import { MapDataClass } from '../classes/MapData';
import { BootstrapService } from './bootstrap.service';

@Component({
  selector: 'showcase',
  templateUrl:'bootstrap.component.html',
  providers: [BootstrapService]
})
export class BootstrapComponent  {
  mapJSON : MapDataClass[];
  charts : boolean[] = [false, false, false];
  constructor(private myHttp: BootstrapService) {
    
        }

      ngOnInit() {
        // this.myHttp.getChartData('../../assets/json/inventions.json')
        // .subscribe((mapData) => { this.mapJSON = mapData; console.log(this.mapJSON);});
        // // console.log(this.mapJSON);
    }

    radioChanged(selected: number) {
    this.charts = [false, false,false];
    this.charts[selected] = true;
    }
  }
