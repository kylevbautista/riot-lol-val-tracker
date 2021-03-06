import { toast } from "react-toastify";

export const loginUser = async (body) => {
  try {
    const res = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    const data = await res.json();
    toast.error(data.message);
    throw new Error(data.message);
  } catch (err) {
    console.log(err);
    toast.error(err);
    return { error: err };
  }
};
