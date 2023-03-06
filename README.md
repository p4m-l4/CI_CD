![tested](https://img.shields.io/badge/tested-75%25-green) ![tests](https://img.shields.io/badge/tests-19%20passed%2C%200%20failed-brightgreen)
![docker](https://img.shields.io/badge/docker%20build-automated-blue) ![express](https://img.shields.io/badge/express-v4.18.2-blue) ![dotenv](https://img.shields.io/badge/dotenv-v16.0.3-yellow) ![pug](https://img.shields.io/badge/pug-v3.0.2-red) ![jenkins](https://img.shields.io/badge/jenkins-CI%2FCD-brightgreen)

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
