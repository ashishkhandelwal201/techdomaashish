import { db } from '../utils/import.js'



const loanModel = {
    fetchloans : async(condition) =>{
        let loanList
            loanList = db.query(`select user.name , loan.* from loan , user where user.id = loan.user_id`)        
            return loanList
        
    },

    fetchLoanById : async(loan_id) => {
        try{
            const loanById =  db.query(`select * from loan where id = ${loan_id}`)
            return loanById
        }catch(er){
            console.log(`Erron in loan model : ${er}`)
        }
    },

    fetchLoanByUserId : async(user_id) => {
        try{
            const loanByUserId =  db.query(`select * from loan where user_id = ${user_id}`)
            return loanByUserId
        }catch(er){
            console.log(`Erron in loan model : ${er}`)
        }
    },

    insertLoan : async(loanData) => {
        const {id,user_id,amount_required , status , created_at} = loanData
        const insertAck =  db.query(`insert into loan values(? ,? ,? ,? ,?)` , [id,user_id,amount_required , status , created_at])
        return insertAck
    },
    changeLoanState : async(loan_id) => {
        const acknoOfrepaymentLoan =  db.query(`update repayment set loan_approved="pending" where loan_id=${loan_id}`)

    }

}
export default loanModel