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
  render: function( ){
    return (
      <div className="commentList">
        <Comment author="Misa Ogura">  This is *Comment 1* </Comment>
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
