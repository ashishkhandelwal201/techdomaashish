import { db } from '../utils/import.js'



const userModel = {
    checkEmail : async(username) => {
        try{
            const userEmailAck = await db.query(`select * from user where username = ? AND is_deleted = 0` , [username])
            return userEmailAck
        }catch(er){
            console.log(`Error in check username : ${er}`)
        }
    },
    fetchUsers : async() => {
        const usersList = await db.query(`select * from user`)
        return usersList
    },
    insertUser : async(userData) => {
        try{
        const {name , username , password , status , role , id , is_deleted} = userData
        const insertUser = await db.query(`insert into user(id , name , username ,  password , role  , is_deleted) values(?,?,?,?,?,?)` , [id , name , username , password , role  , is_deleted ])
        return insertUser
    }catch(er){
        console.log(`Error in check username : ${er}`)
    }
    },

}
export default userModel