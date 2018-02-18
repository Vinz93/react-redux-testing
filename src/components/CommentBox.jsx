 import React, { Component } from 'react';

 class CommentBox extends Component {
   constructor(props) {
     super(props);
     this.state = { comment: '' };
   }
   handleChange(event) {
     this.setState({ comment: event.target.value });
   }
   render() {
     return(
       <div className="comment-box">
         <textarea
           onChange={this.handleChange.bind(this)}
           value={this.state.comment}
          />
         <button>Submit Comment</button>
        </div>
     )
   }
 }

 export default CommentBox;
