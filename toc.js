// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="2023-04-19_1.html"><strong aria-hidden="true">1.</strong> Localhost to Docker container</a></li><li class="chapter-item expanded "><a href="2023-04-19_2.html"><strong aria-hidden="true">2.</strong> RabbitMQ CLI Tools</a></li><li class="chapter-item expanded "><a href="2023-05-25.html"><strong aria-hidden="true">3.</strong> FFmpeg Trim Video</a></li><li class="chapter-item expanded "><a href="2023-06-01.html"><strong aria-hidden="true">4.</strong> Free Disk Space Linux</a></li><li class="chapter-item expanded "><a href="2023-06-02.html"><strong aria-hidden="true">5.</strong> Convert HEIC to JPG</a></li><li class="chapter-item expanded "><a href="2023-06-12.html"><strong aria-hidden="true">6.</strong> Pip inside virtualenv installing globally</a></li><li class="chapter-item expanded "><a href="2023-06-12-1.html"><strong aria-hidden="true">7.</strong> Linux change users</a></li><li class="chapter-item expanded "><a href="2023-06-14.html"><strong aria-hidden="true">8.</strong> Requests library proxy</a></li><li class="chapter-item expanded "><a href="2023-07-30.html"><strong aria-hidden="true">9.</strong> AzureAD Access Token for non-Microsoft Graph Usage</a></li><li class="chapter-item expanded "><a href="2023-08-02.html"><strong aria-hidden="true">10.</strong> Powershell replace text</a></li><li class="chapter-item expanded "><a href="2023-08-21.html"><strong aria-hidden="true">11.</strong> PugiXML with Qt</a></li><li class="chapter-item expanded "><a href="2023-10-23.html"><strong aria-hidden="true">12.</strong> Neovim restore Windows Terminal cursor on Exit</a></li><li class="chapter-item expanded "><a href="2023-10-27.html"><strong aria-hidden="true">13.</strong> Frappe Gantt Chart - JS</a></li><li class="chapter-item expanded "><a href="2024-2-1.html"><strong aria-hidden="true">14.</strong> Decrypt PDF with PyPDF2</a></li><li class="chapter-item expanded "><a href="2024-3-3.html"><strong aria-hidden="true">15.</strong> Postgres Upsert</a></li><li class="chapter-item expanded "><a href="2024-3-6.html"><strong aria-hidden="true">16.</strong> Update forked repo with rebase</a></li><li class="chapter-item expanded "><a href="2024-3-11.html"><strong aria-hidden="true">17.</strong> MSAL .NET Desktop Parsing ws-trust issue</a></li><li class="chapter-item expanded "><a href="2024-5-3.html"><strong aria-hidden="true">18.</strong> Cadence report command line tool</a></li><li class="chapter-item expanded "><a href="2024-5-21.html"><strong aria-hidden="true">19.</strong> User not granted requested logon</a></li><li class="chapter-item expanded "><a href="2024-06-25.html"><strong aria-hidden="true">20.</strong> Windows disk cleanup script</a></li><li class="chapter-item expanded "><a href="2024-07-26.html"><strong aria-hidden="true">21.</strong> Distutils and Python 3.12</a></li><li class="chapter-item expanded "><a href="2024-08-08.html"><strong aria-hidden="true">22.</strong> Zip and Unzip Linux</a></li><li class="chapter-item expanded "><a href="2024-08-08-02.html"><strong aria-hidden="true">23.</strong> Vim find all in file</a></li><li class="chapter-item expanded "><a href="2024-08-12.html"><strong aria-hidden="true">24.</strong> Gvim windows .vimrc</a></li><li class="chapter-item expanded "><a href="2024-08-16.html"><strong aria-hidden="true">25.</strong> git diff two branches</a></li><li class="chapter-item expanded "><a href="2024-08-30.html"><strong aria-hidden="true">26.</strong> Clear MEF cache</a></li><li class="chapter-item expanded "><a href="2024-09-02.html"><strong aria-hidden="true">27.</strong> Evite CSV import</a></li><li class="chapter-item expanded "><a href="2024-09-12.html"><strong aria-hidden="true">28.</strong> Reformatting flash drive after using Balena Etcher</a></li><li class="chapter-item expanded "><a href="2024-09-15.html"><strong aria-hidden="true">29.</strong> Typst snippets for VSCode</a></li><li class="chapter-item expanded "><a href="2024-09-17.html"><strong aria-hidden="true">30.</strong> Gnome Tweaks</a></li><li class="chapter-item expanded "><a href="2024-09-19.html"><strong aria-hidden="true">31.</strong> Powershell Notes</a></li><li class="chapter-item expanded "><a href="2024-09-19_1.html"><strong aria-hidden="true">32.</strong> Visual Studio Code Vim</a></li><li class="chapter-item expanded "><a href="2024-09-23.html"><strong aria-hidden="true">33.</strong> Powershell remote execution with params</a></li><li class="chapter-item expanded "><a href="2024-09-30.html"><strong aria-hidden="true">34.</strong> ffmpeg stitch videos together</a></li><li class="chapter-item expanded "><a href="2024-10-01.html"><strong aria-hidden="true">35.</strong> ImageMagick .ico from .png</a></li><li class="chapter-item expanded "><a href="2024-12-04.html"><strong aria-hidden="true">36.</strong> extern C</a></li><li class="chapter-item expanded "><a href="2024-12-05.html"><strong aria-hidden="true">37.</strong> Git Credential Manager</a></li><li class="chapter-item expanded "><a href="2025-01-16.html"><strong aria-hidden="true">38.</strong> Inf2Cat</a></li><li class="chapter-item expanded "><a href="2025-02-07.html"><strong aria-hidden="true">39.</strong> Read Windows Registry value from C</a></li><li class="chapter-item expanded "><a href="2025-03-11.html"><strong aria-hidden="true">40.</strong> Get path of executing assembly in C#</a></li><li class="chapter-item expanded "><a href="2025-07-04.html"><strong aria-hidden="true">41.</strong> Python check object reference equality</a></li><li class="chapter-item expanded "><a href="2025-07-29.html"><strong aria-hidden="true">42.</strong> Windows Driver Framework General Strategy</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
