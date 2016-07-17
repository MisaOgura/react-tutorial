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
  getInitialState: function() {
    return { author: "", text: "" }
  },
  handleAuthorChange: function(e) {
    this.setState({ author: e.target.value })
  },
  handleTextChange: function(e) {
    this.setState({ text: e.target.value })
  },
  render: function() {
    return (
      <form className="commentForm">
        <input type="text"
               placeholder="your name..."
               value={this.state.author}
               onChange={this.handleAuthorChange} />
        <input type="text"
               placeholder="type your comment"
               value={this.state.text}
               onChange={this.handleTextChange} />
        <input type="submit" value="Post" />
      </form>
    )
  }
});

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, "Message: " + err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm />
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById("content")
);
