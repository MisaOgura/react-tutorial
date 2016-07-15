var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello World! This is a CommentBox.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById("content")
);
