import { MapComponent } from './map.component';
import { GaodeMapComponent } from './gaode-map/gaode-map.component';
import { AmapComponent } from '../map/gaode-map/amap/amap.component';

export const mapRoutes = [{
	path: '',
	component: MapComponent,
	children: [
		{ path: '', redirectTo: 'map', pathMatch: 'full' },
		{ path: 'map', component: GaodeMapComponent }
	]
}];
