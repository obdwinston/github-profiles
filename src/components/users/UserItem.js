import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card shadow-md compact side bg-base-200">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-16 h-16">
              <img src={avatar_url} alt="Avatar" />
            </div>
          </div>
        </div>
        <div>
          <div className="card-title">{login}</div>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
