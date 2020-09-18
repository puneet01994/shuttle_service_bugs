import React from "react";
import HomeUI from "./HomeUI";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { getHomePageCard, getStatusTable } from "../../Redux/actions/GET-API";
import logger from "../Pages/Logger";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  /**rendering the home component */
  componentDidMount() {
    this.props.getStatusTable().then((response) => {
      this.props.getHomePageCard();
    });
    logger.info("Home page cards data-", {
      data: [
        this.props.statu,
        this.props.status1,
        this.props.status2,
        this.props.status3,
      ],
    });
  }

  /*
   *selects the table and displays the data based on the value given
   */
  selectedTable = (data) => {
    this.setState({
      value: data,
      isLoading: false,
    });
  };

  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of HomeUI
       */
      <div data-test="HomeUI">
        <HomeUI
          isLoading={this.state.isLoading}
          selectedTable={this.selectedTable}
          value={this.state.value}
          cardsData={this.props.cardsData}
          tablesData={this.props.tablesData}
        
        />
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    cardsData: state.homePageCardReducer.cardsData,
    tablesData: state.statusTableReducer.tablesData,
    token: state.userReducer.tokken,
  };
}

export default connect(mapStateToProps, { getHomePageCard, getStatusTable })(
  Home
);

Home.propTypes = {
  status: PropTypes.number,
  status1: PropTypes.number,
  status2: PropTypes.number,
  status3: PropTypes.number,
  token: PropTypes.string,
  getHomePageCard: PropTypes.func,
  getStatusTable: PropTypes.func,
};
