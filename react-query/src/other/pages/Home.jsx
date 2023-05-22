const Home = () => {
  
  // const obj = {
  //   name: 'Nijat',
  //   lastName: 'Niyazov',
  // };

  // console.log(obj['name']); // --> "Nijat "

  // const movies = [
  //   { imd: 8.9, name: 'Pulp Fiction', director: 'Quentin Tarantino' },
  //   { imd: 8.2, name: 'Shutter Island', director: 'Martin Scorsese' },
  //   { imd: 8.8, name: 'Inception', director: 'Christopher Nolan' },
  //   { imd: 8.4, name: 'Django Unchained', director: 'Quentin Tarantino' },
  //   { imd: 8.7, name: 'Interstellar', director: 'Christopher Nolan' },
  //   { imd: 7.3, name: 'Tenet', director: 'Christopher Nolan' },
  // ];

  // const groupped = movies.reduce((groupBy, movie) => {
  //   const { director } = movie;

  //   groupBy[director] = groupBy[director] ?? [];
  //   groupBy[director].push(movie);
  //   return groupBy;
  // }, {});

  // Created by Nijat Niyazov

  return (
    <div className="w-full h-screen bg-gray-200 flex items-center justify-center font-bold text-[40px]">
      Home
    </div>
  );
};

export default Home;
