import classes from "./index.module.scss";
import cn from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/Slices/ContentSlice";
import { useGetVideosQuery } from "../../redux/VideosApi";

const Content = ({ one }) => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.content.videos);
  const { data = [] } = useGetVideosQuery();
  return (
    <div
      className={
        one ? cn(classes.content, classes.contentOne) : classes.content
      }
    >
      {data.map((index) => (
        <div className={classes.video__item}>
          <iframe
            src={index.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={classes.video__text}>
            <div className={classes.video__title}>{index.title}</div>
            <div className={classes.video__subtitle}>{index.author}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
