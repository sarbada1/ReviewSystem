import express from 'express';
import userRoute from './userRoute.js';
import loginRoute from './loginRoute.js';
import RouteMiddleware from '../middleware/RouteMiddleware.js';


const auth=new RouteMiddleware();
const webRouter = express.Router();
webRouter.get('/', (req,res)=>{
    res.send("We are learning express")
});

webRouter.use('/user',userRoute);
webRouter.use('/login',loginRoute);

export default webRouter;