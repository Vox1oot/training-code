/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet" */

const domainName = (url) => {
  let result = '';

  if (url.indexOf('www') >= 0) {
    console.log(url.indexOf('www'));
  }
};

console.log(domainName("https://www.qp2p4wwtqujw.co.za/warez/"));