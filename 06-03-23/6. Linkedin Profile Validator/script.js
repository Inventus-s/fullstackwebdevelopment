function validateLinkedInProfileUrl(url) {
    // Regular expression to match valid LinkedIn profile URLs
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[\w-]{5,30}[a-zA-Z0-9]$/;
    
    // Check if the URL matches the regex
    if (regex.test(url)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage
  console.log(validateLinkedInProfileUrl('https://www.linkedin.com/in/mukund-kumar-123456789')); // true
  console.log(validateLinkedInProfileUrl('https://www.linkedin.com/in/mukund_kumar')); // true
  console.log(validateLinkedInProfileUrl('https://www.linkedin.com/in/mukund+kumar')); // false
  console.log(validateLinkedInProfileUrl('https://www.linkedin.com/in/')); // false
  console.log(validateLinkedInProfileUrl('https://www.linkedin.com/in/mukund-kumar-1234567890')); // false
  