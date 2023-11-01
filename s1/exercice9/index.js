// Exercice 9: Vérification de palindrome
module.exports = function estPalindrome(mot) {
    const motInverse = mot.split('').reverse().join('');
    return mot === motInverse;
}
