'use client';

import ScrollToTop from 'react-scroll-to-top';

export const ButtonToTop = () => {
  return (
    <ScrollToTop
      smooth
      svgPath={
        'M3.69236 22.7537L12.2814 3.492C12.9697 1.94733 15.0289 1.94733 15.7184 3.492L24.3074 22.7537C25.0855 24.4978 23.3577 26.3085 21.7384 25.444L14.8504 21.7667C14.3149 21.4808 13.6837 21.4808 13.1494 21.7667L6.26136 25.444C4.64203 26.3073 2.91303 24.499 3.69236 22.7537Z'
      }
      viewBox={'0 0 28 28'}
      color={'#AD00FF'}
      top={200}
    />
  );
};
