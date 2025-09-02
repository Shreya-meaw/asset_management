export async function fetchCars() {
  const response = await fetch("https://assets-2a2a.onrender.com/assets/by-type/1");
  //const response = await fetch("https://localhost:44387/assets/by-type/1");
  if (!response.ok) throw new Error("Failed to fetch cars");
  return response.json();
}