const Student = require('../model/Student');

//to add new student
const studentCreate = async (req, res) => {
    const student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        state: req.body.state,
        address: req.body.address,
        rollNumber: req.body.rollNumber,
        fee: req.body.fee
    });
    
    try {
        const savedStudent = await student.save();
        console.log("bfsb");
        console.log(savedStudent);
        res.send(savedStudent);
    } catch (error){
        res.status(400).send(error);
    }
};

module.exports = {
    studentCreate
}
