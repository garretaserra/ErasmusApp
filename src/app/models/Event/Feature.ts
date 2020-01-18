import {Geometry} from './geometry';
import {Properties} from './Properties';

export class Feature {
    type: string;
    geometry: Geometry;
    properties: Properties;
}
