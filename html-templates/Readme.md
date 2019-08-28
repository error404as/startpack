# Running

`node start`

Starts http://localhost:3001/ local static server.
Starts watching `src` directory. On changes in `src/_html` will run EJS rendering of all html files. On changes in `src/_css` will run LESS/SCSS compiller.

`node zip`

Packs `build` directory in zip archive with name: `html-[YYYY-MM-DD]-HHMMSS.zip`.

## 'src' directory

`_html` contains EJS templates. Files starting with _ (underscore) are ignored, others - will be compiled with EJS to HTML files in `build` directory.

`_css` contains css/less/scss files. You may use LESS or SCSS. Input and output files are described in `start.js` as `filesLess`/`filesScss` arrays.

Other files and directories are copied as is to `build` directory.

## possible issues :(

Crashes if delete any directory inside `src` while server is running.
