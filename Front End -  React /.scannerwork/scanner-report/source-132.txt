import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../../../../Utils/index";
import CabHistoryUI from "../CabHistoryUI";
import CabRequestUI from "../CabRequestUI";
import UpdateCabRequestsUI from "../UpdateCabRequestUI";
import CabHistory from "../CabHistory";
import CabRequests from "../CabRequests";
import UpdateCabRequest from "../UpdateCabRequest";
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
  const wrapper = shallow(<CabRequests store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

const setUp1 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<CabHistory store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

const setUp2 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<UpdateCabRequest store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("CabHistory Component", () => {
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
    const component = findByTestAtrr(wrapper, "CabHistory");
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
      status1: "",
    };
    wrapper.instance().componentDidUpdate(prevProps);
    expect(componentDidUpdate).toHaveBeenCalled();
  });

  it("handle table change check pagesize 20", () => {
    const mockEvent = {
      target: {
        value: "20",
      },
    };
    const expected = {
      pageSize: "20",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().pageSize).toBe(expected.pageSize);
  });
 
 
  it("handle table change check pagesize 30", () => {
    const mockEvent = {
      target: {
        value: "30",
      },
    };
    const expected = {
      pageSize: "30",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().pageSize).toBe(expected.pageSize);
  });
  it("handle table change check pagesize 20", () => {
    const mockEvent = {
      target: {
        value: "40",
      },
    };
    const expected = {
      pageSize: "40",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().pageSize).toBe(expected.pageSize);
  });
  it("handle table change check pagesize 50", () => {
    const mockEvent = {
      target: {
        value: "50",
      },
    };
    const expected = {
      pageSize: "50",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().pageSize).toBe(expected.pageSize);
  });
  it("handle table change check sortBy employee_id", () => {
    const mockEvent = {
      target: {
        value: "employeeId",
      },
    };
    const expected = {
      sortBy: "employeeId",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().sortBy).toBe(expected.sortBy);
  });

  it("handle table change check next page", () => {
    wrapper.setState({ val: 1 });
    const mockEvent = {
      target: {
        id: "next",
      },
    };
    wrapper.setProps({ totalPages: 2 });

    const expected = { val: 1 };
    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });

  it("handle table change check next page at its limit", () => {
    const mockEvent = {
      target: {
        id: "next",
      },
    };
    wrapper.setProps({ totalPages: 2 });

    const expected = { val: 1 };
    wrapper.setState({ val: 0 });
    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });

  it("handle table change check prev page", () => {
    const mockEvent = {
      target: {
        id: "prev",
      },
    };
    wrapper.setState({ val: 0 });
    wrapper.setProps({ totalPages: 2 });
    const expected = { val: 0 };

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });

  it("handle table change check prev page at its limit", () => {
    const mockEvent = {
      target: {
        id: "prev",
      },
    };
    const expected = { val: 0 };

    wrapper.setState({ val: 1 });
    wrapper.setProps({ totalPages: 2 });

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });
  it("handle table change check prev page at its limit", () => {
    const mockEvent = {
      target: {
        id: "dival",
      },
    };

    const expected = { val: 1 };

    wrapper.setState({ val: 1 });
    wrapper.setProps({ totalPages: 3 });

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });

  it("handle event date ", () => {
    const event = {};
    const picker = {
      startDate: {
        _d: "Thu Apr 02 2020 00:00:00 GMT+0530 (India Standard Time)",
      },
      endDate: {
        _d: "Thu Apr 12 2020 00:00:00 GMT+0530 (India Standard Time)",
      },
    };
    const expected = { Date1: "2020-04-02", Date2: "2020-04-12" };
    wrapper.setState({ val: 0 });
    wrapper.instance().handleEvent(event, picker);
    expect(wrapper.state().Date1).toBe(expected.Date1);
    expect(wrapper.state().Date2).toBe(expected.Date2);
  });
});

describe("Cab History Table Component", () => {
  describe("Data Recieved", () => {
    let wrapper, wrapper1;
    beforeEach(() => {
      const props = {
        val: 0,
        isLoading: false,
        status: [
          {
            date: "2020-04-02",
            assignedRoute: null,
            driverContactNumber: null,
            assignedTiming: null,
            preferredTime: "20:30:00",
            destination: "BTM",
            name: "Nikita Kanifnath Ghule",
            vehicleNumber: null,
            employeeId: "NL003",
            driverName: null,
          },
        ],
        targetId: "",
        enabledButton: true,

        handleCheckChange: () => {},
        handleTableChange: () => {},
      };
      const props1 = {
        val: 0,
        isLoading: false,
        status: [
          {
            date: "2020-03-18",
            assignedRoute: "Hanumanthnagar-BTM",
            driverContactNumber: "1234567890",
            assignedTiming: "22:00:00",
            preferredTime: "23:00:00",
            destination: "Hanumanthnagar",
            name: "Nikita Kanifnath Ghule",
            vehicleNumber: "KA05MY9166",
            employeeId: "NL003",
            driverName: "Shuttle Service",
          },
        ],
        targetId: "",
        enabledButton: true,

        handleCheckChange: () => {},
        handleTableChange: () => {},
      };
      wrapper = shallow(<CabHistoryUI {...props} />);

      wrapper1 = shallow(<CabHistoryUI {...props1} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "NightCabHistory");
      expect(table.length).toBe(1);
    });

    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "CabHistoryRow");
      expect(table.length).toBe(1);
    });
    it("Should render table entries with data and  without data N/A ", () => {
      const table = findByTestAtrr(wrapper, "NA");
      expect(table.length).toBe(4);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<CabHistoryUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("CabRequests Component", () => {
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
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "CabRequests");
    expect(component.length).toBe(1);
  });
  it("handleChange1", () => {
    const mockEvent = "NL004";
    const expected = { employeeId: "NL004" };
    const classInstance = wrapper.instance();
    classInstance.handleChange1(mockEvent);
    expect(wrapper.state().employeeId).toBe(expected.employeeId);
  });
  it("handleChange2", () => {
    const mockEvent = "BTM";
    const expected = { destination: "BTM" };
    const classInstance = wrapper.instance();
    classInstance.handleChange2(mockEvent);
    expect(wrapper.state().destination).toBe(expected.destination);
  });

  it("Should open the modal", () => {
    const setState = { addModalShow: true };
    const classInstance = wrapper.instance();
    classInstance.addModalopen(setState);
    const newState = classInstance.state.addModalShow;
    expect(newState).toBe(true);
  });
  it(" handleSubmit should call preventDefault", () => {
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault,
    };
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
  });
  it("OnChange", () => {
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
    classInstance.onChange(mockEvent);
    expect(wrapper.state().name).toBe(expected.name);
  });
  // it("component will recieve props ", () => {
  //   const nextProps = { status: [], isLoading: false };
  //   const classInstance = wrapper.instance();
  //   classInstance.componentWillReceiveProps(nextProps);
  //   const newState = classInstance.state.isLoading;
  //   expect(newState).toBe(false);
  // });
  it("Should close the modal", () => {
    const setState = { addModalShow: false };
    const classInstance = wrapper.instance();
    classInstance.addModalclose(setState);
    const newState = classInstance.state.addModalShow;
    expect(newState).toBe(false);
  });
  it(" should call componentdidupdate", () => {
    const componentDidUpdate = jest.spyOn(
      wrapper.instance(),
      "componentDidUpdate"
    );
    const prevProps = {
      status1: "",
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

describe("Cab Requests Table Component", () => {
  describe("Data Recieved", () => {
    let wrapper, wrapper1, mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        val: 0,
        isLoading: false,
        status: [
          {
            assignedRoute: null,
            driverContactNumber: null,
            assignedTiming: null,
            preferredTime: "20:30:00",
            destination: "BTM",
            name: "Nikita Kanifnath Ghule",
            contactNumber: "9890982840",
            vehicleNumber: null,
            employeeId: "NL003",
            driverName: null,
          },
        ],
        targetId: "",
        enabledButton: true,

        handleCheckChange: mockFunc,
        handleTableChange: () => {},
      };
      const props1 = {
        val: 0,
        isLoading: false,
        status: [
          {
            assignedRoute: "BSK",
            driverContactNumber: "1234567890",
            assignedTiming: "20:30:00",
            preferredTime: "20:30:00",
            destination: "BSK",
            contactNumber: "8861975910",
            name: "Richa Ahuja",
            vehicleNumber: "HP483317",
            driverName: "kishore",
            employeeId: "NL007",
          },
        ],
        targetId: "NL007",
        enabledButton: true,

        handleCheckChange: () => {},
        handleTableChange: () => {},
      };
      wrapper = shallow(<CabRequestUI {...props} />);
      wrapper1 = shallow(<CabRequestUI {...props1} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "NightCabRequests");
      expect(table.length).toBe(1);
    });
    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "requestRow");
      expect(table.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "requestRow");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
    it("Should render table entries with data and  without data N/A ", () => {
      const table = findByTestAtrr(wrapper, "NA");
      expect(table.length).toBe(5);
    });
    it("Should render dropdown multiple destination ", () => {
      const table = findByTestAtrr(wrapper1, "destination");
      expect(table.length).toBe(1);
    });
    it("Should render dropdown multiple ids", () => {
      const table = findByTestAtrr(wrapper1, "empid");
      expect(table.length).toBe(1);
    });

    it("Should render edit button  ", () => {
      const table = findByTestAtrr(wrapper1, "editButton");
      expect(table.length).toBe(1);
    });
    it("Should render table in card  ", () => {
      const table = findByTestAtrr(wrapper1, "card");
      expect(table.length).toBe(1);
    });
  });

  describe("Data is not there ", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: false,
        status: [],
      };

      wrapper = shallow(<CabRequestUI {...props} />);
    });

    it("Should render a Alert ", () => {
      const table = findByTestAtrr(wrapper, "NoNightCabRequests");
      expect(table.length).toBe(1);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<CabRequestUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Update CabRequests Component", () => {
  let wrapper, mockFunc;
  const Eid = { state: { employeeId: "NL004" } };
  beforeEach(() => {
    mockFunc = jest.fn();
    const initialState = {
      updateNightCabById: mockFunc,
      submitHandle: mockFunc,
      createSelectItems1: mockFunc,
      status1: [
        {
          assignedRoute: "hsr-hello",
          driverContactNumber: "1234567890",
          assignedTiming: "20:34:00",
          preferredTime: "20:50:33",
          name: "Nikita Kanifnath Ghule",
          contactNumber: "9890982840",
          destination: "hsr",
          vehicleNumber: "hp986754",
          employeeId: "NL003",
          driverName: "sdfg",
        },
        {
          assignedRoute: "hsr-hello1",
          driverContactNumber: "1234567899",
          assignedTiming: "20:34:00",
          preferredTime: "20:50:33",
          name: "Nikita Kanifnath Ghuleee",
          contactNumber: "9890982840",
          destination: "hsr",
          vehicleNumber: "hp986754",
          employeeId: "NL004",
          driverName: "sdfg",
        },
      ],

      location: Eid,
    };

    wrapper = setUp2(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "UpdateCabRequests");
    expect(component.length).toBe(1);
  });
  it("handleChange", () => {
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
    expect(wrapper).not.toBe(null);
  });

  it("componentWillUnmount should be called on unmount", () => {
    const componentWillUnmount = jest.spyOn(
      wrapper.instance(),
      "componentWillUnmount"
    );
    wrapper.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  });

  it(" should call componentdidupdate", () => {
    const componentDidUpdate = jest.spyOn(
      wrapper.instance(),
      "componentDidUpdate"
    );
    const prevProps = {
      role: "DRIVER",
      gender: "MALE",
      contactNumber: "9455381887",
      name: "Nikhil Chaturvedi",
      emailId: "nikhil.chaturvedi@nineleaps.com",
      id: "DL005",
    };
    wrapper.instance().componentDidUpdate(prevProps);
    expect(componentDidUpdate).toHaveBeenCalled();
  });
  it("handleChange1", () => {
    const mockEvent = "BTM";
    const expected = { assignedRoutes: "BTM" };
    const classInstance = wrapper.instance();
    classInstance.handleChange1(mockEvent);
    expect(wrapper.state().assignedRoutes).toBe(expected.assignedRoutes);
  });
  it(" should call componentdidupdate", () => {
    const componentDidUpdate = jest.spyOn(
      wrapper.instance(),
      "componentDidUpdate"
    );
    const prevProps = {
      role: "DRIVER",
      gender: "MALE",
      contactNumber: "9455381887",
      name: "Nikhil Chaturvedi",
      emailId: "nikhil.chaturvedi@nineleaps.com",
      id: "DL005",
    };
    wrapper.instance().componentDidUpdate(prevProps);
    expect(componentDidUpdate).toHaveBeenCalled();
  });
});

describe("Update Cab Request Component", () => {
  describe("Data Recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: false,
        status1: [{}],
        status: [
          {
            gender: "MALE",
            contactNumber: "8123556722",
            name: "Aniruddha",
            emailId: "pradhum.guru@gmail.com",
            id: "DL003",
          },
          {
            gender: "FEMALE",
            name: "Shravan",
            contactNumber: "8861975910",
            emailId: "pradhumna.guru@gmail.com",
            id: "DL002",
          },
        ],
        targetId: "",
        enabledButton: true,
        UpdateCab: {
          name: "",
          employeeId: "",
          contactNumber: "",
          driverName: "",
          driverContactNumber: "",
          vehicleNumber: "",
          destination: "",
          assignedRoutes: "",
          assignedTiming: "",
        },
        submitHandle: () => {},
        handleChange: () => {},
        handleChange1: () => {},
      };
      wrapper = shallow(<UpdateCabRequestsUI {...props} />);
    });

    it("Should render update form  ", () => {
      const table = findByTestAtrr(wrapper, "UpdateCabRequests");
      expect(table.length).toBe(1);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<UpdateCabRequestsUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});
