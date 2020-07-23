import mongoose from 'mongoose';


/* 
 * This could be added too but this is just the bare bones of what we need
 */
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 5, maxlength: 1024},
    address: {
        addressOne: {type: String, required: true},
        addressTwo: {type: String, required: false},
        city: {type: String, required: true},
        state: {type: String, required: true},
        zip: {type: String, required: true}
    },
    role: {type: String, required: true},
    skill: {type: Array, required: false},
    businessName: {type: String, required: false},
    businessWebsite: {type: String, required: false}
}, {
    timestamps: true,
});

export default mongoose.model('user', userSchema);