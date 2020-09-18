import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../../../../Utils/index";
import RiderUI from "../RiderUI";
import UpdateRiderUI from "../UpdateRiderUI";
import EmployeeStatusUI from "../EmployeeStatusUI";
import UpdateEmployeeStatusUI from "../UpdateEmployeeStatusUI";
import Rider from "../Rider";
import EmployeeStatus from "../EmployeeStatus";
import UpdateRider from "../UpdateRider";
import UpdateEmployeeStatus from "../UpdateEmployeeStatus";
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
  const wrapper = shallow(<Rider store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

const setUp1 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<EmployeeStatus store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

const setUp2 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<UpdateRider store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};
const setUp3 = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<UpdateEmployeeStatus store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Rider UI Component", () => {
  let wrapper, mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const initialState = {
      postuserInfo: mockFunc,
      getUserInfo: mockFunc,
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
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "RiderUI");
    expect(component.length).toBe(1);
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

  //  it("component will recieve props ", () => {
  //   const nextProps={status1:1,isLoading:false};
  //   const classInstance = wrapper.instance();
  //   classInstance.componentWillReceiveProps(nextProps);
  //   const newState=classInstance.state.isLoading;
  //   expect(newState).toBe(false);
  // });
  it("handle check change", () => {
    const mockEvent = "NL005";
    const expected = {
      targetId: "NL005",
    };
    const classInstance = wrapper.instance();
    classInstance.handleCheckChange(mockEvent);
    const newState = classInstance.state.targetId;
    expect(newState).toBe(expected.targetId);
  });

  it("delete", () => {
    const deletefunc = jest.spyOn(wrapper.instance(), "delete");
    swal.mockReturnValue(Promise.resolve(new Response(true)));

    const prevProps = {
      role: "DRIVER",
      gender: "MALE",
      contactNumber: "9455381887",
      name: "Nikhil Chaturvedi",
      emailId: "nikhil.chaturvedi@nineleaps.com",
      id: "DL005",
    };
    wrapper.instance().delete(prevProps);
    wrapper.setProps({ willDelete: true });
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
  it("handle table change check pagesize 20", () => {
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
  it("handle table change check pagesize 20", () => {
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
        id: "next",
      },
    };
    wrapper.setProps({ riderTotalPages: 2 });

    const expected = { val: 1 };
    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });

  it("handle table change check next page at its limit", () => {
    const mockEvent = {
      target: {
        id: "next",
      },
    };
    wrapper.setProps({ riderTotalPages: 2 });

    const expected = { val: 1 };
    wrapper.setState({ val: 0 });
    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });

  it("handle table change check prev page", () => {
    const mockEvent = {
      target: {
        id: "prev",
      },
    };
    wrapper.setState({ val: 0 });
    wrapper.setProps({ riderTotalPages: 2 });
    const expected = { val: 0 };

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });

  it("handle table change check prev page at its limit", () => {
    const mockEvent = {
      target: {
        id: "prev",
      },
    };
    const expected = { val: 0 };

    wrapper.setState({ val: 1 });
    wrapper.setProps({ riderTotalPages: 2 });

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });
  it("handle table change check prev page at its limit", () => {
    const mockEvent = {
      target: {
        id: "dival",
      },
    };

    const expected = { val: 1 };

    wrapper.setState({ val: 1 });
    wrapper.setProps({ riderTotalPages: 3 });

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });
});

describe("Rider Table Component", () => {
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
      wrapper = shallow(<RiderUI {...props} />);
      wrapper1 = shallow(<RiderUI {...props1} />);
      wrapper2 = shallow(<RiderUI {...props2} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "RiderTable");
      expect(table.length).toBe(1);
    });

    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "RiderRow");
      expect(table.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "RiderRow");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });

    it("Should render delete button  ", () => {
      const table = findByTestAtrr(wrapper1, "deleteButton");
      expect(table.length).toBe(1);
    });

    it("Should render edit button  ", () => {
      const table = findByTestAtrr(wrapper1, "editButton");
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
      wrapper = shallow(<RiderUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Update Rider UI Component", () => {
  let wrapper, mockSubmit;
  beforeEach(() => {
    mockSubmit = jest.fn();
    const initialState = {
      updateRiderDetail: mockSubmit,
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
    wrapper = setUp2(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "UpdateRider");
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
    swal.mockReturnValue(Promise.resolve(new Response(true)));

    const mockEvent = {
      preventDefault: mockPreventDefault,
    };
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

  // it("component will recieve props ", () => {
  //   const nextProps = { load: false };
  //   const classInstance = wrapper.instance();
  //   classInstance.componentWillReceiveProps(nextProps);
  //   const newState = classInstance.state.load;
  //   expect(newState).toBe(false);
  // });

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

describe("Update Rider  Component", () => {
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
        updateRider: {
          name: "",
        },
        handleCheckChange: () => {},
        handleTableChange: () => {},
      };
      wrapper = shallow(<UpdateRiderUI {...props} />);
    });

    it("Should render update rider form ", () => {
      const table = findByTestAtrr(wrapper, "UpdateRider");
      expect(table.length).toBe(1);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<UpdateRiderUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Employee Status UI Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
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
      targetId: "",
      enabledButton: false,
    };
    wrapper = setUp1(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "EmployeeStatusUI");
    expect(component.length).toBe(1);
  });
  // it("component will recieve props ", () => {
  //   const nextProps = { status1: [], isLoading: false };
  //   const classInstance = wrapper.instance();
  //   classInstance.componentWillReceiveProps(nextProps);
  //   const newState = classInstance.state.isLoading;
  //   expect(newState).toBe(false);
  // });

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
  it("handle table change check sortBy accountStatus", () => {
    const mockEvent = {
      target: {
        value: "accountStatus",
      },
    };
    const expected = {
      sortBy: "accountStatus",
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
    wrapper.setProps({ emprTotalPages: 2 });

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
    wrapper.setProps({ empTotalPages: 2 });

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
    wrapper.setProps({ empTotalPages: 1 });
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
    wrapper.setProps({ empTotalPages: 2 });

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
    wrapper.setProps({ empTotalPages: 3 });

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
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
  it("handle table change check prev page", () => {
    const mockEvent = {
      target: {
        value: "jai",
      },
    };
    wrapper.setState({ val: 0 });
    wrapper.setProps({ empTotalPages: 1 });
    const expected = { val: 0 };

    wrapper.instance().handleTableChange(mockEvent);
    expect(wrapper.state().val).toBe(expected.val);
  });
});

describe("Employee Status Table Component", () => {
  describe("Data Recieved", () => {
    let wrapper, wrapper1, mockFunc;
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
        enabledButton: false,

        handleCheckChange: mockFunc,
        handleTableChange: () => {},
      };
      const props1 = {
        val: 0,
        isLoading: false,
        status1: [
          {
            gender: "MALE",
            contactNumber: "8123556722",
            name: "Aniruddha",
            emailId: "pradhum.guru@gmail.com",
            id: "DL003",
            employeeId: "DL003",
          },
          {
            gender: "FEMALE",
            name: "Shravan",
            contactNumber: "8861975910",
            emailId: "pradhumna.guru@gmail.com",
            id: "DL002",
            employeeId: "DL002",
          },
        ],
        targetId: "DL003",

        handleCheckChange: () => {},
        handleTableChange: () => {},
      };
      wrapper = shallow(<EmployeeStatusUI {...props} />);
      wrapper1 = shallow(<EmployeeStatusUI {...props1} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "EmployeeStatus");
      expect(table.length).toBe(1);
    });
    it("Should render Main table rows and columns ", () => {
      const table = findByTestAtrr(wrapper, "empStatusRow");
      expect(table.length).toBe(1);
    });
    it("Should render edit button  ", () => {
      const table = findByTestAtrr(wrapper1, "editButton");
      expect(table.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "empStatusRow");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<EmployeeStatusUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});

describe("Update Employee Status UI Component", () => {
  let wrapper, mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const initialState = {
      updateEmpDetail: mockFunc,
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
    wrapper = setUp3(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "UpdateEmployeeStatusUI");
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
  it("Should set the account status", () => {
    const mockEvent = {
      target: {
        value: "active",
      },
    };
    const expected = {
      accountStatus: "active",
    };
    const classInstance = wrapper.instance();
    classInstance.settingStatus(mockEvent);
    const newState = classInstance.state.accountStatus;
    expect(newState).toBe(expected.accountStatus);
  });
  it("handle option change status to active", () => {
    const spy = jest.spyOn(wrapper.instance(), "settingStatus");
    const mockEvent = {
      target: {
        id: "accountStatus",
        value: "ACTIVE",
      },
    };
    const expected = {
      accountStatus: "ACTIVE",
    };
    const classInstance = wrapper.instance();
    classInstance.handleOptionChange(mockEvent);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().accountStatus).toBe(expected.accountStatus);
  });

  it("handle option change status to blocked", () => {
    const spy = jest.spyOn(wrapper.instance(), "settingStatus");
    const mockEvent1 = {
      target: {
        id: "accountStatus",
        value: "BLOCKED",
      },
    };
    const expected1 = {
      accountStatus: "BLOCKED",
    };
    wrapper.instance().handleOptionChange(mockEvent1);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().accountStatus).toBe(expected1.accountStatus);
  });
  it("componentWillUnmount should be called on unmount", () => {
    const componentWillUnmount = jest.spyOn(
      wrapper.instance(),
      "componentWillUnmount"
    );
    wrapper.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  });
  it(" handleSubmit should call preventDefault", () => {
    const mockPreventDefault = jest.fn();
    swal.mockReturnValue(Promise.resolve(new Response(true)));

    const mockEvent = {
      preventDefault: mockPreventDefault,
    };
    wrapper.instance().submitHandle(mockEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
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

describe("Update Employee Status Component", () => {
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
        empStatus: {
          employeeId: "",
        },
        targetId: "",
        enabledButton: true,

        handleCheckChange: () => {},
        handleTableChange: () => {},
      };
      wrapper = shallow(<UpdateEmployeeStatusUI {...props} />);
    });

    it("Should render Main table ", () => {
      const table = findByTestAtrr(wrapper, "updateEmployeeStatus");
      expect(table.length).toBe(1);
    });
  });

  describe("Data not recieved", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isLoading: true,
      };

      wrapper = shallow(<UpdateEmployeeStatusUI {...props} />);
    });

    it("Should render a Loader ", () => {
      const table = findByTestAtrr(wrapper, "loader");
      expect(table.length).toBe(1);
    });
  });
});
