const beep = (time) => {

  setTimeout(() => {
    process.stdout.write("\x07");
  }, 1000 * time);

};

for (let i = 2; i < process.argv.length; i++) {
  beep(Number(process.argv[i]));
}

