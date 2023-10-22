import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {post.title}
        </h3>
        <UserInfo user={post.user} />
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      {post.comments.length === 0
        ? (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )
        : <CommentList comments={post.comments} />
      }
    </div>
  </>
);