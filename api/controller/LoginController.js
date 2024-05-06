import User from "../models/User.js";
import TokenVerify from "../middleware/TokenVerify.js";

class LoginController{
   
    async login(req, res){
        let {email, password} = req.body;
        let findData = await User.findOne({email: email});
        if(!findData){
            return res.json({emalError: 'Invalid email'});
        }else{
            let isMatch = await findData.comparePassword(password);
            if(!isMatch){
                return res.json({passwordError: 'Invalid password'});
            }else{
                let token = findData.generateToken();
                let role= 'admin';  
                let isLoggedIn=true; 
                return res.json({token: token,role:role,isLoggedIn:isLoggedIn});
            }
        }
    }

    async tokenVerify(req, res){
        let token = req.headers.authorization.split(" ")[1];
        let response = TokenVerify.verifyToken(token);
        if(response){
            return res.json({status: true});
        }else{
            return res.json({status: false});
        }
    }

}

export default LoginController;