const env = import.meta.env;

const PHONE = env.VITE_PHONE_NUMBER || '+919940078793';
const WHATSAPP = env.VITE_WHATSAPP_NUMBER || '919940078793';

export const siteConfig = {
  name: env.VITE_APP_NAME || 'AS Enterprises',
  tagline: 'Premium Mosquito Mesh Solutions',
  servingSince: 2018,
  homesProtected: 500,

  siteUrl: env.VITE_SITE_URL || 'https://asenterprises.in',

  phone: PHONE,
  phoneDisplay: PHONE.replace('+91', '+91 '),
  whatsapp: WHATSAPP,
  email: env.VITE_CONTACT_EMAIL || 'as.enterprisestamilnadu@gmail.com',

  whatsappMessage:
    'Hello AS Enterprises, I am interested in mosquito mesh installation. Please share details.',

  address: {
    line1: 'AS Enterprises',
    line2: 'No.10/1, T.H.Road, Kodungaiyur',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600118',
    country: 'India',
  },

  hours: 'Mon - Sat, 9:30 AM - 7:00 PM',

  mapEmbedUrl:
    env.VITE_GOOGLE_MAP_URL ||
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d242.8454945241136!2d80.24598097339158!3d13.12906585057735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1779457751807!5m2!1sen!2sin',
  mapDirectionsUrl:
    'https://maps.app.goo.gl/jmrCfX4J8vaa6YLR6',

  social: {
    instagram: 'https://www.instagram.com/as.enterprisestamilnadu',
    youtube: 'https://www.youtube.com/@AS_Enterprises_Netlon',
    whatsapp: `https://wa.me/${WHATSAPP}`,
  },
};
