// Location.ancestorOrigins
// A static DOMStringList containing, in reverse order, the origins of all ancestor browsing contexts of the document associated with the given Location object.

// Location.href
// A stringifier that returns a string containing the entire URL. If changed, the associated document navigates to the new page. It can be set from a different origin than the associated document.

// Location.protocol
// A string containing the protocol scheme of the URL, including the final ':'.

// Location.host
// A string containing the host, that is the hostname, a ':', and the port of the URL.

// Location.hostname
// A string containing the domain of the URL.

// Location.port
// A string containing the port number of the URL.

// Location.pathname
// A string containing an initial '/' followed by the path of the URL, not including the query string or fragment.

// Location.search
// A string containing a '?' followed by the parameters or "querystring" of the URL. Modern browsers provide URLSearchParams and URL.searchParams to make it easy to parse out the parameters from the querystring.

// Location.hash
// A string containing a '#' followed by the fragment identifier of the URL.

// Location.origin Read only
// Returns a string containing the canonical form of the origin of the specific location.

// Instance methods
// Location.assign()
// Loads the resource at the URL provided in parameter.

// Location.reload()
// Reloads the current URL, like the Refresh button.

// Location.replace()
// Replaces the current resource with the one at the provided URL (redirects to the provided URL). The difference from the assign() method and setting the href property is that after using replace() the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it.

// Location.toString()
// Returns a string containing the whole URL. It is a synonym for Location.href, though it can't be used to modify the value.
