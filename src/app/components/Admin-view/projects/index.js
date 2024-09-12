'use client '

import FormControls from "../form-controls";

const controls = [
    {
      name: "name",
      placeholder: "Project Name",
      type: "text",
      label: "Project Name",
    },
    {
      name: "technologies",
      placeholder: "Enter Technologies",
      type: "text",
      label: "Enter Technologies",
    },
    {
      name: "website",
      placeholder: "Website",
      type: "text",
      label: "Website",
    },
    {
      name: "github",
      placeholder: "Github",
      type: "text",
      label: "github",
    },
  ];
  export default function AdminProjectView({ formData, setFormData,handelSaveData }){
    return(
        <div className=" bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormControls
        controls={controls}
        formData={formData}
        setFormData={setFormData}
      />
      <button onClick={()=>handelSaveData('project')} className=" mt-[10px] border border-green-600 font-bold p-4 text-[16px]">
        Add Info
      </button>
    </div>
    )
}