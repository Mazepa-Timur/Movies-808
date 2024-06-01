// import { Cookies } from "react-cookie";
// const cookies = new Cookies();
// const API_MOVIES = {
//     foundMovies: async (request) => {
//       try {
//         const response = await fetch('http://localhost:8008/film/foundFilm', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(request),
//         })
//         const res = await response.json();
//         if (response.ok === false) {
//           throw res.message
//         } else {
//           return res;
//         }
//       } catch (error) {
//         console.error('hi-808: ', error);
//         return error
//       }
//     },
//     rating: async (request) => {
//       try {
//         const response = await fetch('http://localhost:8008/rating/createNewRating', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': cookies.get('access_token')
//           },
//           body: JSON.stringify(request),
//         })
//         const res = await response.json();
//         if (response.ok === false) {
//           throw res.message
//         }
//       } catch (error) {
//         console.error('hi-808: ', error);
//         return error
//       }
//     }
// }
//   export default API_MOVIES ;
  