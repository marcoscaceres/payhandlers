const SITE_CACHE = "site-v1";
self.addEventListener("install", (ev) => {
  console.log("SW installed...");
});

self.addEventListener("activate", async () => {
  const keys = await caches.keys();
  await keys
    .filter((key) => key !== SITE_CACHE)
    .map((key) => caches.delete(key));
});

self.addEventListener("message", ({ data: { action } }) => {
  switch (action) {
    case "skipWaiting":
      self.skipWaiting();
      break;
  }
});

self.addEventListener("fetch", (ev) => {
  // nothing for now...
});

// Add payment request events below...
self.addEventListener("paymentrequest", (ev) => {
  console.log("IT WORKED! SHIP IT!");
});
