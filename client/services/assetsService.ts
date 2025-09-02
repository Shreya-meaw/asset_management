//const BASE_URL = "https://localhost:44387";
const BASE_URL = "https://assets-2a2a.onrender.com";


export async function fetchCars() {
  const response = await fetch(`${BASE_URL}/assets/by-type/1`);
  if (!response.ok) throw new Error("Failed to fetch cars");
  return response.json();
}

export async function addCar(carData: any) {
  carData.assetTypeId = 1;
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

export async function addProperty(property: any) {
  property.assetTypeId = 2;
  const response = await fetch(`${BASE_URL}/assets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(property),
  });
  if (!response.ok) throw new Error("Failed to add car");
  return response.json();
}

export async function fetchProperties() {
  const response = await fetch(`${BASE_URL}/assets/by-type/2`);
  if (!response.ok) throw new Error("Failed to fetch properties");
  return response.json();
}

export async function fetchLaptops() {
  const response = await fetch(`${BASE_URL}/assets/by-type/3`);
  if (!response.ok) throw new Error("Failed to fetch laptops");
  return response.json();
}

export async function addLaptop(laptopData: any) {debugger
  laptopData.assetTypeId = 3;
  const response = await fetch(`${BASE_URL}/assets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(laptopData),
  });
  if (!response.ok) throw new Error("Failed to add laptop");
  return response.json();
}