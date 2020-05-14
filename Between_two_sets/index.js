/**
 * Obtiene todos los factores de un número.
 * @param {numero a factorizar} num
 */
function getFactors(num) {
  var listaFactores = [];
  for (var factor = 1; factor <= num; factor++) {
    if (num % factor == 0) {
      listaFactores.push(factor);
    }
  }
  return listaFactores;
}

/**
 * Obtiente todos los elementos comunes de las listas.
 * @param {lista de arrays de factores} listaFactores
 */
function interceptArrays(listaFactores) {
  var listaTemp = listaFactores[0];
  for (let i = 1; i < listaFactores.length; i++) {
    var listaCompara = listaFactores[i];
    var listaInterceptos = listaTemp.filter(
      (val) => listaCompara.indexOf(val) != -1
    );
    listaTemp = listaInterceptos;
  }
  return listaTemp;
}

function getTotalX(a, b) {
  var listaResultados = [];
  var listaFactoresCandidatos = [];
  // lista de factores de los elementos de "b"
  var listaFactoresB = [];
  for (var i = 0; i < b.length; i++) {
    var listaFactores = getFactors(b[i]);
    listaFactoresB.push(listaFactores);
  }
  // Punto 2.
  var listaCandidatos = interceptArrays(listaFactoresB);
  // obtenemos los factores de los candidatos
  for (var i = 0; i < listaCandidatos.length; i++) {
    var listaFactores = getFactors(listaCandidatos[i]);
    if (listaFactores.length > 0) {
      listaFactoresCandidatos.push({
        candidato: listaCandidatos[i],
        listaFactores: listaFactores,
      });
    }
  }
  // obtenemos los candidatos que correspondan con todos los elementos de "a"
  // es decir que los elementos de "a" sean factores de ese candidato
  for (let f = 0; f < listaFactoresCandidatos.length; f++) {
    const posibleCandidato = listaFactoresCandidatos[f];
    var noEncontrado = false;
    for (let i = 0; i < a.length; i++) {
      if (posibleCandidato.listaFactores.indexOf(a[i]) == -1) {
        noEncontrado = true;
        break;
      }
    }
    if (noEncontrado == false) {
      listaResultados.push(posibleCandidato.candidato);
    }
  }
  return listaResultados.length;
}
