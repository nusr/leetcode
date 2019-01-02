/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
        let realEmail = {};
        for (let email of emails) {
          let [local, domain] = email.split("@");
          let real = local.split("+")[0];
          real = real.replace(/./g, "");
          let key = real + "@" + domain;
          realEmail[key] = 1;
        }
        return Object.keys(realEmail).length;
      };