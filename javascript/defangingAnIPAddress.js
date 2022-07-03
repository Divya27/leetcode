/**
 * @param {string} address
 * @return {string}
 * 
 * https://leetcode.com/problems/defanging-an-ip-address/
 */
var defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]")
};

console.log(defangIPaddr("255.100.50.0"))