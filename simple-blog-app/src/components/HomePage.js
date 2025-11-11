import classes from '../styles/Home.module.scss'
import { posts } from '../data/posts.js';
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className={classes.container}>
        <ul>
          {posts.map((post) => (
            <li className={classes.list} key={post.id}>
              <Link to={`/posts/${post.id}`} className={classes.link}>
                <div className={classes.post}>
                  <div>
                    <div className={classes.postInfo}>
                      <div className={classes.postDate}>{ new Date(post.createdAt).toLocaleDateString('ja-JP') }</div>
                      <div className={classes.postCategories}>
                        { post.categories.map((category, index) => <div className={classes.postCategory} key={`${post.id}-${index}`}>{category}</div>) }
                      </div>
                    </div>
                    <p className={classes.postTitle}>{ post.title }</p>
                    <div className={classes.postBody} dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}