function diff(n1, n2) {
   let max = n1 > n2 ? n1 : n2;
   let min = n1 <= n2 ? n1 : n2;
   return max - min;
}

module.exports = diff;