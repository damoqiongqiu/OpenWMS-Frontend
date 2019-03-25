// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const baseURL: string = "mock-data/";

export const environment = {
  production: false,
  envName: "dev",
  hmr: false,
  apiURL: {
    categories: baseURL + "categories.json",
    customers: baseURL + "customers.json",
    inboundDetails: baseURL + "inbound-details.json",
    inboundRecords: baseURL + "inbound-records.json",
    inventories: baseURL + "inventories.json",
    inboundReceipt: baseURL + "inbound-receipt.json",
    outReceipt: baseURL + "outbound-receipt.json",
    outboundDetail: baseURL + "outbound-detail.json",
    outboundRecords: baseURL + "outbound-records.json",
    staffs: baseURL + "staffs.json",
    vendors: baseURL + "vendors.json",
    warehouses: baseURL + "warehouses.json"
  }
};
