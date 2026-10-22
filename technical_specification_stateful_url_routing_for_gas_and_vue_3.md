# Technical Specification: Stateful URL Routing for Google Apps Script using Vue 3 & `google.script.history`

---

## 1. Executive Summary & Core Concept
Standard HTML5 History API (`window.history.pushState`) cannot modify the top-level address bar when running inside a Google Apps Script (GAS) `<iframe>`.

This document specifies the implementation for native stateful URLs in Vue 3 on GAS using **`google.script.history`** and clean query parameters (`?section=...&tool=...`). **Hash-based routing (`#`) is explicitly omitted.**

---

## 2. Server-Side Integration (`Code.js`)

GAS receives incoming URL parameters via the `e.parameter` object inside `doGet(e)`. The server injects these initial parameters directly into the HTML payload to allow deep-linking on initial load.

```javascript
/**
 * Serves the Vue 3 Web Application.
 * @param {Object} e - Event parameter containing query strings (e.parameter)
 */
function doGet(e) {
  const template = HtmlService.createTemplateFromFile('Page');
  
  // Serialize initial URL parameters into JSON for client-side injection
  template.initialParams = JSON.stringify(e && e.parameter ? e.parameter : {});
  
  return template.evaluate()
    .setTitle('GAS Stateful Vue App')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
```

---

## 3. Client-Side Architecture

### 3.1 Initial Boot Sequence (`index.html`)
Inject server-provided parameters into a globally available `window` variable prior to mounting Vue.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>GAS Vue App</title>
  <script>
    window.INITIAL_PARAMS = <?!= typeof initialParams !== 'undefined' ? initialParams : '{}' ?>;
  </script>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

---

### 3.2 Navigation & Stateful Links (`App.vue`)

Each navigation link generates a fully stateful relative URL (`?section=sect1&tool=tool1-1`), enabling native link behavior, middle-clicks, and "Open in new tab" support while triggering history updates via `google.script.history`.

```javascript
const getToolUrl = (secId, toolId) => {
  return \`?section=\${secId}&tool=\${toolId}\`;
};
```

---

### 3.3 History Synchronization

A two-way bridge synchronizes component selection and browser history using `google.script.history.push`, `google.script.history.replace`, and `google.script.history.setChangeHandler`.

```javascript
const updateHistory = (secId, toolId, isReplace = false) => {
  const stateObject = { section: secId, tool: toolId };
  const queryParams = { section: secId, tool: toolId };

  if (window.google?.script?.history) {
    if (isReplace) {
      google.script.history.replace(stateObject, queryParams, '');
    } else {
      google.script.history.push(stateObject, queryParams, '');
    }
  } else {
    // Local development fallback
    const url = new URL(window.location.href);
    url.searchParams.set('section', secId);
    url.searchParams.set('tool', toolId);
    url.hash = '';
    if (isReplace) {
      window.history.replaceState(stateObject, '', url.toString());
    } else {
      window.history.pushState(stateObject, '', url.toString());
    }
  }
};
```

---

## 4. Parameter Mapping & URL Format

| Application Action | Rendered Parent Browser URL |
| :--- | :--- |
| Navigate to Section 1, Tool 1-1 | `https://script.google.com/.../exec?section=sect1&tool=tool1-1` |
| Navigate to Section 2, Tool 2-1 | `https://script.google.com/.../exec?section=sect2&tool=tool2-1` |
| Navigate to Section 3, Tool 3-3 | `https://script.google.com/.../exec?section=sect3&tool=tool3-3` |
