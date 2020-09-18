import {
  deleteRider,
  deleteLocation,
  deleteDriver,
  deleteRoute,
  deleteVehicleInfo,
  deleteVehicleRouteInfo,

} from "../DELETE-API";
import moxios from "moxios";
import { makeMockStore } from "../../../../Utils/index";
import { types } from "../../types";


describe("deleteRider", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const Eid="";
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
     request.respondWith({ status: 200,response:{status:200}});
     
    });

    const expectedActions = [{
      type: types.DELETE_RIDER,
      payload: Eid
    }];
    const store = makeMockStore({});

      return store.dispatch(deleteRider(Eid)).then(() => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
  // test("unsuuceesful api call ", () => {
  //   const error = [];
  //const e = [{}];
  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent();
  //     request.respondWith({ status: 200, error: { error } });
  //   });

  //   const expectedActions = [{
  //     type:types.ERROR,
  //     payload:error
  //   }];
  //   const store = makeMockStore();

  //   return store.dispatch(deleteRider(e)).then(responseData => {
  //     const actionCalled = store.getActions();
  //     expect(actionCalled).toEqual(expectedActions);
  //   });
  // });
});

describe("deleteLocation", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const location = ""

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response:{status:200} });
    });

    const expectedActions = [{
      type: types.DELETE_LOCATION,
      payload: location
    }];
    const store = makeMockStore();

  return  store.dispatch(deleteLocation(location)).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("deleteDriver", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const targetId = "";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { status:200 } });
    });

    const expectedActions = [{
      type: types.DELETE_DRIVER,
      payload: targetId
    }];
    const store = makeMockStore();

    return store.dispatch(deleteDriver(targetId)).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("deleteRoute", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const RouteId = "";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { status:200 } });
    });

    const expectedActions = [{
      type: types.DELETE_ROUTE,
      payload: RouteId
    }];
    const store = makeMockStore();

  return  store.dispatch(deleteRoute(RouteId)).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("deleteVehicleInfo", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const VehicleNumber = "";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { status:200 } });
    });

    const expectedActions = [{
      type: types.DELETE_VEHICLE_INFO,
      payload: VehicleNumber
    }];
    const store = makeMockStore();

    return store.dispatch(deleteVehicleInfo(VehicleNumber)).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("deleteVehicleRouteInfo", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const routeId = "";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { status:200 } });
    });

    const expectedActions = [{
      type: types.DELETE_VEHICLE_ROUTE_INFO,
      payload: routeId
    }];
    const store = makeMockStore();

    return store.dispatch(deleteVehicleRouteInfo(routeId)).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});
