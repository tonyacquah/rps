getComputerChoice = () => {
  const compNum = Math.floor((Math.random() * 100))
  let rps
  if (compNum<34){
    rps="rock"
  }else if(compNum<67){
    rps="scissors"
  }else {
    rps="paper"
  }
  //console.log(rps) for debugging
  return rps

}
getComputerChoice()