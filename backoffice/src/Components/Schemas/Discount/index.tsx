import * as yup from "yup";

const DiscountSchema = yup.object().shape({
  code: yup.string().required("Discount Code is required"),
  // discount: yup.number().required("Discount is required").min(0).max(100),
  max_discount: yup.number().optional().min(0).max(100),
  min_order_amount: yup.number().optional().min(0),
  max_usage: yup.number().optional().integer().min(0),
  per_user_limit: yup.number().optional().integer().min(0),
  start_date: yup.date().required("Start date is required"),
  end_date: yup.date().required("End date is required"),
  type: yup.string().required("Discount type is required"),
  status: yup.boolean().required("Status is required"),
});

export default DiscountSchema;
