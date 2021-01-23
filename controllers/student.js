const {response} = require('../helpers/response')
const {http} = require('../helpers/consts')
const {StudentModel} = require('../models/students')
var ObjectId = require('mongoose').Types.ObjectId;

const createStudent = async (req, res) => {
    console.log(req.body)
    if(!req.body.name) {
        response(req, res, http.httpStatusBadRequest, "the name is required", {})
        return;
    }
    let student = new StudentModel(req.body)
    try {
        await student.save()
        response(req, res, http.httpStatusOK, "Student created", student)

    } catch(error) {
        console.log(error)
        response(req, res, http.httpStatusInternalServerError, "Internal server error", {})
    }
}
const getAllStudents = async (req, res) => {
    try {
        let result = await StudentModel.find({})
        response(req, res, http.httpStatusOK, "Success", result)
    } catch(error) {
        console.log(error)
        response(req, res, http.httpStatusInternalServerError, "Internal server error", [])
    }
}

module.exports = {
    createStudent,
    getAllStudents,
}