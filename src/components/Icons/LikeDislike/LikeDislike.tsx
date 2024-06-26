import './LikeDislike.css';
import { IStoreState } from '../../../types';
import { useSelector } from 'react-redux';


const LikeDislike = ({ isUp, className, stroke }: { isUp: boolean, className?: string, stroke?: string }) => {
  const theme = useSelector((state: IStoreState) => state.ui.theme)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 23"
      width="22px"
      height="23px"
      fill="none"
      className={isUp ? 'up' : 'down'}
    >
      <path
        stroke={stroke}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.292 19.65C18.218 20.136 17.794 20.5 17.292 20.5H17.28H7V10.712L10.608 2.594C11.415 2.852 12 3.608 12 4.5V8.5C12 9.052 12.447 9.5 13 9.5H18.674C18.728 9.502 18.78 9.503 18.832 9.511C19.097 9.551 19.33 9.692 19.488 9.907C19.646 10.122 19.712 10.385 19.672 10.648L18.292 19.65ZM5 20.5H3C2.449 20.5 2 20.051 2 19.5V12.5C2 11.948 2.449 11.5 3 11.5H5V20.5ZM21.099 8.72C20.623 8.075 19.925 7.654 19.132 7.533C18.972 7.509 18.814 7.504 18.66 7.5H14V4.5C14 2.294 12.206 0.5 10 0.5C9.605 0.5 9.247 0.733 9.086 1.093L5.35 9.5H3C1.346 9.5 0 10.845 0 12.5V19.5C0 21.154 1.346 22.5 3 22.5H17.269H17.304C18.776 22.5 20.048 21.409 20.269 19.951L21.648 10.95C21.77 10.157 21.574 9.366 21.099 8.72Z"
        fill="#313037"
      />
    </svg>
  );
};

export default LikeDislike;