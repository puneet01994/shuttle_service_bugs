import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import Layout from "./Components/Layout/Layout";
import Login from "./Components/Pages/Login";
import { findByTestAtrr } from "../Utils/index";
import { wrap } from "module";

const findNodeByTestId = (wrapper, testID) => {
  return wrapper.findWhere((node) => {
    return node.prop("testID") === testID;
  });
};
it("renders without crashing", () => {
  shallow(<App />);
});

describe("App ", () => {
  let wrapper, mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {};

    wrapper = shallow(<App {...props} />);
  });

  it("Should render Main table ", () => {
    const table = findByTestAtrr(wrapper, "App");
    expect(table.length).toBe(1);
  });

  it("Should render without errors", () => {
    const component = findNodeByTestId(wrapper, "login");
    const props = {};
    component.props().render(props);
  });
  it("Should render without errors", () => {
    const component = findNodeByTestId(wrapper, "layout");
    const props = {};
    component.props().render(props);
  });
});
