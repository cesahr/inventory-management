import express from "express"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dashboardRoutes from "./router/dashboardRoutes"
import expenseRouter from "./router/expenseRoutes"
import usersRouter from "./router/usersRoutes"
import productsRouter from "./router/productsRoutes"


dotenv.config();
const app = express ()
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use("/dashboard" , dashboardRoutes)
app.use("/expense" , expenseRouter)
app.use("/users" , usersRouter)
app.use("/products" , productsRouter)

const port = Number(process.env.PORT) || 3001;
app.listen(port,"0.0.0.0", ()=>{
    console.log(`Servidor ejecutandoce en el puerto ${port}`);
})