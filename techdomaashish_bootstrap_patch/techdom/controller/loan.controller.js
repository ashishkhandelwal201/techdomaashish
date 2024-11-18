import {loanModel} from '../utils/import.js'



class LoanController{
        async getApplyforloan(req,res){
            const user_id = req.params.user_id
            console.log(req.userData.name)
            const allLoans = await loanModel.fetchLoanByUserId(user_id)
            res.render('applyforloan' , { user_id  , user_name : req.userData.name, allloans : allLoans})
        }
        async postApplyforloan(req,res){
            try{
                let amount_required = req.body.amount_required ? req.body.amount_required : ""
                let user_id = req.params.user_id ? req.params.user_id : 1
                let response = {}
                const allLoans = await loanModel.fetchloans()
                let id = allLoans.length >= 0 ?  allLoans.length + 1 : 1
                let input = { id , user_id , amount_required , status : "pending" , created_at :  new Date()}
                
                const insertBlogAck = await loanModel.insertLoan(input)
                console.log("insertBlogAck")
                console.log(insertBlogAck)
                if(!insertBlogAck){
                    response.statusCode = 504;
                    response.errorMsg = "Something_Went_wrong";
                    response.message = "something went wrong on server";
                    return res.json(response);
                }
                response.statusCode = 201
                response.status = `Success`
                response.message = `loan inserted successfully`
                // return res.json(response)
                return res.redirect(`/apply-for-loan/${user_id}`)

            }catch(er){
                console.log(`Error in blog.controller : ${er}`)
            }
    }
    
    



}

export default new LoanController
