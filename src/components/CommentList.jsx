import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => {
  const list = comments.map((comment, i) => <li key={i}>{comment}</li>);
  return (
    <ul className="comment-list">{ list }</ul>
  );
};

function mapStateToProps(state) {
  return { comments: state.comments };
}
export default connect(mapStateToProps)(CommentList);
