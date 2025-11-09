import './App.css';
import classes from './styles/Home.module.scss'
import { posts } from './data/posts.js';

export default function App() {

  const postInfo = posts.map((post) => {
    return (
      <li className={classes.list} key={post.id}>
        <div className={classes.post}>
          <div>
            <div className={classes.postInfo}>
              <div className={classes.postDate}>{ new Date(post.createdAt).toLocaleDateString('ja-JP') }</div>
              <div className={classes.postCategories}>
                {post.categories.map((category) => <div className={classes.postCategory}>{category}</div>)}
              </div>
            </div>
            <p className={classes.postTitle}>{ post.title }</p>
            <div className={classes.postBody}>{ post.content }</div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <>
      <div className={classes.container}>
        <ul>{postInfo}</ul>
      </div>
    </>
  );
}
