import React from 'react';

type Props = {
    embedUrl: string;
    artistHref: string;
    songHref: string;
    artistName: string;
    songTitle: string;
    className?: string;
    size?: Partial<{
        width: string;
        height: string;
    }>
    id: string;
}

export const EmbedSoundCloud: React.VFC<Props> = ({
    embedUrl,
    artistHref,
    songHref,
    artistName,
    songTitle,
    size,
    className,
    id
}) => {
    const DEFAULT_EMBED_WIDTH = "100%"
    const DEFAULT_EMBED_HEIGHT = "450px"

    return (
        <div className={className}>
            <iframe
                width={size && size.width || DEFAULT_EMBED_WIDTH}
                height={size && size.height || DEFAULT_EMBED_HEIGHT}
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={embedUrl}
                title="soundcloud"
                id={id}
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
                    title={songTitle}
                    target="_blank"
                    style={{color: "#cccccc", textDecoration: "none"}}
                >{songTitle}</a>
            </div>
        </div>
    )
}