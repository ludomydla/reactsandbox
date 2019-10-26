import React from "react";
import { Source, Dimensions } from "../types/definitions";

interface ImageProps {
  src: string;
  alt?: string;
  label?: string;
  simple?: boolean;
  source?: Source;
  dimensions?: Dimensions;
  className?: string;
}

type ImageState = {};

class Image extends React.Component<ImageProps, ImageState> {
  render() {
    const {
      src,
      alt,
      label,
      simple,
      source,
      dimensions,
      className
    } = this.props;

    if (simple) {
      return (
        <div className={className ? className : undefined}>
          <img src={src} alt={alt} />
        </div>
      );
    } else {
      return (
        <figure className={className ? className : undefined}>
          <img
            src={src}
            alt={alt}
            height={dimensions && dimensions.height}
            width={dimensions && dimensions.width}
          />
          <figcaption>
            {label}
            <cite>{source}</cite>
          </figcaption>
        </figure>
      );
    }
  }
}

export default Image;
