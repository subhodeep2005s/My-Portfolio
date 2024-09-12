// import mongoose from "mongoose";

// const AboutSchema = new mongoose.Schema(
//   {
//     aboutme: String,
//     noofprojects: String,
//     yearofexperience: String,
//     noofclients: String,
//     skills: String,
//   },
//   { timestamps: true } // Automatically add createdAt and updatedAt fields
// );

// const About = mongoose.models.About || mongoose.model("About", AboutSchema);

// export default About;

import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    aboutme: String,
    noofprojects: String,
    yearofexperience: String,
    noofclients: String,
    skills: String,
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

const About = mongoose.models.About || mongoose.model("About", AboutSchema);

export default About;
