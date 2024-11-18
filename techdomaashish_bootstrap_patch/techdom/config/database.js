import { mysql , util , env } from '../utils/import.js'
env.config()

// Implement the singleton here
class DBInstance{
    constructor(){
        if(DBInstance.instance){
            return DBInstance.instance
        }
        
        this.pool = mysql.createPool({
            host : process.env.host,
            user :  process.env.user, 
            password : process.env.db_password,
            database : process.env.database
   
        })        
        this.pool.query = util.promisify(this.pool.query);
        DBInstance.instance = this
}
getInstance(){
    return this.pool
}
}
const DBobj = new DBInstance()
const pool=DBobj.getInstance()
export default pool