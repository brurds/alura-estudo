const EmployeeDao = require('../datebase/EmployeeDao');
//const {connectionFactory} = require('../datebase/connectionFactory')

module.exports = function(app){

    app.get('/employees', function(req, resp){
        
        var connection = app.datebase.connectionFactory(); 
        var employeeDao = new EmployeeDao(connection); 
        employeeDao.list(function(err, result){
            if(err){
                resp.send(err);
                return;
            }
         resp.json(result);
        });        
    });
    app.get('/employees/employee/:id', function(req, resp){
        let id = req.params.id;
        var connection = app.datebase.connectionFactory(); 
        var employeeDao = new EmployeeDao(connection); 
        employeeDao.findID(id, function(err, result){
            if(err){
                resp.send(err);
                return;
            }
            resp.json(result);
        });        
    });
    app.put('/employees/employee/:id', function(req, resp){
        let employee = {};
        let id = req.params.id;
        employee.id = id;
        employee.name = 'update';
        var connection = app.datebase.connectionFactory();
        var employeeDao = new EmployeeDao(connection);
        employeeDao.update(employee, function(err, result){
            if (err){
                resp.send(err);
                return;
            }
            resp.send(employee);
        });
    });
    app.post('/employees/employee', function(req,resp){
        var employee = req.body;
        var connection = app.datebase.connectionFactory();
        var employeeDao = new EmployeeDao(connection);
        employeeDao.save(employee, function(err, result){
          if (err){ 
              resp.send(err);
              return;
          }else{
            resp.json(employee);
            console.log('employee cadastrado');
          }
        });    
    });
    app.delete('/employees/employee/:id', function(req,resp){
        let id = req.params.id;          
        var connection = app.datebase.connectionFactory();
        var employeeDao = new EmployeeDao(connection);
        employeeDao.delete(id, function(err, result){
            if (err){
                resp.send(err);
                return;
            }
            resp.send(result);
        });
    });
}
