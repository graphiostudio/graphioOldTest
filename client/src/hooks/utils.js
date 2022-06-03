import { useState } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  const media = window.matchMedia(query);

  if (media.matches !== matches) {
    setMatches(media.matches);
  }
  return media.matches;
}
