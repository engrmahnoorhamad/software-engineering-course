# HTML 
HTML is the standard markup language for webpages.
## what is HTML 
- stands for hyper text Markup language.
- describes the structure of a webpages.
- consists of a series of elements.

**sample_code**
```
<!DOCTYPE html>  //declaration defines that this document is an HTML5 document.
<html>  // this element is the root element of HTML page.
<head>  // element contain meta inforamtion about the HTML page
<title>page title</title>  //this element specifies a title for the page. 
</head>
<body>     //element define the document's body , and a contaim=ner for all visible contents, such as headings, paraghraphs, images, hyperlinks, tables,list ,etc.
<h1> first heading </h1>   //large heading
<h2> second heading </h2>  // second heading
<p>my first paragraph.</p>  // paragraph
</body>
</html>
```



## what is an HTML element ?
an HTML element is defined is by a start tag , some content and an end tag:
```
<tagname>content goes here...</tagname>
<h1>...</h1>
<p>...</p>
<br>..break tag 
```

**note**
 some element have no content or closing tags . these are called empty elements. and they have no closing tags.

## web browers 
### what is the purpose of a web browers?
the purpose of a web brower(chrome,edge,firefox,safari) is to read html documents and display them correctly.
A brower does not display the HTML tags, but use them to determine how to display the documents.

**note**
content inside the <body> section will be displayed in a brower. 
and content inside the <title> element will shown in the brower's title bar or in the page's tab.

## HTML HISTORY :
- 1989-1990: Tim Berners-Lee proposes an internet-based hypertext system and develops the first browser/server.
- 1991: First public description of HTML, "HTML Tags," describing 18 elements.
- 1993 (HTML 1.0): Early version, often undocumented, focusing on basic document structure.
- 1995 (HTML 2.0): The first official standard, allowing form support, released by IETF.
- 1997 (HTML 3.2): Published by the W3C, adding support for tables and applets.
- 1999 (HTML 4.01): A major, stable standard that introduced widespread support for stylesheets (CSS).
- 2000 (XHTML 1.0): HTML rewritten with strict XML rules for better structure.
- 2014 (HTML5): The current standard, introducing native audio/video, semantic tags, and better web application support


# HTML Attributes
- all html elements can have attributes
- attributes provide additional information about elements
- attributes are always specifies in the start tag
- attributes usually come in name/value pairs **like:name="value"**

### href attribute
the <a> tag defines a hyperlink.The href attribute specifies the URL of the page goes to:
 ```
 <a href="https://www.facebook.com">Visit facebook</a>

 ```

### src attribute
the <img> tag is used to embed an image in an html page. The src attribute specifies the path to the image to be displayed:
```
<img src="img_car.jpg">
```
### width and height Attributes
The <img> tag should also contain the width and height attributes, which specify the width and height of the image (in pixels):
```
<img src="img_car.jpg" width="500" height="600">
```
**note:**
The **alt attribute** for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the src attribute, or if the user uses a screen reader.
The **style attribute** is used to add styles to an element, such as color, font, size, and more
The **lang attribute** of the <html> tag declares the language of the Web page
The **title attribute** defines some extra information about an element.
## HTML Formatting Elements
Formatting elements were designed to display special types of text:
```
<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text
```