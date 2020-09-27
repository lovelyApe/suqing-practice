export const DEBUG: boolean = false;
const prefix: string = `${ DEBUG ? '' : 'http://uni-app-eating-group/' }`;
const api = {
  getUserInfo: `${prefix}/user/getUserInfo`,
};
export default api;
