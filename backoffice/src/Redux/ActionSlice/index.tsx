import { createSlice } from "@reduxjs/toolkit";

interface ActionModel {
  actions: ActionsItems[];
}

interface ActionsItems {
  actions: any;
  actionId: number;
  actionName: string;
}

export const actionSlice = createSlice({
  name: "action",
  initialState: {
    actions: [
      {
        actionId: 18906,
        actionName: "View",
      },
      {
        actionId: 18910,
        actionName: "Create",
      },
      {
        actionId: 18909,
        actionName: "Edit",
      },
      {
        actionId: 18908,
        actionName: "Delete",
      },
    ],
  } as ActionModel,
  reducers: {},
});

export const {} = actionSlice.actions;
export default actionSlice.reducer;
