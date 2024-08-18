const express = require('express');
const router = express.Router();
const Authent = require('../middleware/auth')

//employee
const employeeController = require('../Controller/Employee_controller')
router.get('/api/employee',employeeController.getAllEmployee)
router.post('/api/employee',employeeController.createEmployee)
router.put('/api/employee/:id',employeeController.UpdateEmployee)
router.delete('/api/employee/:id',employeeController.deleteEmployee)
//leave
const leaveController = require('../Controller/leave_controller')

router.get('/api/leave/',Authent,leaveController.getAllLeaveForEmployee)
router.post('/api/leave',Authent,leaveController.createLeave)

router.put('/api/leave/:id',Authent,leaveController.updateLeave)
router.delete('/api/leave/:id',Authent,leaveController.deleteLeave)




//fileuploads
const fileUploading = require('../Controller/fileupload')
router.post('/api/fileupload',fileUploading.EmployeeProfile)
//user
 const user = require('../Controller/user_controller');
router.post('/api/login',user.UserLogin);
router.get('/api/user',Authent,user.getUser)



const leavefile=require('../Controller/leavefileupload')
router.post('/api/leavefileupload',Authent,leavefile.Leavefileupload)
const leaveapprove=require('../Controller/Leavepermit_controller')
router.get('/api/leavepermit',leaveapprove.getAllLeave)
router.put('/api/leavepermit/:id',leaveapprove.UpdateEmployee)
const attendanceController = require('../Controller/Attendance_controller');
router.post('/api/attendance/:employeeId', attendanceController.recordAttendance);





module.exports = router