function Comment({ comment }) {
  return (
    <div className='comment-container'>
      <div className='comment-icon'>
        <UilCommentAltLines size="20" />
      </div>
      <div className='comment-text'>
        {comment.text}
      </div>
    </div>
  );
}

export default Comment;