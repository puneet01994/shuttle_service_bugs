import {
    sendEmail,

  } from "../GET-API";
  import moxios from "moxios";
  import { makeMockStore } from "../../../../Utils/index";
  import { types } from "../../types";
  
describe("send email", () => {
    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());
  
    test("suuceesful api call ", () => {
      const  Message= "Mail Sent" ;
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({ status: 200, response: { Message: "Mail Sent" } });
      });
  
      const expectedActions = [
        {
            type: types.SEND_EMAIL,
            payload: Message
          }
      ];
      const store = makeMockStore({});
  
       return store.dispatch(sendEmail()).then(() => {
        const actionCalled = store.getActions();
        expect(actionCalled).toEqual(expectedActions);
      });
    });
  });