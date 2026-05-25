import Company from "../models/Company.js";
// Create a new company
export const createCompany = async (req, res) => {
  try {
    const { name, description, location, website } = req.body;  
    const company = await Company.create({
      name,
      description,  
        location,
        website,
        createdBy: req.user._id
    });
    res.status(201).json({
      message: "Company created successfully",
      success: true,
      company
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

