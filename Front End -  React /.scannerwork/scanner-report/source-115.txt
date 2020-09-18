import { newAcceessToken, errorHandler, successHandler } from "../httpService";
import axios from "axios";
import moxios from "moxios";
import swal from "sweetalert";
jest.mock("sweetalert");

jest.mock("axios");

test("should fetch users", () => {
  const token = {
    payload: "",
  };
  const originalRequest = "";

  const resp = { data: token, status: 200 };
  axios.post.mockResolvedValue(resp);

  axios.post.mockResolvedValue(resp);

  return newAcceessToken(originalRequest).then((data) =>
    expect("").toEqual(resp.data.payload)
  );
});

test("error handler", () => {
  const error = {
    response: {
      config: {
        url: "/Authorize",
        _retry: true,
      },
      data: {
        status: 401,
        message: "Unauthorized User",
        path: "/admin/addlocation",

        details: ["Enter area name with company name"],
      },
      status: 401,
    },
  };

  const abc = errorHandler(error);
  expect(abc).toMatchSnapshot();
});
