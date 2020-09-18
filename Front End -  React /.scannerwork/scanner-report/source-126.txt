import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../../Utils/index";
import {
  AddButton,
  ExportButton,
  PrevButton,
  NextButton,
  EditButton,
  PageValue,
  DeleteButton,
} from "../../Pages/Buttons";
import Loader from "../Loader";
// import ErrorPage from "../ErrorPage";
import { Na } from "../NotAvailable";
import {
  PageSizeDropDown,
  SortByCabHistory,
  SortByCabVehicleStatus,
  SortByTrips,
  SortByEmp,
  SortByDri,
  SortByVehicleRoute,
  SortByVehicleInfo,
  SortByEmpStatus
} from "../DropDown";

describe("Renders Add Button", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      addModalopen: mockFunc,
    };
    wrapper = shallow(<AddButton {...props} />);
  });

  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "buttonComponent");
    expect(button.length).toBe(1);
  });

  it("Should emit callback on click event", () => {
    const button = findByTestAtrr(wrapper, "buttonComponent");
    button.simulate("click");
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
});

describe("Renders Page Size Drop Down", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      handleTableChange: mockFunc,
    };
    wrapper = shallow(<PageSizeDropDown {...props} />);
  });
  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "dropDownComponent");
    expect(button.length).toBe(1);
  });
});

describe("Renders SortByCabHistory Drop Down", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      handleTableChange: mockFunc,
    };
    wrapper = shallow(<SortByCabHistory {...props} />);
  });
  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "dropDownComponent");
    expect(button.length).toBe(1);
  });
});
describe("Renders SortByEmpStatus Drop Down", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      handleTableChange: mockFunc,
    };
    wrapper = shallow(<SortByEmpStatus {...props} />);
  });
  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "dropDownComponent");
    expect(button.length).toBe(1);
  });
});
describe("Renders SortByVehicleRoute Drop Down", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      handleTableChange: mockFunc,
    };
    wrapper = shallow(<SortByVehicleRoute {...props} />);
  });
  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "dropDownComponent");
    expect(button.length).toBe(1);
  });
});
describe("Renders SortByVehicleInfo Drop Down", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      handleTableChange: mockFunc,
    };
    wrapper = shallow(<SortByVehicleInfo {...props} />);
  });
  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "dropDownComponent");
    expect(button.length).toBe(1);
  });
});

describe("Renders SortByCabVehicleStatus Drop Down", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      handleTableChange: mockFunc,
    };
    wrapper = shallow(<SortByCabVehicleStatus {...props} />);
  });
  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "dropDownComponent");
    expect(button.length).toBe(1);
  });
});

describe("Renders SortByTrips Drop Down", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      handleTableChange: mockFunc,
    };
    wrapper = shallow(<SortByTrips {...props} />);
  });
  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "dropDownComponent");
    expect(button.length).toBe(1);
  });
});

describe("Renders SortByEmp Drop Down", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      handleTableChange: mockFunc,
    };
    wrapper = shallow(<SortByEmp {...props} />);
  });
  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "dropDownComponent");
    expect(button.length).toBe(1);
  });
});

describe("Renders SortByDri Drop Down", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      handleTableChange: mockFunc,
    };
    wrapper = shallow(<SortByDri {...props} />);
  });
  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "dropDownComponent");
    expect(button.length).toBe(1);
  });
});

describe("Renders Delete Button", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      delete: mockFunc,
      targetId: "1",
    };
    wrapper = shallow(<DeleteButton {...props} />);
  });

  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "deleteButton");
    expect(button.length).toBe(1);
  });

  it("Should emit callback on click event", () => {
    const button = findByTestAtrr(wrapper, "deleteButton");
    button.simulate("click");
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
});

describe("Renders export Button", () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      tableName: "",
      fileName: "",
    };
    wrapper = shallow(<ExportButton {...props} />);
  });

  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "buttonComponent");
    expect(button.length).toBe(1);
  });
});

describe("Renders not available div", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Na />);
  });

  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "NA");
    expect(button.length).toBe(1);
  });
});

describe("Renders page value Button", () => {
  let wrapper;

  beforeEach(() => {
    const props = {};
    wrapper = shallow(<EditButton {...props} />);
  });

  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "buttonComponent");
    expect(button.length).toBe(1);
  });
});

describe("Renders Edit Button", () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      val: 0,
    };
    wrapper = shallow(<PageValue {...props} />);
  });

  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "buttonComponent");
    expect(button.length).toBe(1);
  });
});

describe("Renders prev Button", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      handleTableChange: mockFunc,
    };
    wrapper = shallow(<PrevButton {...props} />);
  });

  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "buttonComponent");
    expect(button.length).toBe(1);
  });

  it("Should emit callback on click event", () => {
    const button = findByTestAtrr(wrapper, "buttonComponent");
    button.simulate("click");
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
});

describe("Renders Next Button", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      handleTableChange: mockFunc,
    };
    wrapper = shallow(<NextButton {...props} />);
  });

  it("Should Render a button", () => {
    const button = findByTestAtrr(wrapper, "buttonComponent");
    expect(button.length).toBe(1);
  });

  it("Should emit callback on click event", () => {
    const button = findByTestAtrr(wrapper, "buttonComponent");
    button.simulate("click");
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
});

describe("Loader Component", () => {
  describe("Data Recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {};
      wrapper = shallow(<Loader {...props} />);
    });

    it("Should render footer component ", () => {
      const footer = findByTestAtrr(wrapper, "loader");
      expect(footer.length).toBe(1);
    });
  });
});

