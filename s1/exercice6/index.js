// Exercice 6: Vérification de nombre pair ou impair
module.exports = function estPairOuImpair(nombre) {
    if (nombre % 2 === 0) {
        return "pair";
    } else {
        return "impair";
    }
}