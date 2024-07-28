import { createSlice } from "@reduxjs/toolkit";

interface initialValues {
  formStatus: "create" | "edit";
  handlesubmitActionName: string;
  formName: string;
}

const initialState: initialValues = {
  formStatus: "create",
  handlesubmitActionName: "",
  formName: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormStatus: (state, action) => {
      state.formStatus = action.payload;
    },
    setFormName: (state, action) => {
      state.formName = action.payload;
    },
    setHandleSubmitActionName: (state, action) => {
      state.handlesubmitActionName = action.payload;
    },

    setClearFormsActions: (state) => {
      state.handlesubmitActionName = "";
      state.formName = "";
    },
  },
});

export const {
  setFormStatus,
  setFormName,
  setHandleSubmitActionName,
  setClearFormsActions,
} = formSlice.actions;

export default formSlice.reducer;
