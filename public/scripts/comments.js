var data = [
  { id: 1, author: "Misa", text: "In LA at the moment!" },
  { id: 2, author: "Phee", text: "In *San Diego Pride!*" }
];

var Comment = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div className="comments">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <h4 dangerouslySetInnerHTML= {this.rawMarkup()} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div> {commentNodes} </div>
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
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById("content")
);
