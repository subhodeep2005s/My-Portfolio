"use client";

export default function FormControls({ controls, formData, setFormData }) {
  return (
    <>
      {controls.map((controlItem) => (
        <div key={controlItem.name} className="mb-4">
          <label className="block text-gray-700 text-sm mb-2 font-bold">
            {controlItem.label}
          </label>
          <input
            type={controlItem.type}
            placeholder={controlItem.placeholder}
            name={controlItem.name}
            id={controlItem.name}
            value={formData[controlItem.name]}
            onChange={(e) => {
              setFormData({
                ...formData,
                [controlItem.name]: e.target.value,
              });
            }}
            className="shadow border rounded w-full py-2 px-2 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
          />
        </div>
      ))}
    </>
  );
}
