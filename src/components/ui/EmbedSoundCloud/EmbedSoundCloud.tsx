import React from 'react';

type Props = {
    embedUrl: string;
    artistHref: string;
    songHref: string;
    artistName: string;
    songName: string;
    size?: Partial<{
        width: string;
        height: string;
    }>
}

export const EmbedSoundCloud: React.VFC<Props> = ({embedUrl, artistHref, songHref, artistName, songName, size}) => {
    const DEFAULT_EMBED_WIDTH = "100%"
    const DEFAULT_EMBED_HEIGHT = "300px"

    return (
        <>
            <iframe
                width={size && size.width || DEFAULT_EMBED_WIDTH}
                height={size && size.height || DEFAULT_EMBED_HEIGHT}
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={embedUrl}
            />
            <div
                style={{fontSize: "10px", color: "#cccccc",lineBreak: "anywhere",wordBreak: "normal",overflow: "hidden",whiteSpace: "nowrap",textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}
            >
                <a
                    href={artistHref}
                    title={artistName}
                    target="_blank"
                    style={{color: "#cccccc", textDecoration: "none"}}
                >{artistName}</a> · <a href={songHref}
                    title={songName}
                    target="_blank"
                    style={{color: "#cccccc", textDecoration: "none"}}
                >{songName}</a>
            </div>
        </>
    )
}