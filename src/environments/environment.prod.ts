const baseURL: string = 'assets/my-test-data/';

export const environment = {
  production: true,
  envName: 'prod',
  hmr: false,
  apiURL: {
    categories: baseURL + 'categories.json',
    customers: baseURL + 'customers.json',
    inboundDetails: baseURL + 'inbound-details.json',
    inboundRecords: baseURL + 'inbound-records.json',
    inventories: baseURL + 'inventories.json',
    inboundReceipt: baseURL + 'inbound-receipt.json',
    outReceipt: baseURL + 'outbound-receipt.json',
    outboundDetail: baseURL + 'outbound-detail.json',
    outboundRecords: baseURL + 'outbound-records.json',
    staffs: baseURL + 'staffs.json',
    vendors: baseURL + 'vendors.json',
    warehouses: baseURL + 'warehouses.json'
  }
};
