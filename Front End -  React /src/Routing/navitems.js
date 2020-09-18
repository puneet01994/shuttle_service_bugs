export default {
  items: [
    {
      title: true,
      name: "DashBoard",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    },
    {
      name: "Night Cab",
      url: "/dashboard/CabRequests",
      icon: "icon-user",
      children: [
        {
          name: "Night Cab Requests",
          url: "/dashboard/CabRequests",
          icon: "icon-user"
        },
        {
          name: "Night Cab History",
          url: "/dashboard/CabHistory",
          icon: "icon-user"
        }
      ]
    },
    {
      name: "Client Status",
      url: "/dashboard/EmployeeStatus",
      icon: "icon-user"
    },
    {
      name: "Trips",
      url: "/dashboard/Routes",
      icon: "icon-rocket"
    },

    {
      name: "Routes",
      url: "/dashboard/Routes",
      icon: "icon-pencil"
    },
    {
      name: "Client Locations",
      url: "/dashboard/locationList",
      icon: "icon-paper-plane"
    },

    {
      name: "Vehicle",
      url: "/dashboard/Vehicle",
      icon: "icon-plane",
      children: [
        {
          name: "Vehicle Info",
          url: "/dashboard/Vehicle",
          icon: "icon-drop"
        },
        {
          name: "Vehicle Routes",
          url: "/dashboard/VehicleRoutes",
          icon: "icon-drop"
        },
        {
          name: "Vehicle Status",
          url: "/dashboard/VehicleStatus",
          icon: "icon-drop"
        }
      ]
    },
    {
      name: "Contact Us",
      url: "/dashboard/contactUs",
      icon: "icon-bell"
    }
  ]
};
