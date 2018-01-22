import { InventoryComponent } from './inventory.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { InventoryItemDetailComponent } from './inventory-item-detail/inventory-item-detail.component';
import { InboundReceiptTableComponent } from './inbound-receipt-table/inbound-receipt-table.component';
import { InboundReceiptDetailComponent } from './inbound-receipt-detail/inbound-receipt-detail.component';
import { OutboundReceiptTableComponent } from './outbound-receipt-table/outbound-receipt-table.component';
import { OutboundReceiptDetailComponent } from './outbound-receipt-detail/outbound-receipt-detail.component';

export const inventoryRoutes = [{
	path: '',
	component: InventoryComponent,
	children: [
		{ path: '', redirectTo: 'inventorytable/page/1', pathMatch: 'full' },
		{ path: 'inventory-table/page/:page', component: InventoryTableComponent },
		{ path: 'inventory-item-detail/item-id/:item-id', component: InventoryItemDetailComponent },
		{ path: 'inbound-receipt-table/page/:page', component: InboundReceiptTableComponent },
		{ path: 'inbound-receipt-detail/receipt-no/:receipt-no', component: InboundReceiptDetailComponent },
		{ path: 'outbound-receipt-table/page/:page', component: OutboundReceiptTableComponent },
		{ path: 'outbound-receipt-detail/receipt-no/:receipt-no', component: OutboundReceiptDetailComponent }
	]
}];
