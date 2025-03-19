import axios from 'axios';

export const accountAPI = axios.create({
  baseURL: 'http://192.168.1.35:5566',
});

export const testUserId = 'c936f907-a116-4006-a3ef-28e254fdfa36';
