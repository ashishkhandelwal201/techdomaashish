import { db } from '../utils/import.js'



const repaymentModel = {
    fetchRepayments : async() => {
        try{
            const repaymentList = db.query(`select * from repayment`)        
            return repaymentList
        }catch(er){
            console.log(`Error in repayment model : ${er}`)
        }
    },
    insertRepayments : async(input) =>{
        try{
            const {  id , loan_id ,splitedAmt, loanApproved , status } = input
            db.query(`insert into repayment(id, loan_id , repayment_date ,  amount_due , loan_approved , repayment_status) values (?,?,?,?,?,?)` , [id , loan_id , "2024-02-14 10:49:02" ,  splitedAmt , loanApproved , status])
            db.query(`insert into repayment(id, loan_id , repayment_date ,  amount_due , loan_approved , repayment_status) values (?,?,?,?,?,?)` , [id+1 , loan_id , "2024-02-21 10:49:02" ,  splitedAmt , loanApproved , status])
            db.query(`insert into repayment(id, loan_id , repayment_date ,  amount_due , loan_approved , repayment_status) values (?,?,?,?,?,?)` , [id+2 , loan_id , "2024-02-28 10:49:02" ,  splitedAmt , loanApproved , status])
        }catch(er){
            console.log(`Error in repayments : ${er}`)
        }
        
        
    },
    fetchRepaymentsById : async(loan_id) => {
        try{
            const repaymentList = db.query(`select * from repayment where loan_id = ${loan_id} AND loan_approved="approve"`)        
            return repaymentList
        }catch(er){
            console.log(`Error in repayment model : ${er}`)
        }
    },
    makePayment : async(repaymentid) => {
        try{
            const repaymentList = db.query(`update repayment set repayment_status="paid" where id = ${repaymentid}`)        
            return repaymentList
        }catch(er){

            console.log(`Error in repayment model : ${er}`)
        }
    },
    
    
}
export default repaymentModel