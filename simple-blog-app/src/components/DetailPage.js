import classes from '../styles/Detail.module.scss'
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';

export default function DetailPage() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) return <div>投稿が見つかりません</div>;

  return (
    <div className={classes.container}>
      <div className={classes.post}>
        <div className={classes.postImage}><img src={ post.thumbnailUrl } /></div>
        <div className={classes.postContent}>
          <div className={classes.postInfo}>
            <div className={classes.postDate}>{ new Date(post.createdAt).toLocaleDateString('ja-JP') }</div>
            <div className={classes.postCategories}>
              { post.categories.map((category, index) => <div className={classes.postCategory} key={`${post.id}-${index}`}>{category}</div>) }
            </div>
          </div>
          <div className={classes.postTitle}>{ post.title }</div>
          <div className={classes.postBody} dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
}