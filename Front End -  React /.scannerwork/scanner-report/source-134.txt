import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../../../../Utils/index";
import LocationListUI from "../LocationListUI";
import RoutesUI from "../RoutesUI";
import TripUI from "../TripsUI";
import UpdateRoutesUI from "../UpdateRoutesUI";
import LocationList from "../LocationList";
import Routes from "../Routes";
import Trips from "../Trips";
import Updateroutes from "../UpdateRoutes";

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
  const wrapper = shallow(<LocationList store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

const setUp1 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Routes store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

const setUp2 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Trips store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

const setUp3 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Updateroutes store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Location List UI Component", () => {
  let wrapper, mockSubmit;
  beforeEach(() => {
    mockSubmit = jest.fn();
    const initialState = {
      postLocation: mockSubmit,
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
    const component = findByTestAtrr(wrapper, "LocationList");
    expect(component.length).toBe(1);
  });
  it("Should open the modal", () => {
    const setState = { addModalShow: true };
    const classInstance = wrapper.instance();
    classInstance.addModalopen(setState);
    const newState = classInstance.state.addModalShow;
    expect(newState).toBe(true);
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
    const mockEvent = {
      preventDefault: mockPreventDefault,
    };
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
  });


  it("Should close the modal", () => {
    const setState = { addModalShow: false };
    const classInstance = wrapper.instance();
    classInstance.addModalclose(setState);
    const newState = classInstance.state.addModalShow;
    expect(newState).toBe(false);
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
  it("delete", () => {
    const deletefunc = jest.spyOn(wrapper.instance(), "delete");
    swal.mockReturnValue(Promise.resolve(new Response(true)));

    const prevProps = {
      role: "DRIVER",
      gender: "MALE",
      contactNumber: "9455381887",
      name: "Nikhil Chaturvedi",
      emailId: "nikhil.chaturvedi@nineleaps.com",
      id: "DL005",
    };
    wrapper.instance().delete(prevProps);
    wrapper.setProps({ willDelete: true });
    expect(deletefunc).toHaveBeenCalled();
  });
});

describe("Location List Table Component", () => {
  describe("Data Recieved", () => {
    let wrapper, wrapper1, mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        status1: [{ location: "domlur(OLA)" }],

        handleCheckChange: mockFunc,
      };
      const props1 = {
        status1: [
          { location: "domlur(OLA)" },
          { location: "hsr(Freight Tigers)" },
          { location: "koramangala(Nineleaps)" },
        ],
        targetId: "domlur(OLA)",

        handleCheckChange: () => {},
      };
      wrapper = shallow(<LocationListUI {...props} />);
      wrapper1 = shallow(<LocationListUI {...props1} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "LocationList");
      expect(table.length).toBe(1);
    });
    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "locationlistRow");
      expect(table.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "locationlistRow");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });

    it("Should render delete button  ", () => {
      const table = findByTestAtrr(wrapper1, "deleteButton");
      expect(table.length).toBe(1);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<LocationListUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Routes UI Component", () => {
  let wrapper, mockSubmit;
  beforeEach(() => {
    mockSubmit = jest.fn();
    const initialState = {
      createSelectItems: mockSubmit,
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
    const component = findByTestAtrr(wrapper, "Routes");
    expect(component.length).toBe(1);
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
  it("onChange", () => {
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
  it(" handleSubmit should call preventDefault", () => {
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault,
    };
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
  });
  it("Should close the modal", () => {
    const setState = { addModalShow: false };
    const classInstance = wrapper.instance();
    classInstance.addModalclose(setState);
    const newState = classInstance.state.addModalShow;
    expect(newState).toBe(false);
  });
  it("Should open the modal", () => {
    const setState = { addModalShow: true };
    const classInstance = wrapper.instance();
    classInstance.addModalopen(setState);
    const newState = classInstance.state.addModalShow;
    expect(newState).toBe(true);
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
  it("handleChange", () => {
    const mockEvent = "BTM";
    const expected = { route: "BTM" };
    const classInstance = wrapper.instance();
    classInstance.handleChange(mockEvent);
    expect(wrapper.state().route).toBe(expected.route);
  });

  it("delete", () => {
    const deletefunc = jest.spyOn(wrapper.instance(), "delete");
    swal.mockReturnValue(Promise.resolve(new Response(true)));

    const prevProps = {
      role: "DRIVER",
      gender: "MALE",
      contactNumber: "9455381887",
      name: "Nikhil Chaturvedi",
      emailId: "nikhil.chaturvedi@nineleaps.com",
      id: "DL005",
    };
    wrapper.instance().delete(prevProps);
    wrapper.setProps({ willDelete: true });
    expect(deletefunc).toHaveBeenCalled();
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

  it("handle table change check pagesize 40", () => {
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

  it("handle table change check sortBy id", () => {
    const mockEvent = {
      target: {
        value: "id",
      },
    };
    const expected = {
      sortBy: "id",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().sortBy).toBe(expected.sortBy);
  });

  it("handle table change check sortBy name", () => {
    const mockEvent = {
      target: {
        value: "name",
      },
    };
    const expected = {
      sortBy: "name",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().sortBy).toBe(expected.sortBy);
  });

  it("handle table change check next page", () => {
    wrapper.setState({ val: 1 });
    const mockEvent = {
      target: {
        value: "Next",
      },
    };
    wrapper.setProps({ routeTotalPages: 2 });

    const expected = { val: 1 };
    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });

  it("handle table change check next page at its limit", () => {
    const mockEvent = {
      target: {
        value: "Next",
      },
    };
    wrapper.setProps({ routeTotalPages: 2 });

    const expected = { val: 1 };
    wrapper.setState({ val: 0 });
    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });

  it("handle table change check prev page", () => {
    const mockEvent = {
      target: {
        value: "Prev",
      },
    };
    wrapper.setState({ val: 0 });
    wrapper.setProps({ routeTotalPages: 1 });
    const expected = { val: 0 };

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });

  it("handle table change check prev page at its limit", () => {
    const mockEvent = {
      target: {
        value: "Prev",
      },
    };
    const expected = { val: 0 };

    wrapper.setState({ val: 1 });
    wrapper.setProps({ routeTotalPages: 2 });

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });
  it("handle table change check prev page at its limit", () => {
    const mockEvent = {
      target: {
        value: "Prev",
      },
    };

    const expected = { val: 1 };

    wrapper.setState({ val: 2 });
    wrapper.setProps({ routeTotalPages: 3 });

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });

  it("handle table change check prev page", () => {
    const mockEvent = {
      target: {
        value: "jai",
      },
    };
    wrapper.setState({ val: 0 });
    wrapper.setProps({ routeTotalPages: 1 });
    const expected = { val: 0 };

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });
});

describe("Routes Table Component", () => {
  describe("Data Recieved", () => {
    let wrapper, wrapper1, mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        routesArr: [{}],
        status1: [
          {
            route:
              "koramangala(Nineleaps)-hsr(Freight Tigers)-whitefield(Wadhwani)-whitefield(Tesco)",
            routeId: "R1",
            routeTimings: "09:00:00-09:30:00-10:00:00-10:30:00",
          },
        ],

        handleCheckChange: mockFunc,
      };

      const props1 = {
        routesArr: [{}],

        status1: [
          {
            route:
              "koramangala(Nineleaps)-hsr(Freight Tigers)-whitefield(Wadhwani)-whitefield(Tesco)",
            routeId: "R1",
            routeTimings: "09:00:00-09:30:00-10:00:00-10:30:00",
          },
          {
            routeId: "R2",
            route:
              "whitefield(Tesco)-whitefield(Wadhwani)-hsr(Freight Tigers)-koramangala(Nineleaps)",
            routeTimings: "11:00:00-11:30:00-12:00:00-12:30:00",
          },
        ],
        targetId: "R2",

        handleCheckChange: () => {},
      };
      wrapper = shallow(<RoutesUI {...props} />);
      wrapper1 = shallow(<RoutesUI {...props1} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "Route");
      expect(table.length).toBe(1);
    });
    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "routesRow");
      expect(table.length).toBe(1);
    });

    it("Should render delete button  ", () => {
      const table = findByTestAtrr(wrapper1, "deleteButton");
      expect(table.length).toBe(1);
    });
    it("Should render edit button  ", () => {
      const table = findByTestAtrr(wrapper1, "editButton");
      expect(table.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "routesRow");
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

      wrapper = shallow(<RoutesUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Trips Table UI Component", () => {
  let wrapper, mockFunc;

  beforeEach(() => {
    mockFunc = jest.fn();
    const initialState = {
      getTripByDate: mockFunc,
      totalPages: 2,
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
    wrapper = setUp2(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "Trips");
    expect(component.length).toBe(1);
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
  it("handle table change check pagesize 20", () => {
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
  it("handle table change check sortBy name", () => {
    const mockEvent = {
      target: {
        value: "name",
      },
    };
    const expected = {
      sortBy: "name",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().sortBy).toBe(expected.sortBy);
  });
  it("handle table change check sortBy vehicle_number", () => {
    const mockEvent = {
      target: {
        value: "vehicleNumber",
      },
    };
    const expected = {
      sortBy: "vehicleNumber",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().sortBy).toBe(expected.sortBy);
  });
  it("handle table change check sortBy trip_time", () => {
    const mockEvent = {
      target: {
        value: "tripTime",
      },
    };
    const expected = {
      sortBy: "tripTime",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().sortBy).toBe(expected.sortBy);
  });

  it("handle table change check sortBy date", () => {
    const mockEvent = {
      target: {
        value: "date",
      },
    };
    const expected = {
      sortBy: "date",
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

describe("Trips Table Component", () => {
  describe("Data Recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        status: [
          {
            route:
              "koramangala(Nineleaps)-hsr(Freight Tigers)-whitefield(Wadhwani)-whitefield(Tesco)",
            routeId: "R1",
            routeTimings: "09:00:00-09:30:00-10:00:00-10:30:00",
          },
          {
            routeId: "R2",
            route:
              "whitefield(Tesco)-whitefield(Wadhwani)-hsr(Freight Tigers)-koramangala(Nineleaps)",
            routeTimings: "11:00:00-11:30:00-12:00:00-12:30:00",
          },
        ],

        handleCheckChange: () => {},
      };
      wrapper = shallow(<TripUI {...props} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "Trips");
      expect(table.length).toBe(1);
    });
    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "tripRoutesRow");
      expect(table.length).toBe(2);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<TripUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Update Routes UI Component", () => {
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
    wrapper = setUp3(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "UpdateRoutes");
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

  it("componentWillUnmount should be called on unmount", () => {
    const componentWillUnmount = jest.spyOn(
      wrapper.instance(),
      "componentWillUnmount"
    );
    wrapper.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  });
  it(" handleSubmit should call preventDefault", () => {
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault,
    };
    swal.mockReturnValue(Promise.resolve(new Response(true)));

    wrapper.instance().submitHandle(mockEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
  });
  it("handleSelect", () => {
    const mockEvent = "BTM";
    const expected = {
      route: "BTM",
    };
    const classInstance = wrapper.instance();
    classInstance.handleSelect(mockEvent);
    expect(wrapper.state().route).toBe(expected.route);
  });
});

describe("Update Routes Component", () => {
  describe("Data Recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        status: [
          {
            route:
              "koramangala(Nineleaps)-hsr(Freight Tigers)-whitefield(Wadhwani)-whitefield(Tesco)",
            routeId: "R1",
            routeTimings: "09:00:00-09:30:00-10:00:00-10:30:00",
          },
          {
            routeId: "R2",
            route:
              "whitefield(Tesco)-whitefield(Wadhwani)-hsr(Freight Tigers)-koramangala(Nineleaps)",
            routeTimings: "11:00:00-11:30:00-12:00:00-12:30:00",
          },
        ],
        routesArr: [{}],
        updateRoute: {
          routeId: "",

          route: "",
          routeTimings: "",
          isLoading: true,
        },
        submitHandle: () => {},
        handlChange: () => {},

        handleSelect: () => {},
      };
      wrapper = shallow(<UpdateRoutesUI {...props} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "updateRoute");
      expect(table.length).toBe(1);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<UpdateRoutesUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});
