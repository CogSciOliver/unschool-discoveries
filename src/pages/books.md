---
layout: layouts/page.njk
title: Books
permalink: /books/
intro: Explore the growing Unschool Discoveries catalog.
---

{% for book in books %}
## [{{ book.title }}]({{ book.url }})

{{ book.hook }}

{% endfor %}