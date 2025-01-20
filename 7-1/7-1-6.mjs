const nibai = (count) => {
    if (count >= 100) return
    count = count * 2
    console.log(count)
    nibai(count)
    
   }
   nibai(10)
   nibai(25)