import { types } from "../../types";
import getReducer from "../getReducer";
import routeReducer from "../routeReducer";
import vehicleReducer from "../vehicleReducer";

import userReducer from "../userReducer";
import tripReducer from "../tripReducer";
import statusTableReducer from "../statusTableReducer";
import homePageCardReducer from "../homePageCardReducer";
import index from "../index";

const initialState = {
  riderid: [],
  driverid: [],
  employeeStatusid: [],
  routeid: [],
  adminContact: [],
  nightCabRequests: [
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
  nightCabHistory: {},

  cardDetails: {},

  TripsDetails: [],

  RouteInfo: [
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
  locationArray: [
    { location: "domlur(OLA)" },
    { location: "hsr(Freight Tigers)" },
    { location: "koramangala(Nineleaps)" },
    { location: "sarjapur(Uber)" },
    { location: "whitefield(Tesco)" },
  ],
  errorMsg: "",
  Vehicle_info: [
    { vehicleNumber: "KA05ME2022", vehicleModel: "Indica", seats: 4 },
    { vehicleNumber: "hp875643", vehicleModel: "fgh", seats: 5 },
  ],
  Vehicle_route: [
    {
      routeId: "R11",
      route:
        "koramangala(Nineleaps)-domlur(OLA)-yemlur(Landmark)-sarjapur(Uber)",
      vehicleNumber: "1234567890",
      id: 20,
      latestBookingDate: "2020-03-11",
    },

    {
      routeId: "R12",
      route:
        "koramangala(Nineleaps)-domlur(OLA)-yemlur(Landmark)-whitefield(tesco)",
      vehicleNumber: "1234567899",
      id: 21,
      latestBookingDate: "2020-03-12",
    },
  ],
  Vehicle_status: [],
  riderData: [
    {
      gender: "MALE",
      name: "Diva",
      contactNumber: "1234567890",
      emailId: "sehgaldival@gmail.com",
      id: "Nl87",
      managerId: "NL997",
    },

    {
      gender: "MALE",
      contactNumber: "9502027748",
      name: "Naveen Sai",
      emailId: "naveen.sai@nineleaps.com",
      managerId: "NL007",
      id: "NL006",
    },
  ],
  driverData: [
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
  employeeStatus: [
    {
      accountStatus: "Active",
      tripCancelCount: 0,
      name: "Karthik S Jhingade",
      employeeId: "NL002",
    },
    {
      accountStatus: "Active",
      tripCancelCount: 1,
      name: "Pradhumna",
      employeeId: "NL001",
    },
    {
      accountStatus: "Block",
      tripCancelCount: 1,
      name: "Nikita Kanifnath Ghule",
      employeeId: "NL003",
    },
  ],
  tokken: "",
  boolean: false,
  riderTotalPages: 1,
  driverTotalPages: 1,

  sendEmailMsg: "",
  bookingData: [],
  driverStatusData: [],
  vehicleHavingData: [],
};
//------------------------LOG OUT---------------------------------//

describe("LOG OUT", () => {
  it("Should return new state if receiving type", () => {
    const state = "";
    const newState = index(state, { type: types.LOG_OUT });
    expect(newState.state).toEqual(undefined);
  });
});

//--------------------------- GET REDUCER --------------------------- //

describe("getReducer GET_ROUTE_BY_ID", () => {
  it("Should return new state if receiving type", () => {
    const routeid = [];
    const newState = getReducer(initialState, {
      type: types.GET_ROUTE_BY_ID,
      payload: routeid,
      ...initialState,
    });
    expect(newState.routeid).toEqual(routeid);
  });
});
describe("routeReducer Error", () => {
  it("Should return error msg", () => {
    const error = "";
    const newState = getReducer(initialState, {
      type: types.ERROR,
      payload: error,
      ...initialState,
    });
    expect(newState.error).toEqual(error);
  });
});


describe("getReducer CLEAR_TARGET", () => {
  it("Should return new state if receiving type", () => {
    const routeid = [];
    const riderid = [];
    const driverid = [];
    const employeeStatusid = [];
    const adminContact = [];

    const newState = getReducer(initialState, {
      type: types.CLEAR_TARGET,
      payload: routeid,
      riderid,
      driverid,
      employeeStatusid,
      adminContact,
      ...initialState,
    });
    expect(newState.routeid).toEqual(routeid);
  });
});

describe("getReducer GET_EMP_BY_ID", () => {
  it("Should return new state if receiving type", () => {
    const employeeStatusid = [];
    const newState = getReducer(initialState, {
      type: types.GET_EMP_BY_ID,
      payload: employeeStatusid,
      ...initialState,
    });
    expect(newState.employeeStatusid).toEqual(employeeStatusid);
  });
});

describe("getReducer GET_DRIVER_BY_ID", () => {
  it("Should return new state if receiving type", () => {
    const driverid = [];
    const newState = getReducer(initialState, {
      type: types.GET_DRIVER_BY_ID,
      payload: driverid,
      ...initialState,
    });
    expect(newState.driverid).toEqual(driverid);
  });
});

describe("getReducer GET_RIDER_BY_ID", () => {
  it("Should return new state if receiving type", () => {
    const riderid = [];
    const newState = getReducer(initialState, {
      type: types.GET_RIDER_BY_ID,
      payload: riderid,
      ...initialState,
    });
    expect(newState.riderid).toEqual(riderid);
  });
});

describe("getReducer GET_CONTACT_US", () => {
  it("Should return new state if receiving type", () => {
    const adminContact = [];
    const newState = getReducer(initialState, {
      type: types.GET_CONTACT_US,
      payload: adminContact,
      ...initialState,
    });
    expect(newState.adminContact).toEqual(adminContact);
  });
});

describe("getReducer UPDATE_CONTACT_US", () => {
  it("Should return new state if receiving type", () => {
    const adminContact = [];
    const newState = getReducer(initialState, {
      type: types.UPDATE_CONTACT_US,
      payload: adminContact,
      ...initialState,
    });
    expect(newState.adminContact).toEqual(adminContact);
  });
});

describe("getReducer NIGHT_CAB_HISTORY", () => {
  it("Should return new state if receiving type", () => {
    const nightCabHistory = {};

    const newState = getReducer(initialState, {
      type: types.NIGHT_CAB_HISTORY,
      payload: nightCabHistory,
      ...initialState,
    });
    expect(newState.nightCabHistory).toEqual(nightCabHistory);
  });
});

describe("getReducer NIGHT_CAB_REQUESTS", () => {
  it("Should return new state if receiving type", () => {
    const nightCabRequests = {};
    const newState = getReducer(initialState, {
      type: types.NIGHT_CAB_REQUESTS,
      payload: nightCabRequests,
      ...initialState,
    });
    expect(newState.nightCabRequests).toEqual(nightCabRequests);
  });
});

describe("getReducer EDIT_NIGHT_CAB_BY_ID", () => {
  it("Should return new state if receiving type", () => {
    const nightCabRequestsById = [];
    const newState = getReducer(initialState, {
      type: types.EDIT_NIGHT_CAB_BY_ID,
      payload: nightCabRequestsById,
      ...initialState,
    });
    expect(newState.nightCabRequestsById).toEqual(nightCabRequestsById);
  });
});

describe("getReducer UPDATE_NIGHT_CAB_BY_ID", () => {
  it("Should return new state if receiving type", () => {
    const action = getReducer(initialState, {
      type: types.UPDATE_NIGHT_CAB_BY_ID,
      payload: {
        assignedRoute: "hsr-hello",
        driverContactNumber: "1234567899",
        assignedTiming: "20:34:00",
        preferredTime: "20:50:33",
        name: "Nikita Kanifnath Ghule",
        contactNumber: "9890982840",
        destination: "hsr",
        vehicleNumber: "hp986754",
        employeeId: "NL003",
        driverName: "sdfg",
      },
      payload1: "NL003",
    });
    const expectedState = [
      {
        assignedRoute: "hsr-hello",
        driverContactNumber: "1234567899",
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
    ];

    expect(action.nightCabRequests).toEqual(expectedState);
  });
});

//--------------------------- ROUTE REDUCER --------------------------- //

describe("routeReducer Error", () => {
  it("Should return error msg", () => {
    const error = "";
    const newState = routeReducer(initialState, {
      type: types.ERROR,
      payload: error,
      ...initialState,
    });
    expect(newState.error).toEqual(error);
  });




});

describe("routeReducer DispatchError", () => {
  it("Should return error message", () => {
    const errorMsg = "";
    const newState = routeReducer(initialState, {
      type: types.ERROR_DISPATCH,
      payload: errorMsg,
      ...initialState,
    });
    expect(newState.errorMsg).toEqual(errorMsg);
  });
});

describe("routeReducer POST_LOCATION", () => {
  it("Should return new state if receiving type", () => {
    const newState = routeReducer(
      { locationArray: [] },
      {
        type: types.POST_LOCATION,
        payload: { location: "a" },
      }
    );
    expect(newState).toEqual({ locationArray: [{ location: "a" }] });
  });
});

describe("routeReducer GET_LOCATION", () => {
  it("Should return new state if receiving type", () => {
    const locationArray = [];
    const newState = routeReducer(initialState, {
      type: types.GET_LOCATION,
      payload: locationArray,
      ...initialState,
    });
    expect(newState.locationArray).toEqual(locationArray);
  });
});

describe("routeReducer DELETE_LOCATION", () => {
  it("Should return new state if receiving type", () => {
    const expectedlocationArray = [
      { location: "hsr(Freight Tigers)" },
      { location: "koramangala(Nineleaps)" },
      { location: "sarjapur(Uber)" },
      { location: "whitefield(Tesco)" },
    ];
    const newState = routeReducer(initialState, {
      type: types.DELETE_LOCATION,
      payload: "domlur(OLA)",
    });
    expect(newState.locationArray).toEqual(expectedlocationArray);
  });
});

describe("routeReducer GET_ROUTE_INFO", () => {
  it("Should return new state if receiving type", () => {
    const RouteInfo = [];
    const newState = routeReducer(initialState, {
      type: types.GET_ROUTE_INFO,
      payload: RouteInfo,
      ...initialState,
    });
    expect(newState.RouteInfo).toEqual(RouteInfo);
  });
});

describe("routeReducer POST_ROUTE_INFO", () => {
  it("Should return new state if receiving type", () => {
    const newState = routeReducer(
      { RouteInfo: [] },
      {
        type: types.POST_ROUTE_INFO,
        payload: {
          id: "NL-23456",
          name: "dival Sehgal",
          contactNumber: "1234567890",
          emailId: "sehgaldival@gmail.com",
          managerId: "NL-76543",
          role: "employee",
          gender: "MALE",
        },
        ...initialState,
      }
    );
    expect(newState).toEqual({
      RouteInfo: [
        {
          id: "NL-23456",
          name: "dival Sehgal",
          contactNumber: "1234567890",
          emailId: "sehgaldival@gmail.com",
          managerId: "NL-76543",
          role: "employee",
          gender: "MALE",
        },
      ],
    });
  });
});

describe("routeReducer DELETE_ROUTE", () => {
  it("Should return new state if receiving type", () => {
    const expectedRouteinfo = [
      {
        routeId: "R2",
        route:
          "whitefield(Tesco)-whitefield(Wadhwani)-hsr(Freight Tigers)-koramangala(Nineleaps)",
        routeTimings: "11:00:00-11:30:00-12:00:00-12:30:00",
      },
    ];
    const newState = routeReducer(initialState, {
      type: types.DELETE_ROUTE,
      payload: "R1",
    });
    expect(newState.RouteInfo).toEqual(expectedRouteinfo);
  });
});

describe("routeReducer UPDATE_ROUTE", () => {
  it("Should return new state if receiving type", () => {
    const RouteInfo = {
      routeId: "R1",
      route:
        "whitefield(Tesco)-whitefield(Wadhwani)-hsr(Freight Tigers)-koramangala(Nineleaps)",
      routeTimings: "09:00:00-09:30:00-10:00:00-10:30:00",
    };

    const expectedRouteInfo = [
      {
        routeId: "R1",
        route:
          "whitefield(Tesco)-whitefield(Wadhwani)-hsr(Freight Tigers)-koramangala(Nineleaps)",
        routeTimings: "09:00:00-09:30:00-10:00:00-10:30:00",
      },
      {
        routeId: "R2",
        route:
          "whitefield(Tesco)-whitefield(Wadhwani)-hsr(Freight Tigers)-koramangala(Nineleaps)",
        routeTimings: "11:00:00-11:30:00-12:00:00-12:30:00",
      },
    ];

    const newState = routeReducer(initialState, {
      type: types.UPDATE_ROUTE,
      payload: RouteInfo,
      payload1: "R1",
    });

    expect(newState.RouteInfo).toEqual(expectedRouteInfo);
  });
});

//--------------------------- VEHICLE REDUCER --------------------------- //

describe("vehicleReducer GET_VEHICLE_INFO", () => {
  it("Should return new state if receiving type", () => {
    const Vehicle_info = [];
    const newState = vehicleReducer(initialState, {
      type: types.GET_VEHICLE_INFO,
      payload: Vehicle_info,
      ...initialState,
    });
    expect(newState.Vehicle_info).toEqual(Vehicle_info);
  });
});

describe("vehicleReducer GET_VEHICLE_PROFILE", () => {
  it("Should return new state if receiving type", () => {
    const vehicleProfile = [];
    const newState = vehicleReducer(initialState, {
      type: types.GET_VEHICLE_PROFILE,
      payload: vehicleProfile,
      ...initialState,
    });
    expect(newState.vehicleProfile).toEqual(vehicleProfile);
  });
});

describe("vehicleReducer GET_VEH_ROUTES ", () => {
  it("Should return new state if receiving type", () => {
    const Vehicle_route = [];
    const newState = vehicleReducer(initialState, {
      type: types.GET_VEH_ROUTES,

      payload: Vehicle_route,
      ...initialState,
    });
    expect(newState.Vehicle_route).toEqual(Vehicle_route);
  });
});

describe("vehicleReducer DELETE_VEHICLE_ROUTE_INF0", () => {
  it("Should return new state if receiving type", () => {
    const expectedVehicle_route = [
      {
        routeId: "R12",
        route:
          "koramangala(Nineleaps)-domlur(OLA)-yemlur(Landmark)-whitefield(tesco)",
        vehicleNumber: "1234567899",
        id: 21,
        latestBookingDate: "2020-03-12",
      },
    ];
    const newState = vehicleReducer(initialState, {
      type: types.DELETE_VEHICLE_ROUTE_INFO,
      payload: 20,
    });
    expect(newState.Vehicle_route).toEqual(expectedVehicle_route);
  });
});
describe("routeReducer Error", () => {
  it("Should return error msg", () => {
    const error = "";
    const newState = vehicleReducer(initialState, {
      type: types.ERROR,
      payload: error,
      ...initialState,
    });
    expect(newState.error).toEqual(error);
  });
});
describe("vehicleReducer DELETE_VEHICLE_INF0", () => {
  it("Should return new state if receiving type", () => {
    const ExpectedVehicle_info = [
      { vehicleNumber: "KA05ME2022", vehicleModel: "Indica", seats: 4 },
    ];
    const newState = vehicleReducer(initialState, {
      type: types.DELETE_VEHICLE_INFO,
      payload: "hp875643",
    });
    expect(newState.Vehicle_info).toEqual(ExpectedVehicle_info);
  });
});

describe("vehicleReducer GET_STATUS_BY_DATE", () => {
  it("Should return new state if receiving type", () => {
    const Vehicle_status = [];
    const totalPages = "";
    const newState = vehicleReducer(initialState, {
      type: types.GET_STATUS_BY_DATE,
      payload: Vehicle_status,
      ...initialState,
      payload1: totalPages,
      ...initialState,
    });
    expect(newState.Vehicle_status).toEqual(Vehicle_status);
    expect(newState.totalPages).toEqual(totalPages);
  });
});

describe("vehicleReducer POST_VEHICLE_ROUTE_INFO", () => {
  it("Should return new state if receiving type", () => {
    const newState = vehicleReducer(
      { Vehicle_route: [] },
      {
        type: types.POST_VEHICLE_ROUTE_INFO,
        payload: {},
      }
    );
    expect(newState).toEqual({ Vehicle_route: [{}] });
  });
});

describe("vehicleReducer POST_VEHICLE_INFO", () => {
  it("Should return new state if receiving type", () => {
    const newState = vehicleReducer(
      { Vehicle_info: [] },
      {
        type: types.POST_VEHICLE_INFO,
        payload: {},
      }
    );
    expect(newState).toEqual({ Vehicle_info: [{}] });
  });
});
describe("userReducer CHANGE_VEHICLE_NO", () => {
  it("Should return new state if receiving type", () => {
    const expectedVehicle_route = [
      {
        routeId: "R11",
        route:
          "koramangala(Nineleaps)-domlur(OLA)-yemlur(Landmark)-sarjapur(Uber)",
        vehicleNumber: "HP735640",
        id: 20,
        latestBookingDate: "2020-03-11",
      },

      {
        routeId: "R12",
        route:
          "koramangala(Nineleaps)-domlur(OLA)-yemlur(Landmark)-whitefield(tesco)",
        vehicleNumber: "1234567899",
        id: 21,
        latestBookingDate: "2020-03-12",
      },
    ];
    const newState = vehicleReducer(initialState, {
      type: types.CHANGE_VEHICLE_NO,
      payload: "1234567890",
      payload1: "HP735640",
    });
    expect(newState.Vehicle_route).toEqual(expectedVehicle_route);
  });
});

//--------------------------- USER REDUCER --------------------------- //

describe("userReducer GET_USER_INFO", () => {
  it("Should return new state if receiving type", () => {
    const riderData = [];
    const riderTotalPages = "";
    const driverData = [];
    const driverTotalPages = "";
    const newState = userReducer(initialState, {
      type: types.GET_USER_INFO,
      payload: riderData,
      ...initialState,
      payload1: riderTotalPages,
      ...initialState,
      payload2: driverData,
      ...initialState,
      payload3: driverTotalPages,
      ...initialState,
    });
    expect(newState.riderData).toEqual(riderData);
    expect(newState.riderTotalPages).toEqual(riderTotalPages);
    expect(newState.driverData).toEqual(driverData);
    expect(newState.driverTotalPages).toEqual(driverTotalPages);
  });
});

describe("routeReducer Error", () => {
  it("Should return error msg", () => {
    const error = "";
    const newState = userReducer(initialState, {
      type: types.ERROR,
      payload: error,
      ...initialState,
    });
    expect(newState.error).toEqual(error);
  });
});

describe("userReducer LOGIN", () => {
  it("Should return new state if receiving type", () => {
    const tokken = [];
    const boolean = false;
    const newState = userReducer(initialState, {
      type: types.LOGIN,
      payload: tokken,
      ...initialState,
      payload1: boolean,
      ...initialState,
    });
    expect(newState.tokken).toEqual(tokken);
    expect(newState.boolean).toEqual(boolean);
  });
});

describe("userReducer GET_EMPLOYEE_STATUS", () => {
  it("Should return new state if receiving type", () => {
    const employeeStatus = [];
    const newState = userReducer(initialState, {
      type: types.GET_EMPLOYEE_STATUS,
      payload: employeeStatus,
      ...initialState,
    });
    expect(newState.employeeStatus).toEqual(employeeStatus);
  });
});

describe("userReducer GET_USER_PROFILE", () => {
  it("Should return new state if receiving type", () => {
    const userProfile = [];
    const newState = userReducer(initialState, {
      type: types.GET_USER_PROFILE,
      payload: userProfile,
      ...initialState,
    });
    expect(newState.userProfile).toEqual(userProfile);
  });
});

describe("userReducer DELETE_RIDER", () => {
  it("Should return new state if receiving type", () => {
    const expectedRiderData = [
      {
        gender: "MALE",
        contactNumber: "9502027748",
        name: "Naveen Sai",
        emailId: "naveen.sai@nineleaps.com",
        managerId: "NL007",
        id: "NL006",
      },
    ];

    const newState = userReducer(initialState, {
      type: types.DELETE_RIDER,
      payload: "Nl87",
    });
    expect(newState.riderData).toEqual(expectedRiderData);
  });
});

describe("userReducer DELETE_DRIVER", () => {
  it("Should return new state if receiving type", () => {
    const expectedDriverData = [
      {
        gender: "MALE",
        contactNumber: "8123556722",
        name: "Aniruddha",
        emailId: "pradhum.guru@gmail.com",
        id: "DL003",
      },
    ];
    const newState = userReducer(initialState, {
      type: types.DELETE_DRIVER,
      payload: "DL002",
    });
    expect(newState.driverData).toEqual(expectedDriverData);
  });
});

describe("userReducer POST_RIDER_INFO", () => {
  it("Should return new state if receiving type", () => {
    const newState = userReducer(
      { riderData: [] },
      {
        type: types.POST_RIDER_INFO,
        payload: {
          id: "NL-23456",
          name: "dival Sehgal",
          contactNumber: "1234567890",
          emailId: "sehgaldival@gmail.com",
          managerId: "NL-76543",
          role: "employee",
          gender: "MALE",
        },
        ...initialState,
      }
    );
    expect(newState).toEqual({
      riderData: [
        {
          id: "NL-23456",
          name: "dival Sehgal",
          contactNumber: "1234567890",
          emailId: "sehgaldival@gmail.com",
          managerId: "NL-76543",
          role: "employee",
          gender: "MALE",
        },
      ],
    });
  });
});

describe("userReducer POST_DRIVER_INFO", () => {
  it("Should return new state if receiving type", () => {
    const newState = userReducer(
      { driverData: [] },
      {
        type: types.POST_DRIVER_INFO,
        payload: {
          id: "NL-23456",
          name: "dival Sehgal",
          contactNumber: "1234567890",
          emailId: "sehgaldival@gmail.com",
          managerId: "NL-76543",
          role: "employee",
          gender: "MALE",
        },
        ...initialState,
      }
    );
    expect(newState).toEqual({
      driverData: [
        {
          id: "NL-23456",
          name: "dival Sehgal",
          contactNumber: "1234567890",
          emailId: "sehgaldival@gmail.com",
          managerId: "NL-76543",
          role: "employee",
          gender: "MALE",
        },
      ],
    });
  });
});

describe("userReducer UPDATE_RIDER", () => {
  it("Should return new state if receiving type", () => {
    const riderData = {
      gender: "MALE",
      name: "Diva",
      contactNumber: "1234567899",
      emailId: "sehgaldival@gmail.com",
      id: "Nl87",
      managerId: "NL997",
    };

    const expectedRiderData = [
      {
        gender: "MALE",
        name: "Diva",
        contactNumber: "1234567899",
        emailId: "sehgaldival@gmail.com",
        id: "Nl87",
        managerId: "NL997",
      },

      {
        gender: "MALE",
        contactNumber: "9502027748",
        name: "Naveen Sai",
        emailId: "naveen.sai@nineleaps.com",
        managerId: "NL007",
        id: "NL006",
      },
    ];

    const newState = userReducer(initialState, {
      type: types.UPDATE_RIDER,
      payload: riderData,
      payload1: "Nl87",
    });
    expect(newState.riderData).toEqual(expectedRiderData);
  });
});

describe("userReducer UPDATE_DRIVER", () => {
  it("Should return new state if receiving type", () => {
    const driverData = {
      gender: "FEMALE",
      name: "Shravan",
      contactNumber: "8861975911",
      emailId: "pradhumna.guru@gmail.com",
      id: "DL002",
    };

    const expectedDriverData = [
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
        contactNumber: "8861975911",
        emailId: "pradhumna.guru@gmail.com",
        id: "DL002",
      },
    ];

    const newState = userReducer(initialState, {
      type: types.UPDATE_DRIVER,
      payload: driverData,
      payload1: "DL002",
    });

    expect(newState.driverData).toEqual(expectedDriverData);
  });
});

describe("userReducer UPDATE_EMP_STATUS", () => {
  it("Should return new state if receiving type", () => {
    const action = {
      accountStatus: "Active",
      tripCancelCount: 1,
      name: "Nikita Kanifnath Ghule",
      employeeId: "NL003",
    };

    const expectedemployeeStatus = [
      {
        accountStatus: "Active",
        tripCancelCount: 0,
        name: "Karthik S Jhingade",
        employeeId: "NL002",
      },
      {
        accountStatus: "Active",
        tripCancelCount: 1,
        name: "Pradhumna",
        employeeId: "NL001",
      },
      {
        accountStatus: "Active",
        tripCancelCount: 1,
        name: "Nikita Kanifnath Ghule",
        employeeId: "NL003",
      },
    ];
    const newState = userReducer(initialState, {
      type: types.UPDATE_EMP_STATUS,
      payload: action,
      payload1: "NL003",
    });
    expect(newState.employeeStatus).toEqual(expectedemployeeStatus);
  });
});

//--------------------------- TRIP REDUCER --------------------------- //

describe("tripReducer GET_TRIP_BY_DATE", () => {
  it("Should return new state if receiving type", () => {
    const TripsDetails = [];
    const totalPages = "";
    const newState = tripReducer(initialState, {
      type: types.GET_TRIP_BY_DATE,
      payload: TripsDetails,
      ...initialState,
      payload1: totalPages,
      ...initialState,
    });
    expect(newState.TripsDetails).toEqual(TripsDetails);
    expect(newState.totalPages).toEqual(totalPages);
  });
});
describe("routeReducer Error", () => {
  it("Should return error msg", () => {
    const error = "";
    const newState = tripReducer(initialState, {
      type: types.ERROR,
      payload: error,
      ...initialState,
    });
    expect(newState.error).toEqual(error);
  });
});

//--------------------------- STATUS TABLE REDUCER --------------------------- //

describe("statusTableReducer GET_STATUS_TABLE", () => {
  it("Should return new state if receiving type", () => {});
  const driverStatusData = [];
  const bookingData = [];
  const vehicleHavingData = [];
  const newState = statusTableReducer(initialState, {
    type: types.GET_STATUS_TABLE,
    payload: driverStatusData,
    ...initialState,
    payload1: bookingData,
    ...initialState,
    payload2: vehicleHavingData,
    ...initialState,
  });

  describe("routeReducer Error", () => {
    it("Should return error msg", () => {
      const error = "";
      const newState = statusTableReducer(initialState, {
        type: types.ERROR,
        payload: error,
        ...initialState,
      });
      expect(newState.error).toEqual(error);
    });
  });
  expect(newState.driverStatusData).toEqual(driverStatusData);
  expect(newState.bookingData).toEqual(bookingData);
  expect(newState.vehicleHavingData).toEqual(vehicleHavingData);
});

describe("statusTableReducer SEND_EMAIL", () => {
  it("Should return new state if receiving type", () => {
    const sendEmailMsg = [];
    const newState = statusTableReducer(initialState, {
      type: types.SEND_EMAIL,
      payload: sendEmailMsg,
      ...initialState,
    });
    expect(newState.sendEmailMsg).toEqual(sendEmailMsg);
  });
});

//--------------------------- HOME PAGE CARD REDUCER --------------------------- //

describe("homePageCardReducer HOME_PAGE_CARD", () => {
  it("Should return new state if receiving type", () => {
    const cardDetails = {};
    const newState = homePageCardReducer(initialState, {
      type: types.HOME_PAGE_CARD,
      payload: cardDetails,
      ...initialState,
    });
    expect(newState.cardDetails).toEqual(cardDetails);
  });
});

describe("routeReducer Error", () => {
  it("Should return error msg", () => {
    const error = "";
    const newState = homePageCardReducer(initialState, {
      type: types.ERROR,
      payload: error,
      ...initialState,
    });
    expect(newState.error).toEqual(error);
  });
});