import {repaymentModel} from '../utils/import.js'



class repaymentController{
        async getRepayments(req,res){
            const loanid = req.params.loan_id
            const repaymentDetails = await repaymentModel.fetchRepaymentsById(loanid)
            
            return res.render("repayment",{"repaymentDetails":repaymentDetails , loanid})
        }

        async paidRepayments(req,res){
            const repaymentid = req.params.repayment_id
            const acknoOfPaid = await repaymentModel.makePayment(repaymentid)
            const loanid = req.params.loan_id
            return res.redirect(`/repayments/${loanid}`)
        }

}

export default new repaymentController