import axios from "axios";
import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
const newsLetterUrL = "https://www.course-api.com/cocktails-newsletter";

const validate = (data) => {
  const error = {};
  if (!data.name) error.name = "name is requierd";
  if (!data.lastName) error.lastName = "last name is requierd";
  if (!data.email) {
    error.email = "email is required";
  } else if (data.email !== "test@test.com") {
    error.email = "only test@test.com is allowed";
  }

  return error;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = validate(data);
  if (Object.keys(errors).length > 0) {
    Object.values(errors).forEach((msg) => {
      toast.error(msg, { position: "top-center" });
    });
    return null;
  }

  try {
    const res = await axios.post(newsLetterUrL, data);
    toast.success(res.data.msg, { position: "top-center" });
    return redirect("/");
  } catch (err) {
    console.error("API request failed:", err);

    throw new Response("Failed to submit newsletter", {
      status: err.response?.status || 500,
      statusText: err.response?.data?.msg || "Internal Server Error",
    });
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="POST" className="form">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our News Letter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" className="form-input" name="name" id="name" />
      </div>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
        />
      </div>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          defaultValue={"test@test.com"}
        />
      </div>
      <button
        className="btn btn-block"
        type="submit"
        style={{ marginTop: ".5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};
export default Newsletter;
