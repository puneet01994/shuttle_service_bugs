// import React from "react";
// import { shallow } from "enzyme";
// import { findByTestAtrr } from "../../../../Utils/index";
// import Profile from "../Profile";
// import Enzyme from 'enzyme';
// import 'jest-enzyme';
// import Adapter from 'enzyme-adapter-react-16';



// Enzyme.configure({
//     adapter: new Adapter(),
// });

// const setUp = (initialState = {}) => {
//     const store = testStore(initialState);
//     const wrapper = shallow(<Profile store={store} />)
//       .childAt(0)
//       .dive();
//     return wrapper;
//   };

// // describe("profile UI Component",()=>{
// //     describe("Data Recieved",()=>{
// //         let wrapper;
// //         beforeEach(()=>{
// //             const initialState={
// //                 userProfile:[
// //                     {
// //                       title: "Example title 1",
// //                       body: "Some text", 
// //                       },
// //                       {
// //                         title: "Example title 2",
// //                         body: "Some text",
// //                       },
// //                 ]
// //             };
// //             wrapper=setUp(initialState);
// //         });

// //     // it("Should render data ", () => {
// //     //     const Component = findByTestAtrr(wrapper, "Profile");
// //     //     expect(Component.length).toBe(1);
// //     //   });
  
// //      })
// // })

// describe("Profile Table Component",()=>{
//   describe("Data Recieved",()=>{
//     let wrapper;
//     beforeEach(()=>{
//       const props={
//         userProfile:[
//           {
//             user:"",
//             origin:"",
//             destination:"",
//             vehicleNumber:"",
//             tripTime:""
//           }
//         ]
//       };
//       wrapper=shallow(<Profile {...props} />)
//     });

//     // it("Should render Main table ", () => {
//     //   const table = findByTestAtrr(wrapper, "Profile");
//     //   expect(table.length).toBe(1);
//     // });

//     it("Should render Main table rows and columns ", () => {
//       const table = findByTestAtrr(wrapper, "profileRow");
//       expect(table.length).toBe(1);
//     });

//   })
// })