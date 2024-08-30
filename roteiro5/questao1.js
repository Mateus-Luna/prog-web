const enderecoConsultado = {
    cep: "05650-000",
    logradouro: "Avenida Morumbi",
    complemento: "de 4051/4052 a 5053/5054",
    bairro: "Morumbi",
    localidade: "São Paulo",
    uf: "SP",
    geo: {
      lat: "-23.61919020307765",
      lng: "-46.70793551534256"
    }
  };
  
  const dono = {
    "proprietario": "Silvio Santos",
    "endereco": enderecoConsultado
  };
  
  const { proprietario, endereco: { cep, bairro, localidade, geo: { lat, lng } } } = dono;
  
  const resultado = `${proprietario} - ${cep} - ${bairro}, ${localidade} (${lat}, ${lng})`;
  
  console.log(resultado);