import express from "express";
import { StudentControllers } from "./student.controller";
const router = express.Router()

// * for data create//
router.post('/create-student', StudentControllers.createStudent) // * will call controller//

// *for get student data//
router.get('/', StudentControllers.getAllStudents)

// *for get a single student data//
router.get('/:studentId', StudentControllers.getSingleStudent)



// * export route for inset this route's data in mogodb//
export const StudentsRoutes = router // * router is object so can not export as a object//