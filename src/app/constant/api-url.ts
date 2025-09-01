import { environment } from '../../environments/environment.development';

export const API_URLS = {
  Products: `${environment.baseUrl}products`,
  productById : `${environment.baseUrl}products/`,
  auth : `${environment.baseUrl}auth/login`,
  search : `${environment.baseUrl}products/search?q=`
};
