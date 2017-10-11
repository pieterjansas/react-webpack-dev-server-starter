import fetch from 'isomorphic-fetch';

export default function getFacts(){
    return fetch('./facts.json')
    .then(res => res.json());
}