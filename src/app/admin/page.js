"use client";
import React, { useState } from "react";
import AdminHomeView from "../components/Admin-view/home";
import AdminAboutView from "../components/Admin-view/about";
import AdminExperienceView from "../components/Admin-view/experience";
import AdminProjectView from "../components/Admin-view/projects";
import AdminContactView from "../components/Admin-view/contact";
import AdminEducationView from "../components/Admin-view/education";
import { addData } from "@/services";

const initialHomeFormData = {
  heading: "",
  summary: ""
};

const initialAboutFormData = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};

const initialExperienceFormData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

const initialEducationFormData = {
  degree: "",
  year: "",
  college: "",
};

const initialProjectFormData = {
  name: "",
  website: "",
  technologies: "",
  github: "",
};

export default function AdminView() {
  const [curentSelectedTab, setCurentSelectedTab] = useState("home");
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [aboutViewFormData, setAboutViewFormData] = useState(initialAboutFormData);
  const [experienceViewFormData, setExperienceViewFormData] = useState(initialExperienceFormData);
  const [educationViewFormData, setEducationViewFormData] = useState(initialEducationFormData);
  const [projectViewFormData, setProjectViewFormData] = useState(initialProjectFormData);

  const MenuItems = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          handelSaveData={handelSaveData}
          setFormData={setHomeViewFormData}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          handelSaveData={handelSaveData}
          setFormData={setAboutViewFormData}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          handelSaveData={handelSaveData}
          setFormData={setExperienceViewFormData}
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          handelSaveData={handelSaveData}
          setFormData={setEducationViewFormData}
        />
      ),
    },
    {
      id: "project",
      label: "Project",
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          handelSaveData={handelSaveData}
          setFormData={setProjectViewFormData}
        />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      component: (
        <AdminContactView />
      ),
    }
  ];

  async function handelSaveData(){
    const dataMap = {
      home: homeViewFormData,
      about: aboutViewFormData, // Corrected here
      education: educationViewFormData,
      project: projectViewFormData,
      experience: experienceViewFormData
    };
    
    const response = await addData(curentSelectedTab, dataMap[curentSelectedTab]);
    console.log(response, 'response');
  }

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {MenuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`p-4 font-bold text-xl text-black ${curentSelectedTab === item.id ? 'border-b-2 border-red-500' : ''}`}
            onClick={() => setCurentSelectedTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-10 p-10">
        {MenuItems.map(item => item.id === curentSelectedTab ? item.component : null)}
      </div>
    </div>
  );
}
