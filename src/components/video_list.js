import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {
  const videoList = props.videos.map(video => {
    return (
      <VideoListItem
        video={video}
        key={video.etag}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });
  return <ul className="col-md-4 list-group">{videoList}</ul>;
};
export default VideoList;
