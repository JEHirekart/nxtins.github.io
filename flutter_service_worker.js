'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon_32.png": "bf85f46398e45de8ae94e4da171e3f14",
"flutter_bootstrap.js": "9a9301d6ab118fec5b2fae90522d3a72",
"version.json": "d8d11acd2db2fd09f38f4a1263201876",
"index.html": "fcfe42f186d05ea89a775ffcc444c78f",
"/": "fcfe42f186d05ea89a775ffcc444c78f",
"main.dart.js": "488f4c1db146d209d7a1cf54fd8c8006",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "4dceeb0f42918ce7695a33c095ca9e47",
"icons/Icon-192.png": "1fe24bde9695651272ff5d2e053f2991",
"icons/Icon-maskable-192.png": "1fe24bde9695651272ff5d2e053f2991",
"icons/Icon-maskable-512.png": "26fffc479a019b4d1e3368b3260717a7",
"icons/Icon-512.png": "26fffc479a019b4d1e3368b3260717a7",
"manifest.json": "18cdf783f1eb31a29d748c21ad1e627d",
"assets/AssetManifest.json": "4681e510a6265c6b0ec97c4bc542e6c1",
"assets/NOTICES": "d83d0d97a7dea268e03924d1553efa6b",
"assets/FontManifest.json": "5be20a6f0a92359c7a1b011419c0c4b5",
"assets/AssetManifest.bin.json": "a500e195721a265b75fbcb235e36a799",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "12822736364c63bc951c4af7a7fa662e",
"assets/fonts/MaterialIcons-Regular.otf": "f2829fd6e297779f6b304a8c2e78a628",
"assets/assets/restaurant4.jpg": "2e0dcc615929f89c528fbb755b796be1",
"assets/assets/dish6.jpg": "73235b7c7e763da0e2dca6eac1baa81a",
"assets/assets/restaurant5.jpg": "a64d0929f1b9d47219b5eeee890755e8",
"assets/assets/restaurant6.jpg": "a6fbeb1f837e0b0f37618d5170bb0d7b",
"assets/assets/dish4.jpg": "4b04fe38d89c3137f116aefb3262bb17",
"assets/assets/restaurant2.jpg": "4a5e2e99ecd7bff44c5381ba3a4fb9cf",
"assets/assets/restaurant3.jpg": "f41a5ca8d57e813bb6bd30953daadcc7",
"assets/assets/dish1.jpg": "86ebb2f2a55366df6a0e6dc0181a2f53",
"assets/assets/restaurant1.jpg": "dd6af1cbe4fb15e2112b5c4d8de2066e",
"assets/assets/dish3.jpg": "a259a5076c22696848a1bc10b7162cc2",
"assets/assets/dish2.jpg": "f8a9adda23167cb0912fb8d2db66cc82",
"assets/assets/db_bg.png": "1adb515f8fa2e62f9befb3dc36d7ab90",
"assets/assets/female_avatar2.jpg": "6dbe5b6aae99fe924ccab92c001c8ada",
"assets/assets/germany_flag.jpg": "298a59ce2411e9ebd2891a7b0e87108d",
"assets/assets/usa_flag.png": "1b9e6c1feef9eca656218c006bc08268",
"assets/assets/logos/logo_black.png": "00beaa4e2221ba73ff522c2f53f6045a",
"assets/assets/logos/nxtin_white.png": "a0c3b0d68844a34e56d4f3750a6e0839",
"assets/assets/logos/logo_white.png": "446c90dbefe60156b569445352373a69",
"assets/assets/logos/nxtin_black.png": "2fe6771080f399f288f3d471a4c500d9",
"assets/assets/logos/nxtin_black.svg": "6a314bd6cc98b05eecd749df39a972ca",
"assets/assets/italy_flag.png": "bc61b982c01218f4bd0c5ff143f3e6cf",
"assets/assets/gradient_bg.jpg": "7a37cfd2c7a077caf7c617282ecfae9a",
"assets/assets/dish5.jpeg": "dc8846114f2a85fb93948d91db4566aa",
"assets/assets/male_avatar2.jpg": "dd938c260026c27d400d75309c3ae098",
"assets/assets/female_avatar.jpg": "62e61ace1848cf052baa39f0af35ef8b",
"assets/assets/avatar.jpg": "8cf3fa622603ce43e193194320bace01",
"assets/assets/fonts/Gilroy-Medium.ttf": "d8ee4539e9ba9211a8b532e325075577",
"assets/assets/fonts/Gilroy-Regular.ttf": "22d25e11ebe6b43e5a9bc87d0a0ccb61",
"assets/assets/fonts/Gilroy-Light.ttf": "25e5ce9784cf3324af89cfd13fa59517",
"assets/assets/fonts/Gilroy-Bold.ttf": "889a4b5ce3a780faedb74390fc49a07a",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Gilroy-Heavy.ttf": "2b57bf6ef2611353b4890d83fe3973c6",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
