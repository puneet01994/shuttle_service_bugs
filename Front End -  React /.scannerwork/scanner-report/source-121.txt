import {
  getLocation,
  getContactus,
  getNightCabRequests,
  getRiderById,
  getRouteById,
  getDriverById,
  getNightCabHistory,
  getEmpById,
  getTripByDate,
  getStatusByDate,
  getRouteinfo,
  getEmployeeStatus,
  getVehicleInfo,
  getVehicleRoute,
  getStatusTable,
  getHomePageCard,
  getuserinfo,
  getUserProfile,
  getVehicleProfile,
} from "../GET-API";
import moxios from "moxios";
import { makeMockStore } from "../../../../Utils/index";
import { types } from "../../types";

describe("getLocation", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("suuceesful api call  ", () => {
    const locationArray = [{ location: "domlur(OLA)" }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: locationArray }
      });
    });

    const expectedActions = [
      { type: types.GET_LOCATION, payload: locationArray }
    ];
    const store = makeMockStore({});
    return store.dispatch(getLocation()).then(e => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});



describe("getVehicleProfile", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("suuceesful api call  ", () => {
    const vehicleProfile = { bookingId: "4" };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: vehicleProfile }
      });
    });

    const expectedActions = [
      { type: types.GET_VEHICLE_PROFILE, payload: vehicleProfile }
    ];
    const store = makeMockStore({});
    return store.dispatch(getVehicleProfile()).then(e => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});




// describe("getUserProfile", () => {
//   beforeEach(() => {moxios.install()});
//   afterEach(() => {moxios.uninstall()});

//   test("suuceesful api call  ", () => {
//     const riderProfile = { 
//       pages:{
//         content:{id:"NL009"},
//         totalPages:1
//       }
//      };
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: { payload: riderProfile }
//       });
//     });

//     const expectedActions = [
//       { type: types.GET_USER_PROFILE, 
//         payload: response.data.payload.content,
//         payload1: response.data.payload.totalPages,
//        }
//     ];
//     const store = makeMockStore({});
//     return store.dispatch(getUserProfile()).then(e => {
//       const actionCalled = store.getActions();
//       expect(actionCalled).toEqual(expectedActions);
//     });
//   });
// });


describe("getContactus", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("suceesful api call ", () => {
    const adminContact = {
      name: "Sunil Kumar",
      contactNumber: "8861975910",
      emailId: "nikita.ghule@nineleaps.com"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { payload: adminContact } });
    });

    const expectedActions = [
      {
        type: types.GET_CONTACT_US,
        payload: adminContact
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getContactus()).then(() => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getNightCabRequests", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const nightCabRequests = [
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
        driverName: "sdfg"
      }
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: nightCabRequests }
      });
    });

    const expectedActions = [
      {
        type: types.NIGHT_CAB_REQUESTS,
        payload: nightCabRequests
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getNightCabRequests()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getNightCabHistory", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const nightCabHistory = {
      pages: {
        content: [
          {
            date: "2020-04-07",
            assignedRoute: "Hanumanthnagar",
            driverContactNumber: "1234567890",
            assignedTiming: "20:34:00",
            preferredTime: "20:30:01",
            name: "Nikita Kanifnath Ghule",
            destination: "Banashankari",
            vehicleNumber: "hp673422",
            employeeId: "NL003",
            driverName: "dfg"
          }
        ],
        totalPages: 1
      }
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: nightCabHistory }
      });
    });

    const expectedActions = [
      {
        type: types.NIGHT_CAB_HISTORY,
        payload: nightCabHistory.pages.content,
        payload1: nightCabHistory.pages.totalPages
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getNightCabHistory()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getTripByDate", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const TripsDetails = {
      pages: {
        content: [
          {
            date: "2020-03-14",
            origin: "koramangala(Nineleaps)",
            destination: "domlur(OLA)",
            name: "Naveen Sai",
            vehicleNumber: "KA02AR3954",
            employeeId: "NL006",
            tripId: 68,
            tripStatus: "Employee_Cancelled",
            tripTime: "18:30:00"
          }
        ],
        totalPages: 1
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { payload: TripsDetails } });
    });

    const expectedActions = [
      {
        type: types.GET_TRIP_BY_DATE,
        payload: TripsDetails.pages.content,

        payload1: TripsDetails.pages.totalPages
      }
    ];

    const store = makeMockStore({});

    return store.dispatch(getTripByDate()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getStatusByDate", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const Vehicle_status = {
      pages: {
        content: [
          {
            date: "2020-04-02",
            kmsTravelled: 15,
            routeId: "R9",
            driverId: "DL001",
            totalTripTime: "00:10:27",
            name: "KSJ",
            vehicleNumber: "KA05ME2022",
            tripTime: "18:15:00"
          }
        ],
        totalPages: 1
      }
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: Vehicle_status }
      });
    });

    const expectedActions = [
      {
        type: types.GET_STATUS_BY_DATE,
        payload: Vehicle_status.pages.content,
        payload1: Vehicle_status.pages.totalPages
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getStatusByDate()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getStatusTable", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const tableData = {
      bookingStatus: [{}],
      driverStatus: [{}],
      vehiclesHavingTrips: [{}]
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: tableData }
      });
    });

    const expectedActions = [
      {
        type: types.GET_STATUS_TABLE,
        payload: tableData.bookingStatus,
        payload1: tableData.driverStatus,
        payload2: tableData.vehiclesHavingTrips
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getStatusTable()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getHomePageCard", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const cardData = {
      upcomingTripCard: "",
      completedTripCard: "",
      employeeTripCard: "",
      totalTripCard: ""
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: cardData }
      });
    });

    const expectedActions = [
      {
        type: types.HOME_PAGE_CARD,
        payload: cardData.employeeTripCard,
        payload1: cardData.upcomingTripCard,
        payload2: cardData.completedTripCard,
        payload3: cardData.totalTripCard
      }
    ];

    const store = makeMockStore({});

    return store.dispatch(getHomePageCard()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getuserinfo", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const UserDetails = {
      driverDetails: {
        content: [{}],
        totalPages: 1
      },
      employeeDetails: {
        content: [{}],
        totalPages: 1
      }
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: UserDetails }
      });
    });

    const expectedActions = [
      {
        type: types.GET_USER_INFO,
        payload: UserDetails.employeeDetails.content,
        payload1: UserDetails.employeeDetails.totalPages,
        payload2: UserDetails.driverDetails.content,
        payload3: UserDetails.driverDetails.totalPages
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getuserinfo()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getEmployeeStatus", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const employeeStatus = {
        content: [
          {
            date: "2020-04-02",
            kmsTravelled: 15,
            routeId: "R9",
            driverId: "DL001",
            totalTripTime: "00:10:27",
            name: "KSJ",
            vehicleNumber: "KA05ME2022",
            tripTime: "18:15:00"
          }
        ],
        totalPages: 1
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: employeeStatus }
      });
    });
    const expectedActions = [
      {
        type: types.GET_EMPLOYEE_STATUS,
        payload: employeeStatus.content,

        payload1: employeeStatus.totalPages
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getEmployeeStatus()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getVehicleInfo", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const Vehicle_info = {
      content: [
        {
          date: "2020-04-02",
          kmsTravelled: 15,
          routeId: "R9",
          driverId: "DL001",
          totalTripTime: "00:10:27",
          name: "KSJ",
          vehicleNumber: "KA05ME2022",
          tripTime: "18:15:00"
        }
      ],
      totalPages: 1
  };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { payload: Vehicle_info } });
    });

    const expectedActions = [
      {
        type: types.GET_VEHICLE_INFO,
        payload: Vehicle_info.content,

        payload1: Vehicle_info.totalPages
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getVehicleInfo()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getRouteinfo", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suceesful api call ", () => {
    const RouteInfo = {
      content: [
        {
          date: "2020-04-02",
          kmsTravelled: 15,
          routeId: "R9",
          driverId: "DL001",
          totalTripTime: "00:10:27",
          name: "KSJ",
          vehicleNumber: "KA05ME2022",
          tripTime: "18:15:00"
        }
      ],
      totalPages: 1
  };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { payload: RouteInfo } });
    });

    const expectedActions = [
      {
        type: types.GET_ROUTE_INFO,
        payload: RouteInfo.content,

        payload1: RouteInfo.totalPages
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getRouteinfo()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getRiderById", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const riderid = {
      role: "employee",
      gender: "MALE",
      contactNumber: "9502027748",
      name: "Naveen Sai",
      emailId: "naveen.sai@nineleaps.com",
      managerId: "NL007",
      id: "NL006"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { payload: riderid } });
    });
    const expectedActions = [
      {
        type: types.GET_RIDER_BY_ID,
        payload: riderid
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getRiderById()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getDriverById", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const driverid = {
      role: "driver",
      gender: "FEMALE",
      name: "Shravan",
      contactNumber: "8861975910",
      emailId: "pradhumna.guru@gmail.com",
      id: "DL002",
      managerId: null
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { payload: driverid } });
    });

    const expectedActions = [
      {
        type: types.GET_DRIVER_BY_ID,
        payload: driverid
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getDriverById()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getEmpById", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const employeeStatusid = {
      accountStatus: "Active",
      name: "Pradhumna",
      employeeId: "NL001"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: employeeStatusid }
      });
    });
    const expectedActions = [
      {
        type: types.GET_EMP_BY_ID,
        payload: employeeStatusid
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getEmpById()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getRouteById", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const routeid = {
      routeId: 7,
      route: Array(4),
      routeTimings: "22:00:00-22:25:00-22:40:00-23:00:00"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { payload: routeid } });
    });
    const expectedActions = [
      {
        type: types.GET_ROUTE_BY_ID,
        payload: routeid
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getRouteById()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getVehicleRoute", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const Vehicle_route = {
      content: [
        {
          date: "2020-04-02",
          kmsTravelled: 15,
          routeId: "R9",
          driverId: "DL001",
          totalTripTime: "00:10:27",
          name: "KSJ",
          vehicleNumber: "KA05ME2022",
          tripTime: "18:15:00"
        }
      ],
      totalPages: 1
  };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: Vehicle_route }
      });
    });
    const expectedActions = [
      {
        type: types.GET_VEH_ROUTES,
        payload: Vehicle_route.content,

        payload1: Vehicle_route.totalPages
      }
    ];
    const store = makeMockStore({});

    return store.dispatch(getVehicleRoute()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});
