import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../../../../Utils/index";
import Login from "../Login";
import Enzyme from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter(),
});
const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Login store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Login Component", () => {
  let wrapper;

  beforeEach(() => {

    const initialState = {
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "loginComponent");
    expect(component.length).toBe(1);
  });
  it("changeHandler",()=>{
    const mockEvent={
      target:{
        name:"name",
        value:"dival"
      }        
      };
      const expected={
        name:"dival"
      }
      
      const classInstance = wrapper.instance();
      classInstance.changeHandler(mockEvent);
      expect(wrapper.state().name).toBe(expected.name);
  });
  it(" handleSubmit should call preventDefault",async  () => {
    const mockPreventDefault = jest.fn();
    const historyMock = { push: jest.fn() };
    const isAuthenticated=true;
    const login=jest.fn()
    wrapper.setProps({history:historyMock,isAuthenticated,login})
    const mockEvent = {
      preventDefault: mockPreventDefault,
    };
    const string=["/dashboard"]

    await  wrapper.instance().handleSubmit(mockEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
    expect(historyMock.push.mock.calls[0]).toEqual(string);
  });
});
