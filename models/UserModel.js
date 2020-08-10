import mongoose from 'mongoose';
import bcrpyt from "bcryptjs";

/* 
 * This could be added too but this is just the bare bones of what we need
 */
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 5, maxlength: 1024},
    addressOne: {type: String, required: true},
    addressTwo: {type: String, required: false},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true},
    role: {type: String, required: true},
    skill: {type: String, required: false},
    businessName: {type: String, required: false},
    businessWebsite: {type: String, required: false}
}, {
    timestamps: true,
});

// userSchema.pre('save', (next) => {
//     let user = this;
//     bcrypt.genSalt(10, function(err, salt) {
//         if(err) {
//             throw(err);
//         } else {
//             bycrypt.hash(user.password, salt, async function(err, hash){
//             if (err) {
//                 throw err;
//             } else {
//                 user.password = hash;
//             }
//             })
//         }
//     });
//     return next();
// });

export default mongoose.model('user', userSchema);
