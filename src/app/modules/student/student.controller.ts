import { Request, Response } from "express";
import { StudentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {

    // *for student data create//
    try {
        const { student: studentData } = req.body; // * will call service function and send data//
        // * controller can only response and request handle//

        const result = await StudentService.createStudentInToDb(studentData);//* we get service data by call service function in this file//

        // * now send response 
        res.status(200).json({
            success: true,
            message: "student is create successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

// *for student data get//
const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentService.getStudentFromDb();
        // * now send response 
        res.status(200).json({
            success: true,
            message: "students are retrieved successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

// *get a single student data//
const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const result = await StudentService.getSingleStudentFromDb(studentId);

        res.status(200).json({
            success: true,
            message: "student is retrieved successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}


// * export this for access in route file

export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent
}