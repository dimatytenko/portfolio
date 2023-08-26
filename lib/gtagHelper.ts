export const GA_ID = process.env.GA_MEASUREMENT_ID;

export const pageview = (GA_ID: string, url: string) => {
  window.gtag('config', GA_ID, {
    page_path: url,
  });
};
