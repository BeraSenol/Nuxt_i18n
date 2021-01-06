# PAGES

## FORM HANDLING WITH NETLIFY

### SETUP

Code an HTML form into any page on your site, add data-netlify="true" or a netlify attribute to the <form> tag, and you can start receiving submissions in your Netlify site admin panel.

Your form’s name attribute determines what we call the form in the Netlify app interface. If you have more than one form on a site, each form should have a different name attribute.

When Netlify bots parse the static HTML for a form you’ve added, they automatically strip the `data-netlify="true"` or `netlify` attribute from the `<form>` tag and inject a hidden input named form-name. In the resulting HTML that’s deployed, the data-netlify="true" or netlify attribute is gone, and the hidden form-name input’s value matches the name attribute of `<form>` like this:

```HTML
<input type="hidden" name="form-name" value="MYFORM">
```
The form is required to be in the rendered files at deploy time. The problem with SPA mode is that none of your pages are actually rendered as HTML.

Place the folowing into `static/form-dummy/index.html`:

```HTML
<form name="MYFORM" netlify>
  <!-- form controls here -->
</form>
```
Place the folowing into `pages/form/index.vue` (or wherever your vue file is):

```HTML
<form name="MYFORM" method="post">
  <input type="hidden" name="form-name" value="MYFORM" />
  <!-- form controls here -->
</form>
```
You just need to make sure you add that hidden in the Vue component so that Netlify recognises the form submission as associated with the form called MYFORM.