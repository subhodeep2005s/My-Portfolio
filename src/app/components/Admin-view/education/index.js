'use client '

import FormControls from "../form-controls";

const controls = [
    {
      name: "degree",
      placeholder: "Degree Name",
      type: "text",
      label: "Enter Degree Name",
    },
    {
      name: "year",
      placeholder: "Year",
      type: "text",
      label: "Year",
    },
    {
      name: "college",
      placeholder: "College Name",
      type: "text",
      label: "Enter College Name",
    },
  ];
export default function AdminEducationView({ formData, setFormData,handelSaveData }){
    return(
        <div className=" bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormControls
        controls={controls}
        formData={formData}
        setFormData={setFormData}
      />
      <button onClick={()=>handelSaveData('education')} className=" mt-[10px] border border-green-600 font-bold p-4 text-[16px]">
        Add Info
      </button>
    </div>
    )
}