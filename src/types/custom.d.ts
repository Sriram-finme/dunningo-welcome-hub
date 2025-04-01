
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// Extend Window interface to include potential global variables
interface Window {
  dataLayer?: any[];
}
