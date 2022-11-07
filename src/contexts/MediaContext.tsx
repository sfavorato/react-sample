import React, { createContext, useState } from "react";
import { MediaControl, VideoState } from "../types";

type Props = {
  children: React.ReactNode;
};

export const MediaContext = createContext<[MediaControl, React.Dispatch<React.SetStateAction<MediaControl>>]>(null!);

export const MediaContextProvider: React.FC<Props> = ({ children }) => {
  const state = useState<MediaControl>({ state: VideoState.HIDDEN });

  return <MediaContext.Provider value={state}>{children}</MediaContext.Provider>;
};
