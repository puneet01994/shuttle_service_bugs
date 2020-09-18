import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../../../../Utils/index";
import CardsUI from "../CardsUI";
import DriverStatusUI from "../DriverStatusUI";
import StatusTableUI from "../StatusTableUI";
import VehicleHavingTrips from "../VehicleHavingTrips";

import Home from "../Home";

import HomeUI from "../HomeUI";
import TableUI from "../TableUI";
import Enzyme from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter(),
});

const setUp = (props = {}) => {
  const component = shallow(<CardsUI {...props} />);
  return component;
};

const setUp1 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Home store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};


const setUp2 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<TableUI store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};
describe("HomUI Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      status: 1,
      status1: 1,
      status2: 2,
      status3: 1
    };
    wrapper = setUp1(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "HomeUI");
    expect(component.length).toBe(1);
  });
  it("selected table ", () => {
    const data=2;
    const classInstance = wrapper.instance();
    classInstance.selectedTable(data);
    const newState=classInstance.state.value;
    const newState1=classInstance.state.isLoading;
    expect(newState).toBe(2);
    expect(newState1).toBe(false);
  });
  // it("component will recieve props ", () => {
  //   const nextProps={status1:1,isLoading:false};
  //   const classInstance = wrapper.instance();
  //   classInstance.componentWillReceiveProps(nextProps);  
  //   const newState=classInstance.state.isLoading;
  //   expect(newState).toBe(false);
  // });
});



describe("Table UI Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      status: [],
      status1: [],
      status2: []
    };
    wrapper = setUp2(initialState);
  });


  it("StatusTableUI ", () => {
    wrapper.setProps({value:1})
    const component = findByTestAtrr(wrapper, "StatusTableUI");
    expect(component.length).toBe(1);
  });

  it("DriverStatusUI ", () => {
    wrapper.setProps({value:2})
    const component = findByTestAtrr(wrapper, "DriverStatusUI");
    expect(component.length).toBe(1);
  });

  it("VehicleHavingTripsUI ", () => {
    wrapper.setProps({value:3})
    const component = findByTestAtrr(wrapper, "VehicleHavingTripsUI");
    expect(component.length).toBe(1);
  });

});














describe("Home  Component", () => {
  describe("Data Recieved", () => {
    let wrapper,mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();

      const props = {
        isLoading: false,

        selectedTable: mockFunc,
        value: "1",
        status: "2",
        status1: "3",
        status2: "4",
        status3: "5"
      };
      wrapper = shallow(<HomeUI {...props} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "cards");
      expect(table.length).toBe(1);
    });


  it("Should emit callback on click event", () => {
    const button = findByTestAtrr(wrapper, "selectBtn");
    button.simulate("click");
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
  it("Should emit callback on click event", () => {
    const button = findByTestAtrr(wrapper, "selectBtn1");
    button.simulate("click");
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
  it("Should emit callback on click event", () => {
    const button = findByTestAtrr(wrapper, "selectBtn2");
    button.simulate("click");
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true
      };

      wrapper = shallow(<HomeUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Card Component", () => {
  describe("Card Data Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        status: "Test Status",
        status1: "Test status 1",
        status2: "Test Status 2",
        status3: "Test Status 3"
      };
      wrapper = setUp(props);
    });

    it("Should render Main div Card Component", () => {
      const card = findByTestAtrr(wrapper, "CardComponent");
      expect(card.length).toBe(1);
    });

    it("Should render Upcoming Card data", () => {
      const card = findByTestAtrr(wrapper, "UpcomingCardData");
      expect(card.length).toBe(1);
    });

    it("Should render with upcoming card image", () => {
      const card = findByTestAtrr(wrapper, "UpcomingCardImage");

      expect(card.length).toBe(1);
    });

    it("Should render Employee Travelling data", () => {
      const card = findByTestAtrr(wrapper, "EmployeeTravellingCardData");
      expect(card.length).toBe(1);
    });

    it("Should render with Employee Travelling image", () => {
      const card = findByTestAtrr(wrapper, "EmployeeTravellingCardImage");

      expect(card.length).toBe(1);
    });

    it("Should render Completed Card data", () => {
      const card = findByTestAtrr(wrapper, "CompletedCardData");
      expect(card.length).toBe(1);
    });

    it("Should render with Completed Card image", () => {
      const card = findByTestAtrr(wrapper, "CompletedCardImage");

      expect(card.length).toBe(1);
    });

    it("Should render Total Trip data", () => {
      const card = findByTestAtrr(wrapper, "TotalTripCardData");
      expect(card.length).toBe(1);
    });

    it("Should render with Total Card image", () => {
      const card = findByTestAtrr(wrapper, "TotalCardImage");

      expect(card.length).toBe(1);
    });
  });
});

describe("Driver Status Table Component", () => {
  describe("Have data", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        status1: [
          {
            routeId: 9,
            driverId: "DL001",
            origin: "koramangala(Nineleaps)",
            name: "KSJ",
            destination: "whitefield(Wadhwani)",
            vehicleNumber: "KA05ME2022",
            tripTime: "18:15:00",
            tripStatus: "Ongoing"
          }
        ]
      };
      wrapper = shallow(<DriverStatusUI {...props} />);
    });

    it("Should render Main table div  ", () => {
      const table = findByTestAtrr(wrapper, "driverStatus");
      expect(table.length).toBe(1);
    });
    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "DriverStatusRow");
      expect(table.length).toBe(1);
    });
  });

  describe("Have no data", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        status1: []
      };
      wrapper = shallow(<DriverStatusUI {...props} />);
    });

    it("Should render Alert dialog  ", () => {
      const table = findByTestAtrr(wrapper, "NoOngoingTrip");
      expect(table.length).toBe(1);
    });
  });
});

describe(" Employee Status Table Component", () => {
  describe("Have data", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        status: [
          {
            routeId: 9,
            origin: "koramangala(Nineleaps)",
            destination: "whitefield(Tesco)",
            name: "Pradhumna",
            vehicleNumber: "KA05ME2022",
            employeeId: "NL001",
            tripTime: "18:15:00",
            tripStatus: "Ongoing"
          },
          {
            routeId: 9,
            origin: "koramangala(Nineleaps)",
            name: "Karthik S Jhingade",
            destination: "whitefield(Tesco)",
            vehicleNumber: "KA05ME2022",
            employeeId: "NL002",
            tripTime: "18:15:00",
            tripStatus: "Upcoming"
          }
        ]
      };
      wrapper = shallow(<StatusTableUI {...props} />);
    });

    it("Should render Main table div  ", () => {
      const table = findByTestAtrr(wrapper, "employeeStatus");
      expect(table.length).toBe(1);
    });
    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "EmpStatusRow");
      expect(table.length).toBe(2);
    });
  });

  describe("Have no data", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        status: []
      };
      wrapper = shallow(<StatusTableUI {...props} />);
    });

    it("Should render Alert Dialog  ", () => {
      const alert = findByTestAtrr(wrapper, "NoUpcomingTrip");
      expect(alert.length).toBe(1);
    });
  });
});

describe("Vehicle Having Trips Component", () => {
  describe("Have data", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        status2: [
          { driverId: "DL001", name: "KSJ", vehicleNumber: "KA05ME2022" },
          { driverId: null, name: null, vehicleNumber: "KA05ME2022" }
        ]
      };
      wrapper = shallow(<VehicleHavingTrips {...props} />);
    });

    it("Should render Main table div  ", () => {
      const table = findByTestAtrr(wrapper, "havingTrips");
      expect(table.length).toBe(1);
    });
    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "VehicleTipsrow");
      expect(table.length).toBe(2);
    });
  });

  describe("Have no data", () => {
    let wrapper;
    const props = {
      status2: []
    };
    beforeEach(() => {
      wrapper = shallow(<VehicleHavingTrips {...props} />);
    });

    it("Should render Alert Dialog  ", () => {
      const alert = findByTestAtrr(wrapper, "NoVehicleAssigned");
      expect(alert.length).toBe(1);
    });
  });
});
