import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

// *create student data in mongodb//
const createStudentInToDb = async (student: Student) => {
    // *now run a query on StudentModel//
    const result = await StudentModel.create(student);
    return result;
}

// * get students from mongodb//
const getStudentFromDb = async () => {
    const result = await StudentModel.find();
    return result;
}

// * get a student from mongodb//
const getSingleStudentFromDb = async (id: string) => {
    const result = await StudentModel.findOne({ id });
    return result;
}

// * now we will send this in controller//
export const StudentService = {
    createStudentInToDb,
    getStudentFromDb,
    getSingleStudentFromDb
}