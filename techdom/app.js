import * as imports from './utils/import.js';
import router  from './routes/router.js';

const app = imports.express()

app.use(imports.express.json())
app.use(imports.express.urlencoded( {extended : true}))
app.use(imports.cookieParser())



app.set('view engine' , 'ejs')
app.set('views' , './views')

app.use('/' ,router )
const PORT = process.env.PORT
app.listen(PORT , (er) => {
    er ? console.log(er) : console.log(`Server at http://localhost:${PORT}`)
})