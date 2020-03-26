import React from "react";
import Post from "./Post";
import "./PostFeed.scss";

const PostFeed = ({ photos }) => (
  <div className="container">
    <div className="articles">
      {photos.map(photo => (
        <Post
          key={photo.id}
          path={photo.urls.raw}
          description={photo.description}
          alt={photo.alt_description}
          date={photo.updated_at}
          link={photo.links.html}
          likes={photo.likes}
          userName={photo.user.name}
          userPhoto={photo.user.profile_image.medium}
          userLocation={photo.user.location}
        />
      ))}
    </div>
  </div>
);

export default PostFeed;
