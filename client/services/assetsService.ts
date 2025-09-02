//const BASE_URL = "https://localhost:44387";
const BASE_URL = "https://assets-2a2a.onrender.com";


export async function fetchCars() {
  const response = await fetch(`${BASE_URL}/assets/by-type/1`);
  if (!response.ok) throw new Error("Failed to fetch cars");
  return response.json();
}

export async function addCar(carData: any) {
  const response = await fetch(`${BASE_URL}/assets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carData),
  });
  if (!response.ok) throw new Error("Failed to add car");
  return response.json();
}