import React from "react";
import { Form, useLoaderData, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

export const SearchForm = () => {
  const navigation = useNavigation();
  const { make } = useLoaderData();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form" method="get">
        <input
          type="search"
          name="make"
          className="form-input"
          defaultValue={make}
          placeholder="Search a car brand"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};
