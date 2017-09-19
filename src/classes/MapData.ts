

interface MapDataInterface {
    countryCode: number;
    priorityAll: number;
    priorityApps: number;
    priorityGrants: number;
    expandAll: number;
    expandApps: number;
    expandGrants: number;
}

export class MapDataClass implements MapDataInterface {

    constructor(public countryCode: number, public priorityAll: number, public priorityApps: number,
        public priorityGrants: number, public expandAll: number, public expandApps: number, public expandGrants: number ) {

    }
}