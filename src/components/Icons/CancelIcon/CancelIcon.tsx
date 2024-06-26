import './CancelIcon.css';
import { Cancel } from '../../../types';
import { MouseEventHandler } from 'react';

const CancelIcon = ({ isActive = false, onClick }: { isActive?: boolean; onClick?: () => void; }) => {
  return (
    <div
      className={`cancel-icon-block ${isActive ? '' : 'cancel-icon-block-hidden'}`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        width="14px"
        height="14px"
        fill="white"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6569 10.2426L7.41421 5.99999L11.6569 1.75735C12.0472 1.36702 12.0472 0.733456 11.6569 0.343133C11.2665 -0.0471895 10.633 -0.0471895 10.2426 0.343133L6 4.58577L1.75736 0.343133C1.36704 -0.0471895 0.733469 -0.0471895 0.343146 0.343133C-0.0471771 0.733456 -0.0471771 1.36702 0.343146 1.75735L4.58579 5.99999L0.343146 10.2426C-0.0478838 10.6337 -0.0471771 11.2665 0.343146 11.6568C0.733469 12.0472 1.36633 12.0479 1.75736 11.6568L6 7.4142L10.2426 11.6568C10.6337 12.0479 11.2665 12.0472 11.6569 11.6568C12.0472 11.2665 12.0479 10.6337 11.6569 10.2426Z"
          fill="white"
        />
      </svg>
    </div>
  );
};


export { CancelIcon };