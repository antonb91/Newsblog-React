import { IPost } from '../../../types';
import LikeDislike from '../../Icons/LikeDislike/LikeDislike';
import BookMark from '../../Icons/BookMark/BookMark';
import MoreIcon from '../../Icons/MoreIcon/MoreIcon';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts';

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

const PostDetail = ({
  id,
  image,
  text,
  date,
  lesson_num,
  title,
  author,
}: IPost) => {
  const { theme } = useContext(ThemeContext);
  console.log(theme)
  const postDate = getDate(date);
  return (
    <div className={`post__detail post_${theme}`} data-author={author} id={id.toString()}>
      <article className="post__detail-article">
        <div className="post__detail-content">
          <span className="post__date">{postDate}</span>
          <h1 className="post__detail-title">{title}</h1>
          <p className="post__detail-text">{text}</p>
        </div>
        <img className="post__detail-img" src={image} alt="img name" />
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

export { PostDetail }