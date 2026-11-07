# Your first website: start here

This is only the landing page for your CIS 350 Cybersecurity Training Website. It introduces the project, describes the intended training flow, and has a small sample email with warning signs you can reveal. No framework or package installation is required to run it.

## 1. Open the page first

1. Extract the downloaded ZIP. Do not open the files from inside the ZIP.
2. Open the extracted folder in VS Code with File > Open Folder. Another plain-text editor also works.
3. Double-click `index.html` in your file manager. It opens in your web browser.
4. Keep the editor and browser open side by side. Save your edits, then refresh the browser to see them.

You do not need Python, Flask, Node, a database, or a terminal for this step.

## 2. Know the three files

| File | Its job | Embedded-systems comparison |
| --- | --- | --- |
| `index.html` | Defines the content and structure: headings, paragraphs, links, buttons, sections. | The things the interface contains. |
| `static/css/style.css` | Defines appearance: colors, spacing, fonts, and layout. | The display's visual settings. |
| `static/js/main.js` | Responds to clicks and changes what the page displays. | Event-handling code responding to a button press. |

These comparisons describe responsibilities, not identical technologies. The browser reads HTML, applies CSS, and runs JavaScript. VS Code edits the files; the browser displays the result.

In the hosted preview, those three files are inside a folder called `dist`. In the download, `index.html` is at the top so it is easy to open. The folder arrangement is otherwise the same.

## 3. Start with one HTML edit

Open `index.html` and find:

```html
<h1 id="hero-title">Think before<br>you <em>click.</em></h1>
```

Read it from the outside inward:

- `<h1>` starts the page's main heading; `</h1>` ends it.
- `id="hero-title"` gives that heading a unique identifier.
- The words between the tags are what the visitor sees.
- `<br>` inserts a line break.
- `<em>` marks emphasized words. Our CSS gives that emphasis its italic appearance.

Change `Think before` to `Pause before`. Save the file and refresh your browser. That is your first edit. You can change it back afterward.

An HTML element is generally an opening tag, some content, and a closing tag. Elements can contain other elements. HTML describes a document; it is not a sequence of C statements.

## 4. Make one CSS edit

Open `static/css/style.css`. Near the top is:

```css
:root {
  --ink: #173431;
  --muted: #52635f;
  --paper: #f7f8f2;
  --lime: #d9ef86;
  --line: #d8ded3;
}
```

These are named CSS variables containing colors. `#d9ef86` is a hexadecimal color code. Change `--lime` to `#f2d48c`, save, and refresh. The highlighted word and bottom button will change because both use that variable.

Another rule looks like this:

```css
.button-dark {
  background: var(--ink);
  color: white;
}
```

`.button-dark` selects elements whose HTML `class` includes `button-dark`. The declarations between the braces set the background and text color. Unlike a C function, this rule is not something we call; the browser applies it to matching elements.

At the bottom, `@media` rules change the layout on smaller screens. The two-column hero becomes one column on a phone. Resize your browser to see it happen.

## 5. Follow one click through JavaScript

Open `static/js/main.js`. This line gets a reference to an HTML element:

```js
const revealButton = document.querySelector('#reveal-button');
```

`#reveal-button` means “the element with this ID.” It matches the button in `index.html`. `const` declares a binding that will not be reassigned; it does not make the referenced HTML element immutable.

Next, `addEventListener('click', function () { ... })` registers a function to run when the visitor clicks. This is similar in purpose to handling a button event in an embedded program, though it is a browser event, not a hardware interrupt.

Inside that function:

- `shouldShow` is a Boolean: should the explanation be visible?
- `warningSigns.hidden` hides or shows the explanation.
- `classList.toggle(...)` adds or removes a CSS class to highlight clues.
- `textContent` changes the button's label.
- `aria-expanded` tells assistive technology whether the explanation is open.

The browser's document object model, or DOM, is its in-memory representation of the page. JavaScript changes the DOM, and the browser updates the display.

## 6. How this fits your architecture

Your proposed architecture has three layers:

| Layer | Responsibility | What exists in this version |
| --- | --- | --- |
| Frontend: HTML/CSS/JavaScript | Show the interface and handle browser interactions. | The landing page and sample-email reveal. |
| Backend: Python/Flask | Handle requests, verify sessions and permissions, grade work, and coordinate storage. | Not implemented. |
| Database | Store account mappings, modules, assignments, deadlines, answers, scores, and completion records. | Not implemented. |

Later, the flow will be: browser requests data from Flask; Flask checks permission and retrieves or updates database records; Flask returns a page or data to the browser. The browser should not connect directly to your database or decide whether someone is an administrator.

Flask can render the HTML from a `templates` folder and serve the CSS/JavaScript from `static`. We can move `index.html` to `templates/index.html` and switch the asset links to Flask's `url_for` when we add the server. You do not need that setup to learn this page.

## 7. The older architecture versus the newer use cases

The attached Architecture.txt is a proposal. The newer group use cases take priority where they differ:

| Older proposal | Newer use cases to follow |
| --- | --- |
| Create an account and log in with locally managed passwords. | Existing accounts linked to an external authentication service. We must choose the provider before implementing login. |
| Freely select scenario categories and difficulty. | Start from assigned training containing lessons, quizzes, and practice scenarios. |
| Administrators create/edit/delete scenarios. | Administrators assign training, track deadlines, review performance, generate completion reports, and trigger reminders. Content editing is not part of the current agreed use cases. |
| Four proposed tables centered on scenarios and attempts. | The schema will also need to represent modules, lessons, quizzes, assignments, deadlines, completion records, and refresher-topic relationships. It has not been designed here. |

The twelve use cases are login; view assigned training; complete lesson; take quiz; complete practice scenario; view progress; review recommended lessons; assign training; track deadlines; review quiz performance; generate completion report; send training reminder.

Recommendations are based on missed topics, not an AI service. Passing scores, module completion rules, and automatic reminder schedules remain undecided. VirusTotal stays optional and is not used by this page.

This page describes the intended user experience. Its example is local and illustrative; it does not count as completed training. The login buttons honestly explain that authentication is not connected. No credentials are collected, no grades are calculated, and no progress is saved.

## 8. A manageable next order

1. Understand and edit this landing page: text first, then colors and spacing.
2. Make the assigned-training dashboard as a separate page using clearly labeled sample data. This teaches another page layout before introducing server code.
3. Add a minimal Flask app to serve the pages.
4. Agree with your team on the authentication provider and data model, then connect the first real use case.
5. Build one complete training flow before adding the remaining administrator functions.

You do not need to learn the entire web stack at once. For now, aim to explain what each of these three frontend files does and make one deliberate change yourself.
