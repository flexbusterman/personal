const path2 = require('path');
module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js",
  },
  output: {
    path: path2.resolve(__dirname, "./app/temp/scripts"),
    filename: "[name].js"
  }
}

// const path = require('path');

// module.exports = {
//   entry: {
//     App: "./app/assets/scripts/App.js",
//     Vendor: "./app/assets/scripts/Vendor.js"
//   },
//   output: {
//     path: path.resolve(__dirname, "./app/temp/scripts"),
//     filename: "[name].js"
//   },
//   module: {
//     loaders: [
//       {
//         loader: 'babel',
//         query: {
//           presets: ['es2015']
//         },
//         test: /\.js$/,
//         exclude: /node_modules/
//       }
//     ]
//   }
// }

// // frågan
// module.exports = {
//  entry: __dirname + "/app/assets/scripts/App.js",
//  output: {
//  path: __dirname + "/app/temp/scripts",
//  filename: "App.js"
//  }
// }


// // // svaret
// const path = require('path');
// module.exports = {
//   entry: "./app/assets/scripts/App.js",
//   output: {
//     path: path.resolve(__dirname, "./app/temp/scripts"),
//     filename: "App.js"
//     }
// }