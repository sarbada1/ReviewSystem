import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location:
    {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    open_hours: {
        type: Date,
        required: true

    },
    close_hours: {
        type: Date,
        required: true

    },
    maps:{
        type: String,

    },
}, {
    versionKey: false,
});




restaurantSchema.methods.toJSON = function () {
    const obj = this.toObject();
    if (obj.image) {
        obj.image = `${process.env.PUBLIC_URL}/restaurant/${obj.image}`;
    } else {
        obj.image = `${process.env.PUBLIC_URL}/notfound.png`;
    }
    delete obj.password;
    return obj;
};






export default mongoose.model('Restaurant', restaurantSchema);

