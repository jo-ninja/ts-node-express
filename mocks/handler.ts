import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3001/coba', () => {
    return HttpResponse.json({
      id: 1,
      coba: 'cobaaaa',
    });
  }),
];
