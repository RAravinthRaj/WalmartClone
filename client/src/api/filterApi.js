const BASE_URL = "http://localhost:3000";

export const setFilter = async (filterText) => {
  try {
    const response = await fetch(`${BASE_URL}/set-filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filter: filterText }),
    });

    if (!response.ok) throw new Error("Failed to set filter");

    const data = await response.json();
    return data.context;
  } catch (err) {
    console.error("Error in setFilter:", err);
    return null;
  }
};
export const searchFilteredProducts = async (query = "", context = "") => {
  try {
    const body = JSON.stringify({ query, context });

    const response = await fetch(`${BASE_URL}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to search products: ${response.status} ${errorText}`
      );
    }

    const data = await response.json();
    if (!Array.isArray(data.safeProducts)) {
      console.warn("Unexpected response format:", data);
      return [];
    }

    return data.safeProducts;
  } catch (err) {
    console.error("Error in searchFilteredProducts:", err.message);
    return [];
  }
};
