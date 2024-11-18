import {adminModel , loanModel , repaymentModel} from '../utils/import.js'


class AdminContoller{
    async getApproveLoan(req,res){
        try{
            const allLoans = await loanModel.fetchloans()
            console.log(allLoans)
            console.log(req.userData)
            return res.render( "loanapproval", {allLoans})
            
        }catch(er){
            console.log(`Error in admin controler ${er}`)
        }
    }

    async approveLoan(req,res){
        try{
            const loan_id = req.params.loan_id
            const acknOfapprove = await adminModel.approveLoan(loan_id)
            const loanDetails =  await loanModel.fetchLoanById(loan_id)
            const totalAmt = loanDetails[0]['amount_required']
            const splitedAmt = (totalAmt / 3).toFixed(2)
            const allRepayments = await repaymentModel.fetchRepayments()
            let id = allRepayments.length >= 0 ?  allRepayments.length + 1 : 1
            const loanApproved = "approve"  ,  status = "pending"
            const input = { id ,   loan_id , splitedAmt , loanApproved , status }
            const acknoOfInsertRepay =  await repaymentModel.insertRepayments(input)
            return res.redirect('/verify-loan')
        }catch(er){
            console.log(`Error in admin controler ${er}`)
        }
    }

    async pendingLoan(req,res){
        const loan_id = req.params.loan_id
        const acknOfPending = await adminModel.pendingLoa(loan_id)
        return res.redirect('/verify-loan')

    }
}

export default new AdminContoller