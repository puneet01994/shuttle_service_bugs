import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../../../../Utils/index";
import ContactusUI from "../ContactusUI";
import Contactus from "../Contactus";
import UpdateContactus from "../UpdateContactus";
import UpdateContactUI from "../UpdateContactUI";
import Enzyme from "enzyme";
import "jest-enzyme";
import Adapter from "enzyme-adapter-react-16";
import swal from "sweetalert";
jest.mock("sweetalert");

Enzyme.configure({
  adapter: new Adapter(),
});
const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Contactus store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

const setUp1 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<UpdateContactus store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("ContactUs UI Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      status: [],
      token: "",
      error: "",
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "Contactus");
    expect(component.length).toBe(1);
  });
  // it("component will recieve props ", () => {
  //   const nextProps = { status: [], isLoading: false };
  //   const classInstance = wrapper.instance();
  //   classInstance.componentWillReceiveProps(nextProps);
  //   const newState = classInstance.state.isLoading;
  //   expect(newState).toBe(false);
  // });


  it(" should call componentdidupdate", () => {
    const componentDidUpdate = jest.spyOn(
      wrapper.instance(),
      "componentDidUpdate"
    );
    const prevProps = {
      status: "",
    };
    wrapper.instance().componentDidUpdate(prevProps);
    expect(componentDidUpdate).toHaveBeenCalled();
  });

  it("handle check change", () => {
    const mockEvent = "DL003";
    const expected = {
      targetId: "DL003",
    };
    const classInstance = wrapper.instance();
    classInstance.handleCheckChange(mockEvent);
    const newState = classInstance.state.targetId;
    expect(newState).toBe(expected.targetId);
  });
});

describe("Contact Us Component", () => {
  describe("Data Recieved", () => {
    let wrapper, mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        val: 0,
        isLoading: false,
        status: [
          {
            name: "Sunil Kumarasdfg",
            contactNumber: "8861975910",
            emailId: "shuttleservice8@gmail.com",
          },
        ],
        targetId: "",
        enabledButton: true,

        handleCheckChange: mockFunc,
        handleTableChange: () => {},
      };
      wrapper = shallow(<ContactusUI {...props} />);
    });

    it("Should render Contact details ", () => {
      const table = findByTestAtrr(wrapper, "AdminContact");
      expect(table.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "cardbody");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<ContactusUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Update ContactUs UI Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some text",
        },
        {
          title: "Example title 2",
          body: "Some text",
        },
        {
          title: "Example title 3",
          body: "Some text",
        },
      ],
    };
    wrapper = setUp1(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "UpdateContact");
    expect(component.length).toBe(1);
  });
  it("handlechage", () => {
    const mockEvent = {
      target: {
        id: "name",
        value: "dival",
      },
    };
    const expected = {
      name: "dival",
    };
    const classInstance = wrapper.instance();
    classInstance.handleChange(mockEvent);
    expect(wrapper.state().name).toBe(expected.name);
  });
  it(" handleSubmit should call preventDefault", () => {
    const mockPreventDefault = jest.fn();
    swal.mockReturnValue(Promise.resolve(new Response(true)));

    const mockEvent = {
      preventDefault: mockPreventDefault,
    };
    wrapper.instance().submitHandle(mockEvent);
    expect(mockPreventDefault).toHaveBeenCalled();

    // const mockPreventDefault = jest.fn();
    // const historyMock = { push: jest.fn() };
    // const updateAdminContact=jest.fn()
    // wrapper.setProps({history:historyMock,updateAdminContact})

    // const mockEvent = {
    //   preventDefault: mockPreventDefault,
    // };
    // const string=["/dashboard/Contactus"]

    // wrapper.instance().submitHandle(mockEvent);
    // expect(mockPreventDefault).toHaveBeenCalled();
    // expect(historyMock.push.mock.calls[0]).toEqual(string);
  });

  it(" should call componentdidupdate", () => {
    const componentDidUpdate = jest.spyOn(
      wrapper.instance(),
      "componentDidUpdate"
    );
    const prevProps = {
      status: "",
    };
    wrapper.instance().componentDidUpdate(prevProps);
    expect(componentDidUpdate).toHaveBeenCalled();
  });

  it("componentWillUnmount should be called on unmount", () => {
    const componentWillUnmount = jest.spyOn(
      wrapper.instance(),
      "componentWillUnmount"
    );
    wrapper.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  });
});

describe("Update Contact Us Component", () => {
  describe("Data Recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        val: 0,
        isLoading: false,
        status: [
          {
            name: "Sunil Kumarasdfg",
            contactNumber: "8861975910",
            emailId: "shuttleservice8@gmail.com",
          },
        ],
        UpdateContact: {
          name: "",
        },
        targetId: "",
        enabledButton: true,

        handleCheckChange: () => {},
        handleTableChange: () => {},
      };
      wrapper = shallow(<UpdateContactUI {...props} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "UpdateAdmin");
      expect(table.length).toBe(1);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<UpdateContactUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});
