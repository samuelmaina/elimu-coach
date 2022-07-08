import axios from "axios";

export async function requestConversion(data) {
  const res = await axios.post("/api/conversion/convert", data);
  return res.data;
}
