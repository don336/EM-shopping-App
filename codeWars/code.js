String.prototype.toJadenCase = (function () {
  const string = "How can mirrors be real if our eyes aren't real";
  const str = string.split(" ");

  str.forEach((word) => {
    const spl = word.split(" ");
    // const letter = spl[0].slice(1)
    // console.log(letter)
    spl.forEach((leter)=>{
        const letter = leter[0].split(" ")
        letter.forEach((char)=>{
            console.log(`${char.toLocaleUpperCase()} ${letter}`)
        })
    })
  });
})();
