import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import "./RecentBlogs.css";

const RecentBlogs = ({ className = "" }) => {
  return (
    <div className={`recent-blogs ${className}`}>
      <h1 className="recent-blogs1">Recent Blogs</h1>
      <div className="blog-items">
        <GroupComponent />
        <GroupComponent />
        <GroupComponent />
        <GroupComponent />
        <GroupComponent />
      </div>
    </div>
  );
};

RecentBlogs.propTypes = {
  className: PropTypes.string,
};

export default RecentBlogs;
