"use client ";

import FormControls from "../form-controls";

const controls = [
  {
    name: "heading",
    placeholder: "Enter heading text",
    type: "text",
    label: "Enter heading text",
  },
  {
    name: "summary", // Corrected field name
    placeholder: "Enter career summary",
    type: "text",
    label: "Enter career summary",
  },
];

export default function AdminHomeView({ formData, setFormData, handelSaveData }) {
 
  return (
    <div className=" bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormControls
        controls={controls}
        formData={formData}
        setFormData={setFormData}
      />
      <button onClick={()=>handelSaveData('home')} className=" mt-[10px] border border-green-600 font-bold p-4 text-[16px]">
        Add Info
      </button>
    </div>
  );
}
