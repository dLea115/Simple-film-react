const fakeDatabase = {
  users: [
    { id: 1, username: "user1", password: "password123" },
    { id: 2, username: "user12", password: "password123" },
    { id: 3, username: "user123", password: "password123" },
    // Add more users if needed
  ],
  movies: [
    {
      id: 1,
      title: "Movie 1",
      description: "This is movie 1.",
      releaseDate: "2023-08-01",
      Actors: "A",
      imageSrc:
        "https://tr.web.img4.acsta.net/c_310_420/pictures/23/05/08/09/02/2465323.jpg",
      imdbLink: "https://www.imdb.com/title/tt15398776/",
    },
    {
      id: 2,
      title: "Movie 2",
      description: "This is movie 2.",
      releaseDate: "2023-07-02",
      Actors: "B",
      imageSrc:
        "https://m.media-amazon.com/images/M/MV5BMTM2NTU1ZTktNjc4YS00NjNhLWE4NmYtOTM2YjFjOGUzNmYzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpgttps://tickets.imagix.be/system/images/posters/000/000/905/medium.jpg?1684928515",
      imdbLink: "https://www.imdb.com/title/tt9224104",
    },
    {
      id: 3,
      title: "Movie 3",
      description: "This is movie 3.",
      releaseDate: "2023-07-22",
      Actors: "C",
      imageSrc: "https://www.barbie-themovie.com/images/gallery/img1.jpg",
      imdbLink: "https://www.imdb.com/title/tt1517268/",
    },
    {
      id: 4,
      title: "Movie 4",
      description: "This is movie 4.",
      releaseDate: "2023-06-02",
      Actors: "D",
      imageSrc: "https://cdn.marvel.com/content/1x/across_the_spider-verse.jpg",
      imdbLink: "https://www.imdb.com/title/tt9362722/?ref_=tt_mv_close",
    },
    {
      id: 5,
      title: "Movie 5",
      description: "This is movie 5.",
      releaseDate: "2023-07-25",
      Actors: "E",
      imageSrc:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/19e5290f1efbfa994701b3e2368b255df1748f7cc9c82db59dc5324427b452a9._RI_TTW_.jpg",
      imdbLink: "https://www.imdb.com/title/tt8579674/",
    },
    // Add more movies if needed
  ],
};

export const loginUser = (username, password) => {
  // user data export
  const user = fakeDatabase.users.find(
    (u) => u.username === username && u.password === password
  );
  return user ? { id: user.id, username: user.username } : null;
};

export const fetchMovies = () => {
  // movie data export
  return fakeDatabase.movies;
};
