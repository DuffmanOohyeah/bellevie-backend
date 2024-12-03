# Bellevie backend tech test

This tech test has several endpoints in which to view.

1. First off launch a CLI in the root of this projects' directory.
2. To install packages, please run the command `npm install`.
3. Run the command `npm run dev`.
4. You can now view the results in the browser by visitng `localhost:3000`.
5. There are a few endpoints to visit: `/getSupportWorkers`, `/getVisits`, and `/getSupportWorkerVisits/:id?`.

-   For the final endpoint listed, the `:id?` optional parameter represents one of the support worker IDs in the mock data objects (currently only 1, 2, and 3 * return valid data).
-   Assuming valid data to be returned, as json object should render in the browser window.

6. N.B. * = The `supportWorker` mock data object provided seemed incorrect (as all of the IDs were identical), so I corrected them using reassigned ascending IDs; otherwise some of the `visits` in the mock data object will have been orphaned.
