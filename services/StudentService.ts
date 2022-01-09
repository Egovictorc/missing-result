import axios from "axios";

const STUDENT_API = process.env.NEXT_PUBLIC_STUDENT_API;
class StudentService {

   findStudentByMatricno(matricno: number, password: string) {
        return axios.get(`${STUDENT_API}${matricno}?password=${password}`)
    }
    // async findStudentByMatricno(matricno: number, password: string) {
    //     const result = await fetch(`${STUDENT_API}${matricno}?password=${password}`)
    //     const student = await result.json();
    //     // console.log("student ", student)
    //     return student;
    // }
}

export default new StudentService();