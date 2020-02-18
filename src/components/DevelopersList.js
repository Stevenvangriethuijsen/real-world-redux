import React from "react";
import { connect } from "react-redux";
import { developersFetched } from "../store/developersActions";
import { fetchDevelopers } from "../store/developersActions";

class DevelopersList extends React.Component {
  // state = {
  //   loading: true
  // };

  // componentDidMount() {
  //   fetch(
  //     "https://codaisseur-coders-network.herokuapp.com/developers?offset=10&limit=20"
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("this should be all the data", data);
  //       // data is object with two properties count and rows, rows holds the array with information we need
  //       console.log(data.rows);
  //       this.props.dispatch(developersFetched(data.rows));
  //     });
  // }

  componentDidMount() {
    console.log("I Should be number one. Smash hit");
    this.props.dispatch(fetchDevelopers);
  }

  render() {
    if (!this.props.developers) {
      return <div>Loading...</div>;
    } else
      return (
        <div>
          <div>We have {this.props.developers.length} developers by now!</div>
          <ul>
            {this.props.developers.map(dev => {
              return (
                <li>
                  {dev.name}, e-mail: {dev.email}
                </li>
              );
            })}
          </ul>
        </div>
      );
  }
}

function mapStateToProps(reduxState) {
  return {
    developers: reduxState.developers
  };
}

export default connect(mapStateToProps)(DevelopersList);
