import { MediaData } from "./MediaData";

export enum VideoState {
  HIDDEN = "hidden",
  MINIMIZED = "minimized",
  MAXIMIZED = "maximized"
}

export type MediaControl = {
  data?: MediaData;
  state: VideoState;
};
