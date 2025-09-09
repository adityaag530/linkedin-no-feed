function removeFeed() {
  // Select the <main> element with aria-label="Main Feed"
  const mainFeed = document.querySelector('main[aria-label="Main Feed"]');
  
  if (mainFeed) {
    mainFeed.remove();
    console.log("Main LinkedIn feed removed ✅");
  }
}

// Run when page loads
removeFeed();

// Also watch for dynamic content updates
const observer = new MutationObserver(removeFeed);
observer.observe(document.body, { childList: true, subtree: true });
