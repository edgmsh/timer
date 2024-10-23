const beep = (time) => {

  setTimeout(() => {
    process.stdout.write("\x07");
  }, 1000 * time);

};

for (let i = 2; i < process.argv.length; i++) {
  if (Number(process.argv[i] && Number(process.argv[i])) >0) {
    beep(Number(process.argv[i]))
  }
}

