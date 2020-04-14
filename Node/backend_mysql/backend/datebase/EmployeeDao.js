function EmployeeDao(connection){
    this._connection = connection;
}

EmployeeDao.prototype.save = function(employee, callback){
    this._connection.query('INSERT INTO employee SET ?', employee, callback);
}
EmployeeDao.prototype.update = function(employee, callback){
    this._connection.query('UPDATE employee SET name =? where id=?', [employee.name, employee.id], callback);
}
EmployeeDao.prototype.list = function(callback){
    this._connection.query('SELECT * FROM employee ',callback);
}
EmployeeDao.prototype.findID = function(id,callback){
    this._connection.query('SELECT *FROM employee WHERE id =?',[id],callback);
}
EmployeeDao.prototype.delete = function(id,callback){
    this._connection.query('DELETE FROM employee WHERE id =?',[id],callback);
}
module.exports = EmployeeDao;