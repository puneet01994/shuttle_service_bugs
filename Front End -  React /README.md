# Shuttle Service

## Shuttle Service Application

Shuttle Service is an application designed for creating and assigning the vehicle, routes to the driver,adding client locations, keeping track of Night cab for female staff.This web application will be used by the admin support department and to keep a track of their shuttle services.The main roles of the mobile application is to book cab as a rider and for driver to complete trips for rider to their respective client locations

## Technologies Used

- Front End -> React JS
- Back End -> Spring Boot

Further reading provides you with the introduction and explanation of the FrontEnd functionalities of the application.

## Getting Started

1. Download the zip or clone the Git repository.
2. Unzip the zip file
3. Open Command Prompt and got to the Project code folder
4. Open in your IDE
5. Install all the packages by using the command npm install.
6. Run the application by command npm start.

## Prerequisites

1. Chrome with redux dev tools extension.
2. IDE (visual studio code)
3. npm version 6.14.5
4. node v8.10.0

Download Links:

-[NPM](https://www.npmjs.com/) - NPM is a package manager for Node.js packages.\
-[Visual Studio Code](https://code.visualstudio.com/download) - Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring.\
-[Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) - Redux-Devtools provide us debugging platform for Redux apps. It lets you inspect every state and action payload.

**Installation**

-[Link to add all the dependencies for npm, nodejs and how to install it.](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)\
-[Link to install Visual Studio Code](https://dzone.com/articles/install-visual-studio-code-on-ubuntu-1804)\

**Running the application locally**

Run the app by executing command "npm start" in command prompt. Check the local port number in the command prompt to know Port No.

**Testing**

To run all the tests use :"npm test"
To run an individual use :"npm test filename".

## Files and Directories

```
├──Front End - React JS
│ ├──.scannerwork
│ ├──.vscode
│ ├── Utils
│ ├── public
│ ├── src
│ │ ├── Assets
│ │ │ │ ├── add.png
│ │ │ │ ├── asc.png
│ │ │ │ ├── background.jpg
│ │ │ ├── completed.png
│ │ │ ├── delete.ong
│ │ │ ├── desc.png
│ │ │ ├── download.jpeg
│ │ │ ├── edit.png
│ │ │ ├── error.png
│ │ │ ├── filterdate.png
│ │ │ ├── left.png
│ │ │ ├── loading.png
│ │ │ ├── nineleaps1.jpg
│ │ │ ├── nlps.png
│ │ │ ├── ongoing.png
│ │ │ ├── right.png
│ │ │ ├── total.png
│ │ │ ├── upcoming.png
│ ├── Components
│ │ │ ├── Driver
│ │ │ │ ├── __test__
│ │ │ │ │ ├── DriverUI.test.js
│ │ │ │ ├── Driver.js
│ │ │ │ ├── DriverUI.js
│ │ │ │ ├── ModalForm.js
│ │ │ │ ├── UpdateDriver.js
│ │ │ │ ├── UpdateDriverUI.js
│ │ │ ├── Home
│ │ │ │ ├── __test__
│ │ │ │ │ │── HomePage.test.js
│ │ │ │ ├── CardsUI.js
│ │ │ │ ├── DriverStatusUI.js
│ │ │ │ ├── Home.js
│ │ │ │ ├── HomeUI.js.js
│ │ │ │ ├── StatusTableUI.js
│ │ │ │ ├── TableUI.js
│ │ │ │ ├── VehicleHavingTripsUI.js
│ │ │ ├── Layout
│ │ │ │ ├── __test__
│ │ │ │ │ │── Layout.test.js
│ │ │ │ ├── AdminDash.js
│ │ │ │ ├── Footer.js
│ │ │ │ ├── Layout.js
│ │ │ ├── NightCab
│ │ │ │ ├── __test__
│ │ │ │ │ │── NightCab.test.js
│ │ │ │ ├── CabHistory.js
│ │ │ │ ├── CabHistoryUI.js
│ │ │ │ ├── CabRequestUI.js
│ │ │ │ ├── CabRequests.js
│ │ │ │ ├── UpdateCabRequest.js
│ │ │ │ ├── UpdateCabRequetsUI.js
│ │ │ ├── Pages
│ │ │ │ ├── __test__
│ │ │ │ │ │── Buttons.test.js
│ │ │ │ │ │── ContactUsUI.test.js
│ │ │ │ │ │── Login.test.js
│ │ │ │ │ │── Profile.test.js
│ │ │ │ │ │── TableHeader.test.js
│ │ │ │ ├── Buttons.js
│ │ │ │ ├── ContactusUI.js
│ │ │ │ ├── ContactusUI.js
│ │ │ │ ├── DropDown.js
│ │ │ │ ├── Loader.js
│ │ │ │ ├── Login.js
│ │ │ │ ├── NotAvailable.js
│ │ │ │ ├── NotFound.js
│ │ │ │ ├── Profile.js
│ │ │ │ ├── Swal.js
│ │ │ │ ├── UpdateContactUI.js
│ │ │ │ ├── UpdateContactus.js
│ │ │ │ ├── TableHeader.js
│ │ │ ├── Rider
│ │ │ │ ├── __test__
│ │ │ │ │ ├── RiderUI.test.js
│ │ │ │ ├── EmployeeStatus.js
│ │ │ │ ├── EmployeeStatusUI.js
│ │ │ │ ├── Rider.js
│ │ │ │ ├── RiderUI.js
│ │ │ │ ├── UpdateEmployeeStatus.js
│ │ │ │ ├── UpdateEmployeeStatusUI.js
│ │ │ │ ├── UpdateRider.js
│ │ │ │ ├── UpdateRiderUI.js
│ │ │ ├── Triproutes
│ │ │ │ ├── __test__
│ │ │ │ │ ├── TripRoutesUI.test.js
│ │ │ │ ├── LocationList.js
│ │ │ │ ├── LocationListUI.js
│ │ │ │ ├── Routes.js
│ │ │ │ ├── RoutesUI.js
│ │ │ │ ├── Trips.js
│ │ │ │ ├── TripsUI.js
│ │ │ │ ├── UpdateRoutes.js
│ │ │ │ ├── UpdateRoutesUI.js
│ │ │ ├── Vehicle
│ │ │ │ ├── __test__
│ │ │ │ │ ├── TripRoutesUI.test.js
│ │ │ │ ├── Vehicle.js
│ │ │ │ ├── VehicleProfile.js
│ │ │ │ ├── VehicleRoutes.js
│ │ │ │ ├── VehicleRoutesUI.js
│ │ │ │ ├── VehicleStatus.js
│ │ │ │ ├── VehicleStatusUI.js
│ │ │ │ ├── VehicleUI.js
│ ├── Documents
│ │ │ ├── Architecture Diagram.pdf
│ │ │ ├── Schema Diagram.pdf
│ ├── Redux
│ │ │ ├── actions
│ │ │ │ ├── __test__
│ │ │ │ │ ├── deleteActions.test.js
│ │ │ │ │ ├── getActions.test.js
│ │ │ │ │ ├── postActions.test.js
│ │ │ │ │ ├── sendEmail.test.js
│ │ │ │ ├── DELETE-API.js
│ │ │ │ ├── GET-API.js
│ │ │ │ ├── POST-API.js
│ │ │ │ ├── PUT-API.js
│ │ │ ├── reducers
│ │ │ │ ├── __test__
│ │ │ │ │ ├── reducer.test.js
│ │ │ │ ├── getReducer.js
│ │ │ │ ├── homePageCardReducer.js
│ │ │ │ ├── index.js
│ │ │ │ ├── routeReducer.js
│ │ │ │ ├── statusTableReducer.js
│ │ │ │ ├── tripReducer.js
│ │ │ │ ├── userReducer.js
│ │ │ │ ├── vehicleReducer.js
│ │ │ ├── store.js
│ │ │ ├── types.js
│ ├── Routing
│ │ │ │ ├── __test__
│ │ │ │ │ ├── routing.test.js
│ │ │ │ ├── auth.js
│ │ │ │ ├── navitems.js
│ ├── Scss
│ │ │ │ ├── vendors
│ │ │ │ │ ├── .gitkeep
│ │ │ │ │ ├── _variables.scss
│ │ │ │ ├── _custom.scss
│ │ │ │ ├── _ie-fix.scss
│ │ │ │ ├── _variables.scss
│ │ │ │ └── style.css
│ ├── Services
│ │ │ │ ├── __test__
│ │ │ │ │ ├── service.test.js
│ │ │ │ ├── SessionStorageService.js
│ │ │ │ ├── backEndUrls.js
│ │ │ │ ├── httpService.js
│ ├── Styles
│ │ │ │ ├── Login.css
│ │ │ │ ├── index.css
│ │ │ │ ├── table.css
│ │ │ │ ├── tripTable.css
│ ├── services
│ │ ├── Async.test.js
│ │ ├── ErrorBoundary.test.js
│ │ └── __snapshots__
│ │ └── ErrorBoundary.test.js.snap
│ └── App.js
│ └── App.scss
│ └── App.test.js
│ └── index.js
│ └── index.test.js
│ └── pushNotifications.js
│ └── setupTests.js
└── .babel.rc
└── .env
└── .gitinore
├── README.md
├── package-lock.json
├── package.json
├── sonar-project.properties└── webpack.config.js
└── webpack.config.js
```

## Main Dependencies

- `react-redux`-To hold redux,
- `axios`-used for handling apis
