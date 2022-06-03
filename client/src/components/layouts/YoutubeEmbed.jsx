import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="relative h-[260px] sm:h-[380px] lg:h-[450px] xl:h-[530px] 2xl:h-[630px]">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow=" autoplay; encrypted-media"
        allowFullScreen
        title="Embedded youtube"
      ></iframe>
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
