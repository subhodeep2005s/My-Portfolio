'use client '

import FormControls from "../form-controls";

const controls = [
    {
      name: "position",
      placeholder: "Position",
      type: "text",
      label: "Position",
    },
    {
      name: "company",
      placeholder: "Company",
      type: "text",
      label: "Company",
    },
    {
      name: "duration",
      placeholder: "Duration",
      type: "text",
      label: "Duration",
    },
    {
      name: "location",
      placeholder: "Location",
      type: "text",
      label: "Location",
    },
    {
      name: "jobprofile",
      placeholder: "Job Profile",
      type: "text",
      label: "Job Profile",
    },
  ];
  export default function AdminExperienceView({ formData, setFormData,handelSaveData }){
    return(
        <div className=" bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormControls
        controls={controls}
        formData={formData}
        setFormData={setFormData}
      />
      <button onClick={()=>handelSaveData('experience')} className=" mt-[10px] border border-green-600 font-bold p-4 text-[16px]">
        Add Info
      </button>
    </div>
    )
}