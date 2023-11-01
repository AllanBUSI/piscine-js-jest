// Exercice 10: Calcul du PGCD de deux nombres
module.exports = function pgcd(a, b) {
    if (b === 0) {
        return a;
    }
    return pgcd(b, a % b);
}