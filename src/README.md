# Directory Structure

For detailed explanation on how things work, check out the [VitePress documentation](https://vitepress.dev/).

## Special Directories

You can create the following extra directories, some of which have special behaviors.

### `.vitepress`

This is where VitePress lives and is configured, using `config.mts`.

### `components`

The components directory contains Vue.js components to extend the functionality of pages.

### `public`

This directory contains static files. Each file inside this directory is mapped to `/`.

Example: `/public/robots.txt` is mapped as `/robots.txt`.

### `*.md`

Every Markdown file is converted to a page. Example: `index.md` becomes `index.html`.
