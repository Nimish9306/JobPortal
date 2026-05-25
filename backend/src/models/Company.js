import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  website: {
    type: String,
  },
  logo: {
    type: String,
  },
  location: {
    type: String,
  },
  
createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const Company = mongoose.model("Company", companySchema);

export default Company;