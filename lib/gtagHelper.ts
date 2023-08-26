export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const pageview = (GA_ID: string, url: string) => {
  console.log('url', url);
  window.gtag('config', GA_ID, {
    page_path: url,
  });
};
