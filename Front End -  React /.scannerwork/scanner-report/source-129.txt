import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../../Utils/index";
import TableHeader from "../TableHeader";

import Enzyme from "enzyme";
import "jest-enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("Driver Table Component", () => {
  describe("Data Recieved", () => {
    let wrapper, mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        val: 0,

        handleEvent: () => {},

        addModalOpen: () => {},
        addModalClose: () => {},
        handleChange: () => {},
        handleSubmit: () => {},
        handleOptionChange: () => {},

        handleTableChange: () => {},
      };

      wrapper = shallow(<TableHeader {...props} />);
    });

    it("Should render Main table ", () => {
      wrapper.setProps({ tableName: "NightCabTbl" });
      const table = findByTestAtrr(wrapper, "tableHeader");
      expect(table.length).toBe(1);
    });

    it("Should render Main table ", () => {
      wrapper.setProps({ tableName: "VehicleStatusTbl" });
      const table = findByTestAtrr(wrapper, "tableHeader");
      expect(table.length).toBe(1);
    });

    it("Should render Main table ", () => {
      wrapper.setProps({ tableName: "TripTbl" });
      const table = findByTestAtrr(wrapper, "tableHeader");
      expect(table.length).toBe(1);
    });

    it("Should render Main table ", () => {
      wrapper.setProps({ title: "Add Driver" });
      const table = findByTestAtrr(wrapper, "tableHeader");
      expect(table.length).toBe(1);
    });

    it("Should render Main table ", () => {
      wrapper.setProps({ title: "Add Employee" });
      const table = findByTestAtrr(wrapper, "tableHeader");
      expect(table.length).toBe(1);
    });
    it("Should render Main table ", () => {
      wrapper.setProps({ empStatus: "empStatus" });
      const table = findByTestAtrr(wrapper, "tableHeader");
      expect(table.length).toBe(1);
    });

    it("Should render Main table ", () => {
      wrapper.setProps({ vehicleInfo: "vehicleInfo" });
      const table = findByTestAtrr(wrapper, "tableHeader");
      expect(table.length).toBe(1);
    });

    it("Should render Main table ", () => {
      wrapper.setProps({ vehRoute: "vehRoute" });
      const table = findByTestAtrr(wrapper, "tableHeader");
      expect(table.length).toBe(1);
    });

    it("Should render Main table ", () => {
      wrapper.setProps({ fileName: "fileName" });
      const table = findByTestAtrr(wrapper, "tableHeader");
      expect(table.length).toBe(1);
    });
  
  });
});
