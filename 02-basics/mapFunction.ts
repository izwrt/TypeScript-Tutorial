const songs = ["dusk till dawn", "not like us", "entertainer"];

// .map() takes the type from the array, so here it's string
songs.map((song) => {
    return 2 + 2; // Here it can return anything
});

// Here we are giving the type for the map function
songs.map((song): string => {
    return `My favorite song is ${song}`;
});
