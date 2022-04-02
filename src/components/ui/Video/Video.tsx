import React from 'react';

import styles from './Video.module.css'

type Props = {
    width?: string;
    url: string;
    title: string;
  }
  
export const Video: React.VFC<Props> = ({
  width,
  url,
  title
}) => {
    return (
      <div
        style={width? {width: width}: {}}
        className={styles.video}
      >
        <iframe
          // width="560"
          // height="315"
          className={styles.video__content}
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }