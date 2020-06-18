import request from '../utils/request';

export function query() {
  return request('http://localhost:8000/api/name');
}

// "http://localhost:8000/api/data"