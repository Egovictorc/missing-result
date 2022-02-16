import axios from "axios";

const STUDENT_API = process.env.NEXT_PUBLIC_STUDENT_API;
class StudentService {
   saveStudent(formData: FormData) {
    return axios.post(`${STUDENT_API}`, formData)
   }

   findStudentByMatricno(matricno: number, password: string) {
        return axios.post(`${STUDENT_API}/login`, {
            matricno, password
        })
        // return axios.get(`${STUDENT_API}${matricno}?password=${password}`)
    }
   getStudentsCount() {
        return axios.get(`${STUDENT_API}/count`)
    }
    // async findStudentByMatricno(matricno: number, password: string) {
    //     const result = await fetch(`${STUDENT_API}${matricno}?password=${password}`)
    //     const student = await result.json();
    //     // console.log("student ", student)
    //     return student;
    // }
}

export default new StudentService();