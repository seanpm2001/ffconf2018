# ffconf 2018

## Todo

- [ ] Text for "on sale text"
- [ ] Optimize image lightrays
- [ ] Optimize image bg cloud
- [x] Optimize image duke of york
- [x] Finish the stars
- [ ] Do better data parsing for sessions
- [ ] Check on mobiles the sticky header
- [ ] Image for sold out header button
- [ ] Activate service worker
- [ ] Image for video header button (whatch now & watch soon)?
- [ ] Better quote template, maybe not full html but just json?
- [ ] Try to fix next-sass module

## Sponsors

platinum (2 available), Gold (4 in total including American Express, Google, Financial Times confirmed) Day sponsors 2 including brandwatch), micro (JS Bin)

## Howto

### Convert fonts into JSON

Source: http://crocodillon.com/blog/non-blocking-web-fonts-using-localstorage

Install npm module [font-store](https://github.com/CrocoDillon/font-store), locally it's fine:

```bash
$ mkdir fontstore && cd $_
$ npm install font-store
```

Now generate the Google Fonts link and run:

```bash
$ ./node_modules/font-store/bin/font-store "https://fonts.googleapis.com/css?family=Anonymous+Pro|Rubik:700"
```

### Create favicons

Use https://realfavicongenerator.net

- Favicon for iOS - Web Clip: add a solid background, color `#ffffff`, size as default
- Favicon for Android Chrome: no background color, theme color #1e81a0
- Windows Metro: use the original, color is `teal`
- Safari Pinned Tab: turn your picture into a monochrom icon, threshold as default
- Touch Bar: theme color #ec65a5
- Favicon Generator Options:
  - path: `/static/images/favicons`
  - app name: `ffconf 2018`

Delete the generated `manifest.json`, we already have our own, just check to reference the images correctly.
