import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Board from "../components/Board";
import BoardHeader from "../components/BoardHeader";

class BoardContainer extends Component {
	render() {
		console.log("STATE", this.props.state);
		return (
			<div className="board-wrapper">
				<BoardHeader boardTitle={this.props.boardTitle} />
				<Board />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		state: state,
		boardTitle: state.boardToShow.board_title
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

BoardContainer.propTypes = {};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(BoardContainer)
);
