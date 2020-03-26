import React, { Component } from "react";
import Moment from "react-moment";
import { FaThumbsUp, FaMapMarkerAlt } from "react-icons/fa";
import "./Post.scss";

class Post extends Component {
  render() {
    const {
      path,
      description,
      alt_description,
      date,
      link,
      likes,
      userName,
      userPhoto,
      userLocation
    } = this.props;
    return (
      <article className="article">
        <a href={link}>
          <header className="article__header">
            <div className="article__author-photo">
              <img src={userPhoto} alt={userName} />
            </div>
            <div className="article__author">{userName}</div>
            <span className="article__date">
              <Moment fromNow>{date}</Moment>
            </span>
          </header>
          <div className="article__body">
            <figure className="article__photo">
              <img src={`${path}&fit=crop&h=600&w=600`} alt={alt_description} />
            </figure>
            <p className="article__text">{description}</p>
          </div>
          <footer className="article__footer">
            <div className="article__likes">
              <FaThumbsUp />
              <span className="likes__count">{likes}</span>
            </div>
            <div className="article__location">
              <FaMapMarkerAlt />
              <span>{userLocation}</span>
            </div>
          </footer>
        </a>
      </article>
    );
  }
}

export default Post;
