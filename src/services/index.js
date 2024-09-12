export async function addData(currentTab, formData) {
  try {
    const response = await fetch(`/api/${currentTab}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Check if the response is okay
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response from server:", errorText);
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Server response:", result);
    return result;
  } catch (e) {
    console.log("Fetch error:", e);
    throw new Error('Failed to add data');
  }
}

export async function getData(currentTab) {
  try {
    const response = await fetch(`/api/${currentTab}/get`, {
      method: "GET",
    });

    // Check if the response is okay
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response from server:", errorText);
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Server response:", result);
    return result;
  } catch (e) {
    console.log("Fetch error:", e);
    throw new Error('Failed to get data');
  }
}
