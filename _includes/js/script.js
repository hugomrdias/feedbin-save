import '@pwabuilder/pwaupdate';
import { html, render } from 'lit-html';
import getUrls from 'get-urls';

const params = new URLSearchParams(window.location.search);
const storage = self.localStorage;
const token = storage.getItem('feedbin-page-token') || '';
const title = params.get('title');
let url = '';

if (params.get('url')) {
    url = params.get('url');
} else {
    url = [...getUrls(params.get('text') || '')][0];
}

const saveToken = (e) => {
    storage.setItem('feedbin-page-token', e.target.value);
    run(title, url, e.target.value);
    console.log('saveToken -> e', e.target.value);
};
// Define a template
const myTemplate = (title = '', url = '', token, subsURL, pagesURL) => html`
    <label>Title:</label>
    <input type="text" placeholder="Page title" value=${title ? title : ''} />
    <label>URL:</label>
    <input type="text" placeholder="Page URL" value=${url ? url : ''} />
    <br />
    <a href="${subsURL}" class="Button" target="_blank" rel="noopener"
        >Subscribe</a
    >
    <br />
    <a href="${pagesURL}" class="Button" target="_blank" rel="noopener"
        >Save</a
    >
    <br />
    <label>Feedbin Pages Token</label>
    <input
        type="text"
        @input=${saveToken}
        placeholder="Feedbin Pages Token"
        value=${token}
    />
    <small
        >Find your token in the Bookmarklet link under the
        <a href="https://feedbin.com/settings/newsletters_pages">
            Newsletters page</a
        >. The token will be saved in your browser localstorage.</small
    >
`;

const run = (title, url, token) => {
    const subsURL = new URL('https://feedbin.me');
    const subsSearch = new URLSearchParams({
        subscribe: url
    });
    subsURL.search = subsSearch.toString();
    const pagesURL = new URL('https://feedbin.me/pages');
    const pagesSearch = new URLSearchParams({
        url,
        title,
        page_token: token
    });
    pagesURL.search = pagesSearch.toString();
    render(
        myTemplate(title, url, token, subsURL, pagesURL),
        document.body.querySelector('main')
    );
};

if (self.chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        run(tabs[0].title, tabs[0].url, token);
    });
} else {
    run(title, url, token);
}
