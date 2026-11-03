import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',

  thresholds: {
    http_req_duration: ['p(95)<400'],
    http_req_failed: ['rate<0.01'],
  },
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export default function () {
  const health = http.get(`${BASE_URL}/`);

  check(health, {
    'Health check status is 200': (r) => r.status === 200,
  });

  const notes = http.get(`${BASE_URL}/notes`);

  check(notes, {
    'Notes endpoint status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
