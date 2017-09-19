import { Component, OnInit, Input } from '@angular/core';
import { MapData } from '../../interfaces/MapData'
import { BootstrapService } from '../../bootstrap/bootstrap.service';

declare var vega: any;
declare var vegaTooltip: any;

@Component({
    selector: 'donut-chart',
    templateUrl: 'donut-chart.component.html',
    providers: [BootstrapService]
})

export class DonutChartComponent implements OnInit {
    @Input() dataUrl: string;
    constructor(private myHttp: BootstrapService) {
        
            }

    public vegaInit(spec: any) {
        this.view1 = new vega.View(vega.parse(spec))
        .renderer('svg')  
        .initialize("#donutView") // initialize view within parent DOM container
        .hover()             // enable hover encode set processing
        .run();

        vegaTooltip.vega(this.view1);

    }

    
    specJSON: any;
    view1: any;
    

    ngOnInit() {
        this.myHttp.getChartData(this.dataUrl).then(
            data => {
                this.specJSON = data;
                this.vegaInit(this.specJSON);
            }
        );
     }
}