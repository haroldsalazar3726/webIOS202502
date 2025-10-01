let credencial ="PJ"

if (credencial == "visitante") {
    console.log("Voce so poder ir onde seu anfitrião for.");
}
else if (credencial == "estagiario") {
    console.log("voce pode acessar as baias de trabalho e refeitorio");
}

else if (credencial == "aprendiz") {
    console.log("voce pode acessar as areas de lazer, baias e refeitorio");
}

else if (credencial == "CLT") {
    console.log("voce pode acessar tudo, exceto a diretoria");
}

else if (credencial == "CEO") {
    console.log("O ceu e o limite.");
}
else{
    console.log("Credencial invalida. ACESSO NEGADO!");
}