import * as Yup from "yup";


const verificationSchema = Yup.object({
    matricNo: Yup.string().required("Matric no is required").min(3, "Matric no must be 3 characters min"),
    studentType: Yup.string().required("Student Type is required")
    })

export default verificationSchema;