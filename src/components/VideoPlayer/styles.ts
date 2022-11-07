import styled, { css } from "styled-components";

import { VideoState } from "../../types";
import { Props } from "./types";

export const VideoContainer = styled.div<Props>`
  background: black;
  cursor: pointer;

  &:hover {
    > div {
      transition: 0.5s ease-in-out;
      opacity: 0.3;
    }
  }

  ${({ state }) =>
    state === VideoState.HIDDEN &&
    css`
      display: none;
    `}

  ${({ state }) =>
    state === VideoState.MINIMIZED &&
    css`
      position: absolute;
      right: 25px;
      bottom: 25px;
      width: 360px;
      height: auto;
    `}

    ${({ state }) =>
    state === VideoState.MAXIMIZED &&
    css`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    `}
`;

export const Overlay = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0;
`;

export const StyledVideo = styled.video<Props>`
  height: 100%;
  width: 100%;
`;
