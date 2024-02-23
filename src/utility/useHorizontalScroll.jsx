import { useState, useEffect, useRef } from "react";

const useHorizontalScroll = () => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const contentWidth = container.scrollWidth;
    const containerWidth = container.clientWidth;

    // Calculate the maximum scroll position
    const newMaxScroll = contentWidth - containerWidth;
    setMaxScroll(newMaxScroll);
  }, [scrollContainerRef]);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const newPosition = Math.max(0, scrollPosition - 180);
      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };
  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const newPosition = Math.min(maxScroll, scrollPosition + 180);
      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };
  return {
    scrollContainerRef: scrollContainerRef,
    scrollLeft: scrollLeft,
    scrollRight: scrollRight,
  };
};

export default useHorizontalScroll;
