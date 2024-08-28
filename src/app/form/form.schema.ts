import * as Yup from "yup";

export const formSchema = Yup.object({
    amount: Yup.number().required("This field is required").typeError("This field is required").min(1, "Should be greater than zero"),
    term: Yup.number().required("This field is required").typeError("This field is required").min(1, "Should be greater than zero"),
    interest: Yup.number()
        .required("This field is required")
        .typeError("This field is required")
        .min(1, "Should be greater than zero")
        .max(100, "Should be less than or equal to 100"),
    type: Yup.string().required("This field is required"),
});
