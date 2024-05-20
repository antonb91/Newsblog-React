import { IPost } from '../../../types';
import LikeDislike from '../../Icons/LikeDislike/LikeDislike';
import BookMark from '../../Icons/BookMark/BookMark';
import MoreIcon from '../../Icons/MoreIcon/MoreIcon';

const getDate = (postDate: string) => {
  const monthsMap = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(postDate);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${monthsMap[month - 1]} ${day}, ${year}`;
};

const PostSmall = ({
  id,
  image,
  text,
  date,
  lesson_num,
  title,
  author,
}: IPost) => {
  const postDate = getDate(date);
  return (
    <div className="post__small" data-author={author} id={id.toString()}>
      <article className="post__small-article">
        <div className="post__small-content">
          <span className="post__date">{postDate}</span>
          <h1 className="post__small-title">{title}</h1>
          <p className="post__small-text">{text}</p>
        </div>
        <img className="post__small-img" src={image} alt="img name" />
      </article>
      <div className="icons__footer">
        <div className="icons__footer-like-block">
          <LikeDislike isUp={true} />
          <LikeDislike isUp={false} />
        </div>
        <div className="icons__footer-mark-block">
          <BookMark />
          <MoreIcon />
        </div>
      </div>
    </div>
  );
};

export { PostSmall }