/**
 * @param {string[]} emails
 * @return {number}
 * 
 * https://leetcode.com/problems/unique-email-addresses/
 */
var numUniqueEmails = function (emails) {
  // return new Set(emails.map(email => `${email.split('@')[0].split('+')[0].split('.').join('')}@${email.split('@')[1]}`)).size

  let emailMap = new Set();
  for (let email of emails) {
    let [local, domain] = email.split('@');
    local = local.split('+')[0];
    local = local.replaceAll('.', '');
    // console.log("local: ", local);
    // console.log("domain: ", domain);
    emailMap.add(`${local}@${domain}`, true);
  }
  // console.log("emailMap: ", emailMap.size);
  return emailMap.size;
  
};

// console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))
// console.log(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]))
console.log(numUniqueEmails(["fg.r.u.uzj+o.pw@kziczvh.com", "r.cyo.g+d.h+b.ja@tgsg.z.com", "fg.r.u.uzj+o.f.d@kziczvh.com", "r.cyo.g+ng.r.iq@tgsg.z.com", "fg.r.u.uzj+lp.k@kziczvh.com", "r.cyo.g+n.h.e+n.g@tgsg.z.com", "fg.r.u.uzj+k+p.j@kziczvh.com", "fg.r.u.uzj+w.y+b@kziczvh.com", "r.cyo.g+x+d.c+f.t@tgsg.z.com", "r.cyo.g+x+t.y.l.i@tgsg.z.com", "r.cyo.g+brxxi@tgsg.z.com", "r.cyo.g+z+dr.k.u@tgsg.z.com", "r.cyo.g+d+l.c.n+g@tgsg.z.com", "fg.r.u.uzj+vq.o@kziczvh.com", "fg.r.u.uzj+uzq@kziczvh.com", "fg.r.u.uzj+mvz@kziczvh.com", "fg.r.u.uzj+taj@kziczvh.com", "fg.r.u.uzj+fek@kziczvh.com"]))