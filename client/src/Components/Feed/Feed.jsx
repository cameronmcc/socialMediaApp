import Post from '../Post/Post';
import { Users, Posts } from '../../Data/Data';
import './style.css';

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feed__wrapper'>
        {Posts.map((Posts) => (
          <Post key={Posts.id} post={Posts} />
        ))}
      </div>
    </div>
  );
}
