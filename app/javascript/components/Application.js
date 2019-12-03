import React from "react";
import Axios from "axios";
import Page from "./Page";

const csrfToken = document.querySelector("[name=csrf-token]").content;
Axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

export default function Application(props) {
  return <Page />;
}
