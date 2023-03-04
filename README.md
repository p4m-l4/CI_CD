# A Simple Calculator

A very simple calculator that runs anywhere in your environment.

## Features

- Basic Arithmetic (+, - , \*, /)
- History (Last 5 calculations)
- Database connection
- Cross platform

## Screenshots

![image](https://user-images.githubusercontent.com/102288573/222350044-c1f07912-3584-4b99-82e4-f20370b7861f.png)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_URI`

## API Reference

#### Run Docker Container

```bash
  $ docker run -p 49160:8080 -d <your username>/node-web-app
```

| Parameter  | Type     | Description  |
| :--------- | :------- | :----------- |
| `num1`     | `string` | **Required** |
| `num2`     | `string` | **Required** |
| `operator` | `string` | **Required** |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## 🚀 Authors

- [@TrippleA-Ashaba](https://www.github.com/octokatherine) Albert Ashaba Aheebwa
- [@p4m-l4](https://github.com/p4m-l4) Pamela Namala
- [@edwin-niwaha](https://github.com/edwin-niwaha) Edwin Niwaha
- [@KayanjaJohn](https://github.com/KayanjaJohn) KayanjaJohn

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
