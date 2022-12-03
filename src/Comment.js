import './Comment.css';
import { UilCommentAltLines } from '@iconscout/react-unicons'

function Comment({ comment }) {
  return (
    <div className='comment-container'>
      <div className='comment-icon'>
        <UilCommentAltLines size="20" />
      </div>
      <div className='comment-text'>
        {/* The comment text goes here */}
      </div>
    </div>
  );
}

export default Comment;