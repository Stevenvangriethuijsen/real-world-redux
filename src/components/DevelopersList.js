import React from "react";
import { connect } from "react-redux";

class DevelopersList extends React.Component {
  state = {
    loading: true,
    developers: []
  };

  componentDidMount() {
    fetch(
      "https://codaisseur-coders-network.herokuapp.com/developers?offset=10&limit=20"
    )
      .then(res => res.json())
      .then(data => {
        console.log("this should be all the data", data);
        // data is object with two properties count and rows, rows holds the array with information we need
        console.log(data.rows);
        this.setState({ developers: data.rows, loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else
      return (
        <div>
          <div>We have {this.state.developers.length} developers by now!</div>
          <ul>
            {this.state.developers.map(dev => {
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
    users: reduxState.developersReducer
  };
}

export default connect(mapStateToProps)(DevelopersList);
