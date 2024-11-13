import { express , userController , loanController ,adminController, repaymentController , verifyAuth } from '../utils/import.js'
const router = express.Router()

router.get('/' , (req,res) => res.render("index") )
router.get('/signup' , userController.getSignup)
router.get('/login' , userController.getLogin)
router.post('/signup' , userController.postSignup)
router.post('/login' , userController.postLogin)

router.get('/apply-for-loan/:user_id' , verifyAuth ,loanController.getApplyforloan )
router.post('/apply-for-loan/:user_id' , verifyAuth , loanController.postApplyforloan )

router.get('/verify-loan' ,verifyAuth, adminController.getApproveLoan )
router.get('/approve-loan/:loan_id' , verifyAuth , adminController.approveLoan )
router.get('/pending-loan/:loan_id' , verifyAuth  , adminController.pendingLoan )

router.get('/repayments/:loan_id' , verifyAuth  , repaymentController.getRepayments )
router.get('/paid-repayments/:loan_id/:repayment_id' , verifyAuth  , repaymentController.paidRepayments )

router.get('/logout'  , userController.logout )





export default router