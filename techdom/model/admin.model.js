import { db } from '../utils/import.js'



const adminModel = {
    approveLoan : async(loanid) =>{
        try{
            const updateloanStatus = await db.query(`update loan set status = "approve" where id=${loanid}`)        

        console.log(updateloanStatus)
        return updateloanStatus
        }catch(er){
            console.log(`Error in admin model ${er}`)
        }
        
        
    },
    pendingLoan : async(loanid) => {
        const updateloanStatus = await db.query(`update loan set status = "pending" where id=${loanid}`) 
        console.log(updateloanStatus)
        return updateloanStatus


    }
    
}
export default adminModel