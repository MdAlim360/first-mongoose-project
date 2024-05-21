import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

// * schema for user name//
const userNameSchema = new Schema<UserName>({
    firstName: { type: String, required: true, },
    middleName: { type: String },
    lastName: { type: String, required: true, }
})

// *schema for guardian//
const guardianSchema = new Schema<Guardian>({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
})

// *schema for local guardian//
const localGuardianSchema = new Schema<LocalGuardian>({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
})

// * schema for student//
const studentSchema = new Schema<Student>({
    id: { type: String },
    name: userNameSchema,
    gender: ["male", "female"], // * this is mongoose enum type//
    dateOfBirth: String,
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: String,
    isActive: ["active", "blocked"]

});


// * now creating a model//
export const StudentModel = model<Student>('Student', studentSchema);