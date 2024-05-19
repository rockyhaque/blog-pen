## Blog Pen


#### A sleek, user-friendly platform for writers to share insights, stories, and expertise. Engage with diverse content and unleash your creativity, all on an intuitive frontend interface.

### Api
```
https://dev.to/api/articles
```

### Api Documentation
https://developers.forem.com/api/v1

## Query Parameters

## page
- **Type:** integer `<int32>` >= 1
- **Default:** 1
- **Description:** Pagination page

## per_page
- **Type:** integer `<int32>` [1 .. 1000]
- **Default:** 30
- **Description:** Page size (the number of items to return per page). The default maximum value can be overridden by the `API_PER_PAGE_MAX` environment variable.

***Example***
```
https://dev.to/api/articles?per_page=5
```

## tag
- **Type:** string
- **Example:** `tag=discuss`
- **Description:** Using this parameter will retrieve articles that contain the requested tag. Articles will be ordered by descending popularity. This parameter can be used in conjunction with `top`.

## tags
- **Type:** string
- **Example:** `tags=javascript, css`
- **Description:** Using this parameter will retrieve articles with any of the comma-separated tags. Articles will be ordered by descending popularity.

## tags_exclude
- **Type:** string
- **Example:** `tags_exclude=node, java`
- **Description:** Using this parameter will retrieve articles that do not contain any of the comma-separated tags. Articles will be ordered by descending popularity.

## username
- **Type:** string
- **Example:** `username=ben`
- **Description:** Using this parameter will retrieve articles belonging to a User or Organization ordered by descending publication date. If `state=all`, the number of items returned will be 1000 instead of the default 30. This parameter can be used in conjunction with `state`.

## state
- **Type:** string
- **Enum:** "fresh", "rising", "all"
- **Example:** `state=fresh`
- **Description:** Using this parameter will allow the client to check which articles are fresh or rising. If `state=fresh`, the server will return fresh articles. If `state=rising`, the server will return rising articles. This parameter can be used in conjunction with `username`, only if set to `all`.

## top
- **Type:** integer `<int32>` >= 1
- **Example:** `top=2`
- **Description:** Using this parameter will allow the client to return the most popular articles in the last N days. `top` indicates the number of days since publication of the articles returned. This parameter can be used in conjunction with `tag`.

***Example***
```
https://dev.to/api/articles?per_page=5&top=3
```

## collection_id
- **Type:** integer `<int32>`
- **Example:** `collection_id=99`
- **Description:** Adding this will allow the client to return the list of articles belonging to the requested collection, ordered by ascending publication date.


### Reference Link
https://devdojo.com/tailwindcss/buttons

#### Loading SVG
https://loading.io/background/

#### Text Gradient
https://www.andrealves.dev/blog/how-to-make-an-animated-gradient-text-with-tailwindcss/

#### Component Libary
https://mambaui.com/

#### To get text inside html tag 
https://www.npmjs.com/package/react-markdown

***Installl***
```
npm i react-markdown
```

#### React markdown plugin
https://www.npmjs.com/package/rehype-raw

***Installl***
```
npm i rehype-raw
```


#### React Spinners
https://www.npmjs.com/package/react-spinners

***Installl***
```
npm i react-spinners
```
#### React Spinners
https://www.npmjs.com/package/react-spinners

***Installl***
```
npm i react-spinners
```


#### React Hot Toast
https://react-hot-toast.com/

***Installl***
```
npm i react-hot-toast
```