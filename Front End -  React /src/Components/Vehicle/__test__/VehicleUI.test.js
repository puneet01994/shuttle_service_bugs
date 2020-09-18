import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../../../../Utils/index";
import VehicleUI from "../VehicleUI";
import VehicleStatusUI from "../VehicleStatusUI";
import VehicleRoutesUI from "../VehicleRoutesUI";
import Vehicle from "../Vehicle";
import VehiceRoutes from "../VehicleRoutes";
import VehicleStatus from "../VehicleStatus";
import VehicleProfile from "../VehicleProfile";

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
  const wrapper = shallow(<Vehicle store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

const setUp1 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<VehiceRoutes store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

const setUp2 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<VehicleStatus store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

// const setUp3 = (initialState = {}) => {
//   const store = testStore(initialState);
//   const wrapper = shallow(<VehicleProfile store={store} />)
//     .childAt(0)
//     .dive();
//   return wrapper;
// };

// describe("vehicle Profile Component",()=>{
//   let wrapper;
//   beforeEach(()=>{
//    const props={

//    }

//   })
// })

describe("Vehicle UI Component", () => {
  let wrapper, mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const initialState = {
      deleteVehicleInfo: mockFunc,
      areYouSureBeforeDelete: mockFunc,

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
    const component = findByTestAtrr(wrapper, "Vehicle");
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
  // it("component will recieve props ", () => {
  //   const nextProps = { status1: [], isLoading: false };
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

  it("handle table change check sortBy vehicle number", () => {
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

  it("handle table change check sortBy vehicle model", () => {
    const mockEvent = {
      target: {
        value: "vehicleModel",
      },
    };
    const expected = {
      sortBy: "vehicleModel",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().sortBy).toBe(expected.sortBy);
  });

  it("handle table change check sortBy vehicle seats", () => {
    const mockEvent = {
      target: {
        value: "seats",
      },
    };
    const expected = {
      sortBy: "seats",
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
    wrapper.setProps({ vehicleInfoTotalpages: 2 });

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
    wrapper.setProps({ vehicleInfoTotalpages: 2 });

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
    wrapper.setProps({ vehicleInfoTotalpages: 1 });
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
    wrapper.setProps({ vehicleInfoTotalpages: 2 });
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
    wrapper.setProps({ vehicleInfoTotalpages: 3 });

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
    wrapper.setProps({ vehicleInfoTotalpages: 1 });
    const expected = { val: 0 };

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });
});

describe("Vehicle Table Component", () => {
  describe("Data Recieved", () => {
    let wrapper, wrapper1, mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        val: 0,
        isLoading: false,
        addModalShow: false,
        status1: [
          {
            gender: "MALE",
            contactNumber: "8123556722",
            name: "Aniruddha",
            vehicleNumber: "HP735640",
            emailId: "pradhum.guru@gmail.com",
            id: "DL003",
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
        addModalShow: false,
        status1: [
          {
            gender: "MALE",
            contactNumber: "8123556722",
            name: "Aniruddha",
            vehicleNumber: "HP735640",
            emailId: "pradhum.guru@gmail.com",
            id: "DL003",
          },
          {
            gender: "FEMALE",
            name: "Shravan",
            contactNumber: "8861975910",
            vehicleNumber: "HP735641",
            emailId: "pradhumna.guru@gmail.com",
            id: "DL002",
          },
        ],
        targetId: "HP735640",
        enabledButton: true,

        handleCheckChange: () => {},
        handleTableChange: () => {},
      };

      wrapper = shallow(<VehicleUI {...props} />);
      wrapper1 = shallow(<VehicleUI {...props1} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "VehicleInfo");
      expect(table.length).toBe(1);
    });
    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "vehicleInfoRow");
      expect(table.length).toBe(1);
    });

    it("Should render delete button  ", () => {
      const table = findByTestAtrr(wrapper1, "deleteButton");
      expect(table.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "vehicleInfoRow");
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

      wrapper = shallow(<VehicleUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Vehicle Status UI Component", () => {
  let wrapper, mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const initialState = {
      getStatusByDate: mockFunc,
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
    const component = findByTestAtrr(wrapper, "VehicleStatus");
    expect(component.length).toBe(1);
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
  // it("component will recieve props ", () => {
  //   const nextProps = { status: [], isLoading: false };
  //   const classInstance = wrapper.instance();
  //   classInstance.componentWillReceiveProps(nextProps);
  //   const newState = classInstance.state.isLoading;
  //   expect(newState).toBe(false);
  // });
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
  it("handle table change check sortBy Vehucle_number", () => {
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
  it("handle table change check sortBy route_id", () => {
    const mockEvent = {
      target: {
        value: "routeId",
      },
    };
    const expected = {
      sortBy: "routeId",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().sortBy).toBe(expected.sortBy);
  });
  it("handle table change check sortBy driver_id", () => {
    const mockEvent = {
      target: {
        value: "driverId",
      },
    };
    const expected = {
      sortBy: "driverId",
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

describe("Vehicle Status Table Component", () => {
  describe("Data Recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        val: 0,
        isLoading: false,
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

        handleCheckChange: () => {},
        handleTableChange: () => {},
      };
      wrapper = shallow(<VehicleStatusUI {...props} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "VehicleStatus");
      expect(table.length).toBe(1);
    });
    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "vehicleStatusRow");
      expect(table.length).toBe(2);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<VehicleStatusUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Vehicle Routes UI Component", () => {
  let wrapper, mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();

    const initialState = {
      routeid: [
        {
          route:
            "koramangala(Nineleaps)-hsr(Freight Tigers)-whitefield(Wadhwani)-whitefield(Tesco)",
          routeId: "R1",
          routeTimings: "09:00:00-09:30:00-10:00:00-10:30:01",
        },
        {
          routeId: "R2",
          route:
            "whitefield(Tesco)-whitefield(Wadhwani)-hsr(Freight Tigers)-koramangala(Nineleaps)",
          routeTimings: "11:00:00-11:30:00-12:00:00-12:30:00",
        },
      ],
    };
    wrapper = setUp1(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "VehicleRoutes");
    expect(component.length).toBe(1);
  });
  it(" handleSubmit should call preventDefault", () => {
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault,
    };
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
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
  it(" handleSubmit should call preventDefault", () => {
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault,
    };
    wrapper.instance().handleSubmit1(mockEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
  });
  it("Should close the modal", () => {
    const setState = { addModalShow: false };
    const classInstance = wrapper.instance();
    classInstance.addModalclose(setState);
    const newState = classInstance.state.addModalShow;
    expect(newState).toBe(false);
  });
  it("Should close the modal", () => {
    const setState = { addModalShow1: false };
    const classInstance = wrapper.instance();
    classInstance.addModalclose1(setState);
    const newState = classInstance.state.addModalShow1;
    expect(newState).toBe(false);
  });
  it("Should open the modal", () => {
    const setState = { addModalShow: true };
    const classInstance = wrapper.instance();
    classInstance.addModalopen(setState);
    const newState = classInstance.state.addModalShow;
    expect(newState).toBe(true);
  });
  it("Should open the modal", () => {
    const setState = { addModalShow1: true };
    const classInstance = wrapper.instance();
    classInstance.addModalopen1(setState);
    const newState = classInstance.state.addModalShow1;
    expect(newState).toBe(true);
  });
  // it("component will recieve props ", () => {
  //   const nextProps = { status1: [], isLoading: false };
  //   const classInstance = wrapper.instance();
  //   classInstance.componentWillReceiveProps(nextProps);
  //   const newState = classInstance.state.isLoading;
  //   expect(newState).toBe(false);
  // });
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
  it("handleSelectedItemsVehicle", () => {
    const mockEvent = {
      target: {
        value: "KA12DF6700",
      },
    };
    const expected = {
      vehicleNumber: "KA12DF6700",
    };
    const classInstance = wrapper.instance();
    classInstance.handleSelectedItemsVehicle(mockEvent);
    const newState = classInstance.state.vehicleNumber;
    expect(newState).toBe(expected.vehicleNumber);
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
  it("handle selected items route", () => {
    const mockEvent = {
      target: {
        value: "R1",
      },
    };
    wrapper.setProps({
      routeid: [
        {
          route:
            "koramangala(Nineleaps)-hsr(Freight Tigers)-whitefield(Wadhwani)-whitefield(Tesco)",
          routeId: "R1",
          routeTimings: "09:00:00-09:30:00-10:00:00-10:30:01",
        },
        {
          routeId: "R2",
          route:
            "whitefield(Tesco)-whitefield(Wadhwani)-hsr(Freight Tigers)-koramangala(Nineleaps)",
          routeTimings: "11:00:00-11:30:00-12:00:00-12:30:00",
        },
      ],
    });
    const handleSelectedItemsRoute = jest.spyOn(
      wrapper.instance(),
      "handleSelectedItemsRoute"
    );

    wrapper.instance().handleSelectedItemsRoute(mockEvent);
    expect(handleSelectedItemsRoute).toHaveBeenCalled();
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
  it("handle table change check sortBy vehicleNumber", () => {
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
  it("handle table change check sortBy vehicleModel", () => {
    const mockEvent = {
      target: {
        value: "vehicleModel",
      },
    };
    const expected = {
      sortBy: "vehicleModel",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().sortBy).toBe(expected.sortBy);
  });
  it("handle table change check sortBy seats", () => {
    const mockEvent = {
      target: {
        value: "seats",
      },
    };
    const expected = {
      sortBy: "seats",
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
    wrapper.setProps({ venRoutesTotalPages: 2 });

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
    wrapper.setProps({ vehRoutesTotalPages: 2 });

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
    wrapper.setProps({ vehRoutesTotalPages: 1 });
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
    wrapper.setProps({ vehRoutesTotalPages: 2 });

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
    wrapper.setProps({ vehRoutesTotalPages: 3 });

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
    wrapper.setProps({ vehRoutesTotalPages: 1 });
    const expected = { val: 0 };

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });
});

describe("Vehicle Routes Table Component", () => {
  describe("Data Recieved", () => {
    let wrapper, wrapper1, wrapper2, mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        val: 0,
        isLoading: false,
        addModalShow: false,
        status1: [
          {
            gender: "MALE",
            contactNumber: "8123556722",
            name: "Aniruddha",
            vehicleNumber: "HP735640",
            emailId: "pradhum.guru@gmail.com",
            id: "DL003",
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
        addModalShow: false,
        status1: [
          {
            gender: "MALE",
            contactNumber: "8123556722",
            name: "Aniruddha",
            vehicleNumber: "HP735640",
            emailId: "pradhum.guru@gmail.com",
            id: "DL003",
          },
          {
            gender: "FEMALE",
            name: "Shravan",
            contactNumber: "8861975910",
            vehicleNumber: "HP7356401",
            emailId: "pradhumna.guru@gmail.com",
            id: "DL002",
          },
        ],
        targetId: "DL002",
        enabledButton: true,

        handleCheckChange: () => {},
        handleTableChange: () => {},
      };
      const props2 = {
        val: 0,
        routeid: [
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
        vehicles: [
          { vehicleNumber: "KA05ME2022", vehicleModel: "Indica", seats: 4 },
          { vehicleModel: "Ritz", vehicleNumber: "KA41R8899", seats: 4 },
        ],
        isLoading: false,
        addModalShow: false,
        status1: [
          {
            gender: "MALE",
            contactNumber: "8123556722",
            name: "Aniruddha",
            vehicleNumber: "HP735640",
            emailId: "pradhum.guru@gmail.com",
            id: "DL003",
          },
          {
            gender: "FEMALE",
            name: "Shravan",
            contactNumber: "8861975910",
            vehicleNumber: "HP735640",
            emailId: "pradhumna.guru@gmail.com",
            id: "DL002",
          },
        ],
        targetId: "",
        enabledButton: true,

        handleCheckChange: () => {},
        handleTableChange: () => {},
      };
      wrapper = shallow(<VehicleRoutesUI {...props} />);

      wrapper1 = shallow(<VehicleRoutesUI {...props1} />);

      wrapper2 = shallow(<VehicleRoutesUI {...props2} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "VehicleRoutes");
      expect(table.length).toBe(1);
    });
    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "vehicleRoutesRow");
      expect(table.length).toBe(1);
    });
    it("Should render delete button  ", () => {
      const table = findByTestAtrr(wrapper1, "deleteButton");
      expect(table.length).toBe(1);
    });
    it("Should render vehicles on drop down   ", () => {
      const table = findByTestAtrr(wrapper2, "vehicleno");
      expect(table.length).toBe(2);
    });
    it("Should render routeid on drop down   ", () => {
      const table = findByTestAtrr(wrapper2, "routeid");
      expect(table.length).toBe(2);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "vehicleRoutesRow");
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

      wrapper = shallow(<VehicleRoutesUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});
