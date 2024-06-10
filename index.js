const { Command } = require("commander");
const program = new Command();

program.version("1.0.0").description("My own CLI");

program
  .command("Hello")
  .description("Responds with a greeting")
  .option("-n, --name <type>", "Add your name")
  .action((user) => {
    const name = user.name ? user.name : "stranger danger!";
    console.log(`Hello SALT Developer: ${name}!`)
  });

program.parse(process.argv);