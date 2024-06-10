const { Command } = require("commander");
const program = new Command();

program.version("1.0.0.").description("My own CLI");

program
  .command("Hello!")
  .description("Respond with a greeting")
  .action(() => {
    console.log("Hello SALT Developer")
  });

  program.parse(process.argv)