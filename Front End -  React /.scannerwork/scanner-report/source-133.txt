import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../../../../Utils/index";
import DriverUI from "../DriverUI";
import UpdateDriverUI from "../UpdateDriverUI";
import Driver from "../Driver";
import UpdateDriver from "../UpdateDriver";
import ModalForm from "../ModalForm";

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
  const wrapper = shallow(<Driver store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

const setUp1 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<UpdateDriver store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Driver UI Component", () => {
  let wrapper, mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
    const initialState = {
      deleteDriver: mockSubmit,
      delete: mockSubmit,
      postuserInfo: mockSubmit,
      settingGender: mockSubmit,
      areYouSureBeforeDelete: mockSubmit,
      getuserinfo: mockSubmit,
      status1: [
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
    const component = findByTestAtrr(wrapper, "driver");
    expect(component.length).toBe(1);
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

  it("Should close the modal", () => {
    const setState = { addModalShow: false };
    const classInstance = wrapper.instance();
    classInstance.addModalclose(setState);
    const newState = classInstance.state.addModalShow;
    expect(newState).toBe(false);
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
  it("Should set the gender", () => {
    const mockEvent = {
      target: {
        value: "MALE",
      },
    };
    const expected = {
      gender: "MALE",
    };
    const classInstance = wrapper.instance();
    classInstance.settingGender(mockEvent);
    const newState = classInstance.state.gender;
    expect(newState).toBe(expected.gender);
  });

  it("handle option change male", () => {
    const spy = jest.spyOn(wrapper.instance(), "settingGender");
    const mockEvent = {
      target: {
        id: "gender",
        value: "MALE",
      },
    };
    const expected = {
      gender: "MALE",
    };
    const classInstance = wrapper.instance();
    classInstance.handleOptionChange(mockEvent);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().gender).toBe(expected.gender);
  });

  it("handle option change female", () => {
    const spy = jest.spyOn(wrapper.instance(), "settingGender");
    const mockEvent1 = {
      target: {
        id: "gender",
        value: "FEMALE",
      },
    };
    const expected = {
      gender: "FEMALE",
    };
    wrapper.instance().handleOptionChange(mockEvent1);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().gender).toBe(expected.gender);
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

  it("delete", () => {
    const deletefunc = jest.spyOn(wrapper.instance(), "delete");
    swal.mockReturnValue(Promise.resolve(new Response(true)));
    const prevProps = "DL004";
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

  it("handle table change check sortBy id", () => {
    const mockEvent = {
      target: {
        value: "id",
      },
    };
    const expected = {
      sortBy: "id",
    };
    const classInstance = wrapper.instance();
    classInstance.handleTableChange(mockEvent);
    expect(wrapper.state().sortBy).toBe(expected.sortBy);
  });

  it("handle table change check sortBy name", () => {
    const mockEvent = {
      target: {
        value: "name",
      },
    };
    const expected = {
      sortBy: "name",
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
    wrapper.setProps({ driverTotalPages: 2 });

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
    wrapper.setProps({ driverTotalPages: 2 });

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
    wrapper.setProps({ driverTotalPages: 1 });
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
    wrapper.setProps({ driverTotalPages: 2 });

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
    wrapper.setProps({ driverTotalPages: 3 });

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
    wrapper.setProps({ driverTotalPages: 1 });
    const expected = { val: 0 };

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });
});

describe("Driver Table Component", () => {
  describe("Data Recieved", () => {
    let wrapper, wrapper1, wrapper2, mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        val: 0,
        isLoading: false,
        status1: [
          {
            gender: "MALE",
            contactNumber: "8123556722",
            name: "Aniruddha",
            emailId: "pradhum.guru@gmail.com",
            id: "DL003",
          },
        ],
        targetId: "",
        enabledButton: true,
        gender: "",
        addMOdalShow: false,
        title: "Add Driver",
        label: "",
        token: "",
        addModalOpen: () => {},
        addModalClose: () => {},
        handleChange: () => {},
        handleSubmit: () => {},
        handleOptionChange: () => {},

        handleCheckChange: mockFunc,
        handleTableChange: () => {},
      };
      const props1 = {
        isLoading: false,
        status1: [
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
        targetId: "DL003",
        gender: "",
        addModalShow: false,
        title: "Add Driver",
        label: "",
        token: "",
        addModalOpen: () => {},
        addModalClose: () => {},
        handleChange: () => {},
        handleSubmit: () => {},
        handleOptionChange: () => {},

        handleCheckChange: () => {},
        handleTableChange: () => {},
      };

      const props2 = {
        isLoading: false,
        status1: [
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
        gender: "",
        addModalShow: false,
        title: "Add Driver",
        label: "",
        token: "",
        addModalopen: () => {},
        addModalclose: () => {},
        handleChange: () => {},
        handleSubmit: () => {},
        handleOptionChange: () => {},

        handleCheckChange: () => {},
        handleTableChange: () => {},
      };
      wrapper1 = shallow(<DriverUI {...props1} />);
      wrapper = shallow(<DriverUI {...props} />);
      wrapper2 = shallow(<DriverUI {...props2} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "DriverTable");
      expect(table.length).toBe(1);
    });

    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "driverRow");
      expect(table.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "driverRow");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });

    it("Should render delete button  ", () => {
      const table = findByTestAtrr(wrapper1, "deleteButton");
      expect(table.length).toBe(1);
    });
 
    it("Should render add modal form", () => {
      const table = findByTestAtrr(wrapper2, "modalForm");
      expect(table.length).toBe(1);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<DriverUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Update Driver UI Component", () => {
  let wrapper, mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
    const initialState = {
      updateDriverDetail: mockSubmit,
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
    wrapper = setUp1(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "updateDriver");
    expect(component.length).toBe(1);
  });
  it("handlechange", () => {
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
  it("Should set the gender", () => {
    const mockEvent = {
      target: {
        value: "MALE",
      },
    };
    const expected = {
      gender: "MALE",
    };
    const classInstance = wrapper.instance();
    classInstance.settingGender(mockEvent);
    const newState = classInstance.state.gender;
    expect(newState).toBe(expected.gender);
  });
  it("handle option change male", () => {
    const spy = jest.spyOn(wrapper.instance(), "settingGender");
    const mockEvent = {
      target: {
        id: "gender",
        value: "MALE",
      },
    };
    const expected = {
      gender: "MALE",
    };
    const classInstance = wrapper.instance();
    classInstance.handleOptionChange(mockEvent);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().gender).toBe(expected.gender);
  });
  it("handle option change female", () => {
    const spy = jest.spyOn(wrapper.instance(), "settingGender");
    const mockEvent = {
      target: {
        id: "gender",
        value: "FEMALE",
      },
    };
    const expected = {
      gender: "FEMALE",
    };
    const classInstance = wrapper.instance();
    classInstance.handleOptionChange(mockEvent);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().gender).toBe(expected.gender);
  });

  it(" handleSubmit should call preventDefault", () => {
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault,
    };
    swal.mockReturnValue(Promise.resolve(new Response(true)));

    wrapper.instance().submitHandle(mockEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
  });

  it("componentWillUnmount should be called on unmount", () => {
    const componentWillUnmount = jest.spyOn(
      wrapper.instance(),
      "componentWillUnmount"
    );
    wrapper.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  });

  it(" should call componentdidupdate", () => {
    const componentDidUpdate = jest.spyOn(
      wrapper.instance(),
      "componentDidUpdate"
    );
    const prevProps = {
      role: "DRIVER",
      gender: "MALE",
      contactNumber: "9455381887",
      name: "Nikhil Chaturvedi",
      emailId: "nikhil.chaturvedi@nineleaps.com",
      id: "DL005",
    };
    wrapper.instance().componentDidUpdate(prevProps);
    expect(componentDidUpdate).toHaveBeenCalled();
  });
});

describe("Update Driver Component", () => {
  describe("Data Recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        val: 0,
        isLoading: false,
        status1: [
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
        UpdateDriver: {
          name: "",
        },
      };
      wrapper = shallow(<UpdateDriverUI {...props} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "UpdateDriver");
      expect(table.length).toBe(1);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<UpdateDriverUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Model form Component", () => {
  describe("Data Recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        val: 0,
        isLoading: false,
        status1: [
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
        gender: "",
        addModalShow: false,
        title: "Add Driver",
        label: "",
        token: "",
        addModalopen: () => {},
        addModalclose: () => {},
        handleSubmit: () => {},
        handleOptionChange: () => {},
        handleCheckChange: () => {},
      };
      wrapper = shallow(<ModalForm {...props} />);
    });

    it("Should render Model form ", () => {
      const model = findByTestAtrr(wrapper, "modalForm");

      expect(model.length).toBe(1);
    });
  });

  describe("Extra Manager ID field for Rider ", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        ManagerId: "Mid",
        val: 0,
        isLoading: false,
        status1: [
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
        gender: "",
        addMOdalShow: false,
        title: "Add Driver",
        label: "",
        token: "",
        addModalOpen: () => {},
        addModalClose: () => {},
        handleSubmit: () => {},
        handleOptionChange: () => {},
        handleCheckChange: () => {},
      };

      wrapper = shallow(<ModalForm {...props} />);
    });
    it("Should render Model form ", () => {
      const model = findByTestAtrr(wrapper, "modalForm");
      expect(model.length).toBe(1);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "extraManagerIdField");
      expect(table.length).toBe(1);
    });
  });
});
