// Sample URLs to validate
const urls = [
    "http://www.google.com",
    "https://www.example.com",
    "http://example.com?foo=bar",
    "https://www.subdomain.example.com",
    "ftp://example.com",
    "http://example",
    "https://example.",
    "example.com",
  ];
  
  // Regular expression to match valid URLs
  const urlRegex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;
  
  // Loop through the URLs and test each one against the regular expression
  urls.forEach(url => {
    if (urlRegex.test(url)) {
      console.log(`${url} is a valid URL`);
    } else {
      console.log(`${url} is not a valid URL`);
    }
  });
  