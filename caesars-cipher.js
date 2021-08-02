function rot13(str) {
  const DECODE= {A:'N', B:'O', C:'P', D:'Q', E:'R', F:'S', G:'T', H:'U', I:'V', J:'W', K:'X', L:'Y', M:'Z', N:'A', O:'B', P:'C', Q:'D', R:'E', S:'F', T:'G', U:'H', V:'I', W:'J', X:'K', Y:'L', Z:'M' };
  let decypher = "";
  for(let x=0; x < str.length; x++){
    if(str[x].match(/\W/)){
      decypher += str[x];
    }else
    decypher += DECODE[str[x]];
  }
  return decypher;
}
