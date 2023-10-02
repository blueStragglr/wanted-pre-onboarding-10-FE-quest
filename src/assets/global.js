import { fontFacePretendard } from "@/styles/fonts";
import { fontSize, fontWeight } from "@/styles/typography";
import { css } from "@emotion/react";

export const globalStyle = css`
  * {
    box-sizing: border-box !important;
    padding: 0;
    margin: 0;
    font: inherit;
    font-family: Pretendard;
    font-weight: ${fontWeight.normal};
    color: inherit;
    word-wrap: break-word;
    word-break: keep-all;
  }

  button {
    all: unset;
    cursor: pointer;

    font-weight: ${fontWeight.bold};

    :hover {
      opacity: 0.8;
    }
  }

  li,
  ul {
    list-style: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  a {
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  h1 {
    font-size: ${fontSize.h1};
    font-weight: ${fontWeight.bold};
  }
  h2 {
    font-size: ${fontSize.h2};
    font-weight: ${fontWeight.bold};
  }
  h3 {
    font-size: ${fontSize.h3};
    font-weight: ${fontWeight.bold};
  }
  h4 {
    font-size: ${fontSize.h4};
    font-weight: ${fontWeight.bold};
  }
  h5 {
    font-size: ${fontSize.h5};
  }

  /* about font */
  ${fontFacePretendard}
`;
