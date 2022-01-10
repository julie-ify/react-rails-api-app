import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelctor, createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';

function getThings() {
  console.log('getThings() Action!!')
  return {
    type: GET_THINGS_REQUEST,
  };
};

class HelloWorld extends React.Component {
  render() {
    const { things } = this.props;
    const thingsList = things.map((thing, index) => {
      return <li key={index}>{thing.name} {thing.guid}</li>
    })
    return (
    <React.Fragment>
      Greeting: {this.props.greeting}
      <button onClick={() => this.props.getThings()}>getThings</button>
      <br />
      <ul>{thingsList}</ul>
      <h1>Hello</h1>
    </React.Fragment>
    );
  }
}

const structuredSelctor = createStructuredSelector({
  things: state => state.things
});

const mapDispatchToProps = { getThings };

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};
export default connect(structuredSelctor, mapDispatchToProps)(HelloWorld);
