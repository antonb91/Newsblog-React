import './Username.css';

const Username = ({
  username,
  className,
}: {
  username: string;
  className: string;
}) => {
  const getInitials: (names: string) => string = (names) =>
    names
      .split(' ')
      .map((name) => name[0].toUpperCase())
      .join('');
  return (
    <div className={className}>
      <div className="username">
        <div className="username__initials">{getInitials(username)}</div>
        <div className="username__fullname">{username}</div>
      </div>
    </div>
  );
};

export { Username };