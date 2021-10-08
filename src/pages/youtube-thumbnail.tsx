import { Column, ColumnComponent } from "../glide.next";

function videoIDFromLink(link: string): string | undefined {
  const match = link.match(
    /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]{10,12})/
  );
  return match?.[1];
}

function thumbnailFromLink(link: string): string | undefined {
  const id = videoIDFromLink(link);
  return id === undefined
    ? undefined
    : `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
}

const run: Column = async link => {
  if (link.value === undefined) {
    return undefined;
  }
  return thumbnailFromLink(link.value);
};

const YouTubeThumbnailColumn = () => (
  <ColumnComponent
    name="YouTube Thumbnail"
    description="Display video thumbnail images"
    author="David Siegel <david@glideapps.com>"
    params={{
      videoUrl: {
        displayName: "Video URL",
        type: "uri",
      },
    }}
    result={{ type: "image-uri" }}
    example={{ videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }}
    run={run}
    icon={`
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.5 14.4C47.5 14.4 47 11.1 45.6 9.59998C43.8 7.69998 41.7 7.69998 40.8 7.59998C34.1 7.09998 24 7.09998 24 7.09998C24 7.09998 13.9 7.09998 7.2 7.59998C6.3 7.69998 4.2 7.69998 2.4 9.59998C1 11.1 0.5 14.4 0.5 14.4C0.5 14.4 0 18.3 0 22.2V25.8C0 29.7 0.5 33.6 0.5 33.6C0.5 33.6 1 36.9 2.4 38.4C4.2 40.3 6.6 40.3 7.7 40.5C11.5 40.9 24 41 24 41C24 41 34.1 41 40.8 40.5C41.7 40.4 43.8 40.4 45.6 38.5C47 37 47.5 33.7 47.5 33.7C47.5 33.7 48 29.8 48 25.9V22.3C48 18.3 47.5 14.4 47.5 14.4ZM19 30.2V16.7L32 23.5L19 30.2Z" fill="currentColor"/>
</svg>
    `}
  />
);

export default YouTubeThumbnailColumn;
