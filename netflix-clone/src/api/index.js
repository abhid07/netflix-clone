const netflix_url = "https://api.themoviedb.org/3";

export const netflix_requests = {
  netflix_originals: `${netflix_url}/trending/tv/day?api_key=${process.env.REACT_APP_KEY}`,
  trending_all: `${netflix_url}/trending/all/day?api_key=${process.env.REACT_APP_KEY}&language=en-U`,
};
