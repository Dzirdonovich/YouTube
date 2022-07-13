import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/Slices/ContentSlice";
import { createRef, useEffect, useRef } from "react";
import { axiosData, setData } from "../../redux/Slices/FormSlice";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAddVideosMutation } from "../../redux/VideosApi";

const Form = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.content.videos);
  const form = useRef(null);
  const sendData = {};
  const user = useSelector((state) => state.main.user);

  const data = useSelector((state) => state.form.data);
  const [addVideos, {}] = useAddVideosMutation();
  const handleSendData = (sendData) => {
    sendData.title = form.current[1].value;
    sendData.video = form.current[0].value;
    sendData.author = user.name;
    sendData.watch = 0;
    return sendData;
  };

  const handleAddVideo = async (data) => {
    await dispatch(setData(sendData));
    if (data) {
      await addVideos({
        video: data.video,
        title: data.title,
        author: data.author,
        watch: data.watch,
      }).unwrap();
    }
  };

  return (
    <form
      onClick={() => {
        console.log(data, "data");
      }}
      ref={form}
    >
      <input id="url" type="text" placeholder="Ссылка на видео" />
      <input id="title" type="text" placeholder="Название видео" />

      <Link
        to="/"
        onClick={async () => {
          await handleAddVideo(handleSendData(sendData));
        }}
      >
        send
      </Link>
    </form>
  );
};
export default Form;
