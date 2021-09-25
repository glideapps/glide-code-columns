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

const run: Column = async (link) => {
  if (link.value === undefined) {
    return undefined;
  }
  return thumbnailFromLink(link.value);
};

const YouTubeThumbnailColumn = () => (
  <ColumnComponent
    name="YouTube Thumbnail"
    description="Display a thumbnail image for a YouTube video link."
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
  />
);

export default YouTubeThumbnailColumn;
