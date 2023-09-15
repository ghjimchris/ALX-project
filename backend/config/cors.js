
export const whitelist = [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
];

export const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
          console.log('Origin: ', origin)
        callback(null, true)
      } else {
          console.log('Origin1: ', origin)
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
    // methods: ['GET', 'PUT', 'POST', 'DELETE'],
  //   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// export const corsOptions2 = {
//     origin: 'https://example.com', // Replace with your allowed domain(s)
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Enable cookies or authentication headers
// };