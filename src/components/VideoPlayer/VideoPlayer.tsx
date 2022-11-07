import { MediaPlayer } from "dashjs";
import React, { useContext, useRef } from "react";

import { MediaContext } from "../../contexts";
import { VideoState } from "../../types";
import { StyledVideo, Overlay, VideoContainer } from "./styles";
import { Props } from "./types";

// TODO: Design a proper control overlay

const SAMPLE_URL = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";

const mediaPlayer = MediaPlayer().create();

const mediaTracker = {
  mediaPlayer,
  time: 0
};

export const VideoPlayer: React.FC<Props> = props => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [media, setMedia] = useContext(MediaContext);

  if (videoRef?.current) {
    mediaPlayer.initialize(videoRef.current, SAMPLE_URL, true, mediaTracker.time);
  }

  const handleClick = () => {
    const { state, data } = media;
    mediaTracker.time = mediaPlayer.time();
    setMedia({ state: state === VideoState.MAXIMIZED ? VideoState.MINIMIZED : VideoState.MAXIMIZED, data });
  };

  return (
    <VideoContainer state={media.state}>
      <Overlay></Overlay>
      <StyledVideo ref={videoRef} state={media.state} onClick={() => handleClick()}></StyledVideo>
    </VideoContainer>
  );
};
