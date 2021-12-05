import jwt_decode from "jwt-decode";

export const addToFollow = async (body) => {
  try {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const res = await fetch(`http://localhost:3001/follows/${decoded._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
