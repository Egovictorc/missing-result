import * as Yup from "yup";


const verificationSchema = Yup.object({
    username: Yup.string().required("Username is required").min(2, "Username must be 2 characters min")
    })

export default verificationSchema;