import { useState, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import Colors from '../../assets/style';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <Typography ref={countRef} sx={{ fontSize: { md: 48, xs: 36 }, fontWeight: 700, color: Colors.white }}>
      {count}{suffix}
    </Typography>
  );
};
export default AnimatedCounter;