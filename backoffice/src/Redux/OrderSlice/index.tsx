import { createSlice } from "@reduxjs/toolkit";

export interface ServiceData {
  id: number;
  name: string;
  type: string;
  description: null;
  service_id: number;
}

export type StoreState = {
  pickup_location: coordinates;
  drop_location: coordinates;
  service: OrderService;
  question_answer: QuestionAnswer[];
  is_scheduled: boolean;
  is_accident: boolean;
  scheduled_time: string;
  scheduled_date: string;
  pickup_address: string;
  drop_address: string;
  urgency_type: URGENCY;
  service_type: SERVICE;
  local_dropOff_address?: google.maps.GeocoderResult;
  local_pickUp_address?: google.maps.GeocoderResult;
  is_dropDown: boolean;
  placed_order: PlaceOrderDetails | null;
  is_store_cleared: boolean;
  payemnt_data: null;
  co_client?: COClient;
  customer?: Customer;
};

export type Customer = {
  id: number;
  customer_name: string;
};

export type COClient = {
  id: number;
  business_name: string;
};

export type PlaceOrderDetails = {
  id: number;
  reference_no: string;
};

export type OrderService = {
  service_name: string;
  service_id: number;
};

export type coordinates = {
  lat: number;
  lng: number;
};

export type QuestionAnswer = {
  question: string;
  answer: string;
};

export enum SERVICE {
  TOWING = "TOWING",
  ROADSIDE = "ROADSIDE",
}

export enum URGENCY {
  STANDARD = "STANDARD",
  EXPRESS = "EXPRESS",
}

const initialState: StoreState = {
  drop_location: {
    lat: 0,
    lng: 0,
  },
  pickup_location: {
    lat: 0,
    lng: 0,
  },
  is_accident: false,
  is_scheduled: false,
  scheduled_date: "",
  scheduled_time: "",
  service: {
    service_name: "",
    service_id: NaN,
  },
  question_answer: [],
  drop_address: "",
  pickup_address: "",
  urgency_type: URGENCY.STANDARD,
  service_type: SERVICE.TOWING,
  local_dropOff_address: undefined,
  local_pickUp_address: undefined,
  is_dropDown: false,
  placed_order: null,
  is_store_cleared: false,
  payemnt_data: null,
  co_client: undefined,
  customer: undefined,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearSchedule(state) {
      state.is_scheduled = false;
      state.scheduled_date = "";
      state.scheduled_time = "";
    },
    setServiceType(state, action: { payload: SERVICE }) {
      state.service_type = action.payload;
    },
    setScheduledDate(state, action: { payload: string }) {
      state.scheduled_date = action.payload;
    },
    setScheduledTime(state, action: { payload: string }) {
      state.scheduled_time = action.payload;
    },
    setDropOffLocation(state, action: { payload: coordinates }) {
      state.drop_location = action.payload;
    },
    setPickUpLocation(state, action: { payload: coordinates }) {
      state.pickup_location = action.payload;
    },
    setDropOffAddress(state, action: { payload: string }) {
      state.drop_address = action.payload;
    },
    setPickUpAddress(state, action: { payload: string }) {
      state.pickup_address = action.payload;
    },
    setLocalDropOffAddress(
      state,
      action: { payload: google.maps.GeocoderResult }
    ) {
      state.local_dropOff_address = action.payload;
    },
    setLocalPickUpAddress(
      state,
      action: { payload: google.maps.GeocoderResult }
    ) {
      state.local_pickUp_address = action.payload;
    },
    setIsDropDown(state, action: { payload: boolean }) {
      state.is_dropDown = action.payload;
    },
    setQuestionAnswer(
      state,
      action: {
        payload: {
          service: OrderService;
          questionAnswer: QuestionAnswer[];
          urgency_type: URGENCY;
        };
      }
    ) {
      state.question_answer = action.payload.questionAnswer;
      state.service = action.payload.service;
      state.urgency_type = action.payload.urgency_type;
    },
    setIsAccident(state, action: { payload: boolean }) {
      state.is_accident = action.payload;
    },
    setService(state, action: { payload: OrderService }) {
      state.service = action.payload;
    },
    setPlacedOrder(state, action: { payload: PlaceOrderDetails }) {
      state.placed_order = action.payload;
    },
    setPaymentDetails(state, action: { payload: any }) {
      state.payemnt_data = action.payload;
    },
    setCoClientID(state, action: { payload: COClient }) {
      state.co_client = action.payload;
    },
    setCustomerID(state, action: { payload: Customer }) {
      state.customer = action.payload;
    },
    clearCustomerAndCoClientID(state) {
      state.co_client = undefined;
      state.customer = undefined;
    },
    clearOrder() {
      return initialState;
    },
  },
});

export const {
  clearSchedule,
  setServiceType,
  setScheduledDate,
  setScheduledTime,
  setDropOffLocation,
  setPickUpLocation,
  setDropOffAddress,
  setPickUpAddress,
  setLocalDropOffAddress,
  setLocalPickUpAddress,
  setIsDropDown,
  setQuestionAnswer,
  setIsAccident,
  setService,
  setPlacedOrder,
  setPaymentDetails,
  setCoClientID,
  setCustomerID,
  clearCustomerAndCoClientID,
  clearOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
