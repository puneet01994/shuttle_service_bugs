import {
  updateVehicleNumber,
  updateNightCabById,
  updateNightCab,
  updateRiderDetail,
  updateDriverDetail,
  updateEmpDetail,
  updateRouteDetail,
  updateAdminContact,
  
} from "../PUT-API";
import moxios from "moxios";
import { makeMockStore } from "../../../../Utils/index";
import { SuccessUpdate } from "../../../Components/Pages/Swal";
import { types } from "../../types";

describe("updateVehicleNumber", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const body = {
      oldVehicleNumber: "",
      newVehicleNumber: ""
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });
    });

    const expectedActions = [
      {
        type: types.CHANGE_VEHICLE_NO,
        payload: body.oldVehicleNumber,
        payload1: body.newVehicleNumber
      }
    ];
    const store = makeMockStore();

    return store.dispatch(updateVehicleNumber(body)).then(() => {
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

    return store.dispatch(updateVehicleNumber()).then(responseData => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("updateNightCabById", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const body = {
      employeeId: ""
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });
    });
    const expectedActions = [
      {
        type: types.UPDATE_NIGHT_CAB_BY_ID,
        payload: body,
        payload1: body.employeeId
      }
    ];
    const store = makeMockStore();

    return store.dispatch(updateNightCabById(body)).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
  test("unsuuceesful api call ", () => {
    const error = [];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 400, error: { error } });
    });

    const expectedActions = error;

    const store = makeMockStore();

    return store.dispatch(updateNightCabById()).then(responseData => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("updateNightCab", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const body = {
      employeeId: ""
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });
    });

    const expectedActions = SuccessUpdate();

    const store = makeMockStore();

    return store.dispatch(updateNightCab(body)).then(() => {
      const actionCalled = SuccessUpdate();
      expect(actionCalled).toEqual(expectedActions);
    });
  });

  test("unsuuceesful api call ", () => {
    const error = [];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 400, error: { error } });
    });

    const expectedActions = error;

    const store = makeMockStore();

    return store.dispatch(updateNightCab()).then(responseData => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("updateRiderDetail", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const body = {
      id: ""
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });
    });
    const expectedActions = [
      {
        type: types.UPDATE_RIDER,
        payload: body,
        payload1: body.id
      }
    ];
    const store = makeMockStore();

    return store.dispatch(updateRiderDetail(body)).then(() => {
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

    return store.dispatch(updateRiderDetail()).then(responseData => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("updateDriverDetail", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const body = {
      id: ""
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });
    });
    const expectedActions = [
      {
        type: types.UPDATE_DRIVER,
        payload: body,
        payload1: body.id
      }
    ];
    const store = makeMockStore();

    return store.dispatch(updateDriverDetail(body)).then(() => {
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

    return store.dispatch(updateDriverDetail()).then(responseData => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("updateEmpDetail", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const body = {
      employeeId: ""
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });
    });

    const expectedActions = [
      {
        type: types.UPDATE_EMP_STATUS,
        payload: body,
        payload1: body.employeeId
      }
    ];
    const store = makeMockStore();

    return store.dispatch(updateEmpDetail(body)).then(() => {
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

    return store.dispatch(updateEmpDetail()).then(responseData => {
      const actionCalled = store.getActions();

      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("updateRouteDetail", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("successful api call ", () => {
    const body = {
      routeId: ""
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });
    });
    const expectedActions = [
      {
        type: types.UPDATE_ROUTE,
        payload: body,
        payload1: body.routeId
      }
    ];
    const store = makeMockStore();

    return store.dispatch(updateRouteDetail(body)).then(() => {
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

    return store.dispatch(updateRouteDetail()).then(responseData => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
});

describe("updateAdminContact", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("suuceesful api call ", () => {
    const body = {};

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });
    });

    const expectedActions = [
      {
        type: types.UPDATE_CONTACT_US,
        payload: body
      }
    ];
    const store = makeMockStore();

    return store.dispatch(updateAdminContact(body)).then(() => {
      const actionCalled = store.getActions();
      expect(actionCalled).toEqual(expectedActions);
    });
  });
  

  // test("unsuuceesful api call ", () => {
  //   const error = [];
  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent();
  //     request.respondWith({ status: 400, error: { error } });
  //   });

  //   const expectedActions = error;

  //   const store = makeMockStore();

  //   return store.dispatch(updateAdminContact()).then(responseData => {
  //     const actionCalled = store.getActions();

  //     expect(actionCalled).toEqual(expectedActions);
  //   });
  // });
});
