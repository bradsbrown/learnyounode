var tot = 0;
for (i = 2; i < process.argv.length; i++) {
  tot = tot + +process.argv[i]
};
console.log(tot);
