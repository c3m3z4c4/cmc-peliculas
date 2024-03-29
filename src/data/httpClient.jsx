// eslint-disable-next-line react-refresh/only-export-components
const API = 'https://api.themoviedb.org/3';
const API_KEY =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmI4OGRhODg0ZDY1YTE4ZmI1NGYyMjU4YjJkZmRiYSIsInN1YiI6IjY2MDVkNTMyMjgzZWQ5MDE3YzE3YzExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MP2r6OHFT60XrVNi1W5mOB8CyxAjm4l82TqElp29KnI';

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
    }).then((response) => response.json());
}
