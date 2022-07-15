# Basic JAMstack demo

## HUGO static content tool
    gohugo.io

## Creating a new site (how we got this site)
    hugo new site jamsite

## Starting local server
    hugo server

    If page has "draft: true" in header, it will not be published unless using "hugo server -D" to include drafts.

## Themes
    themes.gohugo.io    

## New page
    hugo new photos/hugo-dog.md

## Archetypes
    templates used when creating a new page

## Type
    type of page, for instance the about page is different from the others as it uses the "topinfo" layout instead

## Kind
    kind of page, such as 404, section (list). You can specify exceptions in the config's disableKinds param

## Static build of site
    "hugo -D --cleanDestinationDir" builds a static build of the pages in the public dicectory

## Notes
    When I built a stic build and made a symbolic link from Apache to the public folder, it fails to load the css or fonts because they need to have /jamsite as that's where I named the subfolder under apache's /Library/WebServer/Documents

    Oddly though, Hugo is making the links to the pages from index.html to example.org, rather than the pages?