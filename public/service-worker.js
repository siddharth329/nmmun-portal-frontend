let CACHE_NAME = 'nmmun-portal';
let urlsToCache = [
    '/',
    '/details'
];

// Install a service worker
self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Cache and return requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});

// Update a service worker
self.addEventListener('activate', event => {
    let cacheWhitelist = ['nmmun-portal'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

let deferredPrompt;

//reference to your install button
// const addBtn = self.document.querySelector('.add-button');

//We hide the button initially because the PWA will not be available for
//install until it follows the A2HS criteria.
// addBtn.style.display = 'none';

self.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    // e.preventDefault();
    // Stash the event so it can be triggered later.
    console.log('APPLICATION READY TO INSTALL, FIRING UP WORKER')
    deferredPrompt = e;
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
        } else {
            console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
    });
    // Update UI to notify the user they can add to home screen
    // addBtn.style.display = 'block';

    // addBtn.addEventListener('click', (e) => {
    //     // hide our user interface that shows our A2HS button
    //     addBtn.style.display = 'none';
    //     // Show the prompt
    //     deferredPrompt.prompt();
    //     // Wait for the user to respond to the prompt
    //     deferredPrompt.userChoice.then((choiceResult) => {
    //         if (choiceResult.outcome === 'accepted') {
    //             console.log('User accepted the A2HS prompt');
    //         } else {
    //             console.log('User dismissed the A2HS prompt');
    //         }
    //         deferredPrompt = null;
    //     });
    // });
});