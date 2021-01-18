//import students from '../dummy/students.js';
var fs = require('fs');
class UserController {
    // Get all students
    static getAllUsers(req, res) {
          //For test cases
          if(req.hasOwnProperty('testJsonFile'))
          {
            jsonFile = fs.readFile('/tests/testJSON/users/' + req["testJsonFile"], 'utf8', function (err, data) {
                  if (err) throw err;
                  data = JSON.parse(data);
            });
            return res.status(200).json({
                  jsonFile,
                  message: "All the users",
            });
          }
          else
          {
            return res.status(400).json({
                  message: "Users API not currently built, ensure request has attribute \'testJsonFile\' ",
            });
          }
    }
    // Get a single student
    static getSingleUser(req, res) {
      if(req.hasOwnProperty('testJsonFile'))
      {
            jsonFile = fs.readFile('/tests/testJSON/users/' + req["testJsonFile"], 'utf8', function (err, data) {
                  if (err) throw err;
                  data = JSON.parse(data);
            });
            const findUser = jsonFile.find(user => user.id === req.params.id);
            if (findStudent)
            {
                  return res.status(200).json({
                        user: findUser,
                        message: "Found single user record by id",
                  });
            }
            else
            {
                  return res.status(404).json({
                        message: "User record not found",
                  });
            }
      }
      else
      {
            return res.status(400).json({
                  message: "Users API not currently built, ensure request has attribute \'testJsonFile\' ",
            });
      }   
    }
}
export default UserController;