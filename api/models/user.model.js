import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw1cFavf_FaeHFRaqvhhrhXD&ust=1699017668353000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJiXlZe0pYIDFQAAAAAdAAAAABAE",
    },
    
}, {timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;