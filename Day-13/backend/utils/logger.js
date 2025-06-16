import chalk from 'chalk';

const logger = {
  info: (msg) => console.log(chalk.blueBright.bold('[INFO]'), chalk.blue(msg)),
  success: (msg) => console.log(chalk.green.bold('[SUCCESS]'), chalk.greenBright(msg)),
  error: (msg) => console.log(chalk.red.bold('[ERROR]'), chalk.redBright(msg)),
  warn: (msg) => console.log(chalk.yellow.bold('[WARNING]'), chalk.yellowBright(msg)),
  db: (msg) => console.log(chalk.magenta.bold('[DB]'), chalk.magentaBright(msg)),
  server: (msg) => console.log(chalk.cyan.bold('[SERVER]'), chalk.cyanBright(msg)),
};

export default logger;