import * as yup from "yup";

const payoutSchema = yup.object().shape({
    payoutDate: yup.date().required("Payout Date is Required"),
    payoutStatus: yup.string().required("Payout Status is Required"),
    paid_amount: yup.number().test("paid_amount", "Paid Amount is Required", (value) => {
        return value !== 0;
    }),
});


export default payoutSchema;
