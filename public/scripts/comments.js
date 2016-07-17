var Comment = React.createClass({
  render: function() {
    var md = new Remarkable();
    return (
      <div className="comments">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <h4> {md.render(this.props.children.toString())} </h4>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function( ){
    return (
      <div className="commentList">
        <Comment author="Misa Ogura">  This is Comment 1 </Comment>
        <Comment author="Clems"> This is Comment 2 </Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        This is a CommentForm.
      </div>
    )
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById("content")
);
