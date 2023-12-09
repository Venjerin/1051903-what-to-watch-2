import { MoreLike } from '../more-like-this/more-like-this';

type VideoPlayerProps = {
  film: MoreLike;
};

const VideoPlayer = ({ film }: VideoPlayerProps) => (
  <video src={film.previewVideoLink} autoPlay muted width="280" height="175" />
);
export default VideoPlayer;
