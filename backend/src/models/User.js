import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'recruiter', 'admin'],
    default: 'student',
  },
  resume: {
    type: String
  },
  profilePhoto: {
    type: String
  },
  isBanned: {
  type: Boolean,
  default: false
},
resetPasswordToken: {
  type: String
},
resetPasswordExpire: {
  type: Date
},
otp: {
  type: String
},

otpExpire: {
  type: Date
},
company: {

  type:
    mongoose.Schema.Types.ObjectId,

  ref: "Company",

}
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
