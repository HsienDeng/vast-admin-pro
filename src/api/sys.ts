import { http } from '@/utils/http/axios';

export function testRequest() {
  return http.get({
    url: '/api/getCaptchaCode',
  });
}
