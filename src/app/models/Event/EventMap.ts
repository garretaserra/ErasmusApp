import {Feature} from './Feature';

export class EventMap {
    type: string;
    features: Feature[];

    constructor(type: string, features: Feature[]) {
        this.type = type;
        this.features = features;
    }
}
