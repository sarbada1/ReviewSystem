import TokenVerify from "../middleware/TokenVerify.js";
import User from "../models/User.js";
import fs from "fs";

class UserController {

    async index(req, res) {
        let token = req.headers.authorization.split((" "))[1];
        let response = TokenVerify.verifyToken(token);
        let id = response.id;
        let role = response.role;
        if (role != 'admin') {
            const user = await User.findById(id);
            let users=[];
            users.push(user);
            return res.status(200).json(users);
        }
        else {
            const users = await User.find({_id:{$ne:id}});
            return res.status(200).json(users);
        }

    }
    async show(req, res) {
        let id = req.params.id;
        const user = await User.findById(id);
        return res.status(200).json(user);
    }
    async store(req, res) {
        let image = '';
        if (req.file) {
            image = req.file.filename;
        }
        const user = new User({ ...req.body, image });
        await user.save();
        res.status(201).json({ status: true, message: "User Created successfully" });
    }
    async update(req, res) {

    }
    async destroy(req, res) {
        let id = req.params.id;

        const user = await User.findById(id);

        if (user.image != '') {
            let image = user.image;

            let imagePath = `public/users/${image}`;
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({ status: true, message: "User Deleted successfully" });

    }

    async getProfile(req,res)
    {
        let token = req.headers.authorization.split((" "))[1];
        let response = TokenVerify.verifyToken(token);
    
        let id = response.id;
        const user = await User.findById(id);
        return res.status(200).json(user);
    }

}
export default UserController;