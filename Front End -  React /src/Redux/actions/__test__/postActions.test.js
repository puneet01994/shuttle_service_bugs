import {
  postuserInfo,
  postLocation,
  postRouteInfo,
  postVehicleInfo,
  postVehicleRouteInfo,
  getNightCabById,
  login,
} from "../POST-API";
import moxios from "moxios";
import { makeMockStore } from "../../../../Utils/index";
import { types } from "../../types";
import swal from "sweetalert";
jest.mock("sweetalert");
describe("login", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const Token = {
      accessToken:
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBRE1JTiIsImV4cCI6MTU4NjMyNzQ3NH0.Hori4mv6VtxZ8UMZslogt4wk4CgWeiT_xxvaBXeX3EsdM289uy-IFDr1M6v-xX9RwuTt4g9rTmmyXAsCNj0xNA",
      refreshToken:
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBRE1JTiIsImV4cCI6MTU4NjkyODY3NH0.ZKccsbdMMwb5h3WPtqJB0QKtzeu-65lGptI5xPZ9sb6rINWaU0SCPAQHnb_xBGpbEwV069ttGdsfrZDtcNVrRg",
      boolean: true,
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { status: 300, payload: Token },
      });
    });

    const expectedActions = [
      {
        type: types.LOGIN,
        payload: Token.accessToken,
        payload1: Token.boolean,
      },
    ];
    const store = makeMockStore();

    return store.dispatch(login()).then((responseData) => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
  test("unsuuceesful api call ", () => {
    const error = [];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, error: { error } });
    });

    const expectedActions = error;

    const store = makeMockStore();

    return store.dispatch(login()).then((responseData) => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("postuserInfo", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call for rider ", () => {
    const riderData = [{}];
    const e = {
      role: "EMPLOYEE",
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { payload: riderData } });
    });

    const expectedActions = [
      {
        type: types.POST_RIDER_INFO,
        payload: riderData,
      },
    ];

    const store = makeMockStore();

    return store.dispatch(postuserInfo(e)).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });

  test("suuceesful api call for driver ", () => {
    const driverData = [{}];
    const e = {
      role: "DRIVER",
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { payload: driverData } });
    });

    const expectedActions = [
      {
        type: types.POST_DRIVER_INFO,
        payload: driverData,
      },
    ];

    const store = makeMockStore();

    return store.dispatch(postuserInfo(e)).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });

  test("unsuuceesful api call ", () => {
    const error = [];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, error: { error } });
    });

    const expectedActions = error;

    const store = makeMockStore();

    return store.dispatch(postuserInfo()).then((responseData) => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("getNightCabById", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const employeeDataById = {
      role: "EMPLOYEE",
      gender: "MALE",
      contactNumber: "9502027748",
      name: "Naveen Sai",
      emailId: "naveen.sai@nineleaps.com",
      managerId: "NL007",
      id: "NL006",
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: employeeDataById },
      });
    });

    const expectedActions = [
      {
        type: types.EDIT_NIGHT_CAB_BY_ID,
        payload: employeeDataById,
      },
    ];

    const store = makeMockStore();

    return store.dispatch(getNightCabById()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
  test("unsuccessful api call ", () => {
    const error = [];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, error: { error } });
    });

    const expectedActions = error;

    const store = makeMockStore();

    return store.dispatch(getNightCabById()).then(() => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("postLocation", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const locationArray = [{}];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { payload: locationArray },
      });
    });

    const expectedActions = [
      {
        type: types.POST_LOCATION,
        payload: locationArray,
      },
    ];

    const store = makeMockStore();

    return store.dispatch(postLocation()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });

  test("unsuuceesful api call ", () => {
    const error1 = {
      config: {
        url: "/admin/addlocation",
        method: "post",

        baseURL: " http://73d5a5d9.ngrok.io",
      },
      data: {
        timeStamp: "2020-04-17T13:13:12.831748",
        status: 400,
        message: "Validation Failed",
        path: "/admin/addlocation",
        details: ["Enter area name with company name"],
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 400, response: { response: error1 } });
    });
    swal.mockReturnValue(Promise.resolve(new Response(true)));

    const expectedActions = [
      {
        type: types.ERROR_DISPATCH,
        payload: error1.response,
      },
    ];

    const store = makeMockStore();

    return store.dispatch(postLocation()).then((responseData) => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
  test("unsuuceesful api call ", () => {
    const error1 = {
      config: {
        url: "/admin/addlocation",
        method: "post",

        baseURL: " http://73d5a5d9.ngrok.io",
      },
      data: {
        timeStamp: "2020-04-17T13:13:12.831748",
        status: 500,
        message: "Validation Failed",
        path: "/admin/addlocation",
        details: ["Enter area name with company name"],
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500, response: { response: error1 } });
    });

    const expectedActions = [
      {
        type: types.ERROR_DISPATCH,
        payload: error1.response,
      },
    ];

    const store = makeMockStore();
    swal.mockReturnValue(Promise.resolve(new Response(true)));

    return store.dispatch(postLocation()).then((responseData) => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
  test("unsuuceesful api call ", () => {
    const error1 = {
      config: {
        url: "/admin/addlocation",
        method: "post",

        baseURL: " http://73d5a5d9.ngrok.io",
      },
      data: {
        timeStamp: "2020-04-17T13:13:12.831748",
        status: 409,
        message: "Validation Failed",
        path: "/admin/addlocation",
        details: ["Enter area name with company name"],
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 409, response: { response: error1 } });
    });
    swal.mockReturnValue(Promise.resolve(new Response(true)));

    const expectedActions = [
      {
        type: types.ERROR_DISPATCH,
        payload: error1.response,
      },
    ];

    const store = makeMockStore();

    return store.dispatch(postLocation()).then((responseData) => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });

  test("unsuuceesful api call ", () => {
    const error1 = {
      config: {
        url: "/Authorize",
        method: "post",

        baseURL: " http://73d5a5d9.ngrok.io",
      },
      data: {
        timeStamp: "2020-04-17T13:13:12.831748",
        status: 401,
        message: "Validation Failed",
        path: "/admin/addlocation",
        details: ["Enter area name with company name"],
      },
      status: 401,
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 401, response: { response: error1 } });
    });

    const expectedActions = [
      {
        type: types.ERROR_DISPATCH,
        payload: error1.response,
      },
    ];

    const store = makeMockStore();

    return store.dispatch(postLocation()).then((responseData) => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("postRouteInfo", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const RouteInfo = [{}];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { payload: RouteInfo } });
    });

    const expectedActions = [
      {
        type: types.POST_ROUTE_INFO,
        payload: RouteInfo,
      },
    ];
    const store = makeMockStore();

    return store.dispatch(postRouteInfo()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
  test("unsuuceesful api call ", () => {
    const error = [];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, error: { error } });
    });

    const expectedActions = error;

    const store = makeMockStore();

    return store.dispatch(postRouteInfo()).then((responseData) => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("postVehicleRouteInfo", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const e = [{}];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });
    });

    const expectedActions = [
      {
        type: types.POST_VEHICLE_ROUTE_INFO,
        payload: e,
      },
    ];
    const store = makeMockStore();

    return store.dispatch(postVehicleRouteInfo(e)).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
  test("unsuuceesful api call ", () => {
    const error = [];
    const e = [{}];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 400, error: { error } });
    });

    const expectedActions = error;

    const store = makeMockStore();

    return store.dispatch(postVehicleRouteInfo(e)).then((responseData) => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});
describe("postVehicleInfo", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const Vehicle_info = [{}];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { payload: Vehicle_info } });
    });

    const expectedActions = [
      {
        type: types.POST_VEHICLE_INFO,
        payload: Vehicle_info,
      },
    ];
    const store = makeMockStore();

    return store.dispatch(postVehicleInfo()).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });

  test("unsuuceesful api call ", () => {
    const error = [];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, error: { error } });
    });

    const expectedActions = error;

    const store = makeMockStore();

    return store.dispatch(postVehicleInfo()).then((responseData) => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});
