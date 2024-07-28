import { createSlice } from "@reduxjs/toolkit";

interface ModuleModel {
  modules: ModuleItems[];
}

interface ModuleItems {
  moduleId: number;
  moduleName: string;
}

export const moduleSlice = createSlice({
  name: "module",
  initialState: {
    modules: [
      {
        moduleId: 8001,
        moduleName: "Customer Order",
      },
      {
        moduleId: 8002,
        moduleName: "Driver Order",
      },
      {
        moduleId: 8003,
        moduleName: "Corporate Order",
      },
      {
        moduleId: 8004,
        moduleName: "Manage Drivers",
      },
      {
        moduleId: 8005,
        moduleName: "Pending Drivers",
      },
      {
        moduleId: 8006,
        moduleName: "Manage Corporate clients ",
      },
      {
        moduleId: 8007,
        moduleName: "Corporate clients invoice",
      },
      {
        moduleId: 8008,
        moduleName: "Manage customers",
      },
      {
        moduleId: 8009,
        moduleName: "Manage Payout",
      },
      {
        moduleId: 8010,
        moduleName: "Pending Payout",
      },
      {
        moduleId: 8011,
        moduleName: "Manage Support",
      },
      {
        moduleId: 8012,
        moduleName: "Manage Help Support",
      },
      {
        moduleId: 8013,
        moduleName: "Manage Report Support",
      },
      {
        moduleId: 8014,
        moduleName: "Manage Discount",
      },
      {
        moduleId: 8015,
        moduleName: "Manage Setting",
      },
      {
        moduleId: 8016,
        moduleName: "Manage User",
      },
      {
        moduleId: 8017,
        moduleName: "Client Report",
      },
      {
        moduleId: 8018,
        moduleName: "Driver Report",
      },
      {
        moduleId: 8019,
        moduleName: "Job Report",
      },
      {
        moduleId: 8020,
        moduleName: "Revenu Report",
      },
    ],
  } as ModuleModel,
  reducers: {},
});

export const {} = moduleSlice.actions;
export default moduleSlice.reducer;
