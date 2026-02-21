---
layout: layout.html
subject: World
---

# Hello {{ subject }}

You can type here!

- [Markdown](/docs/languages/markdown/)
- [Liquid](/docs/languages/liquid/)

## Posts

{% for post in collections.topic %}

- [{{ post.data.title }}]({{ post.url}})
  {% endfor %}

_Built by Quantum Innovation Advisors with {{ eleventy.generator }} _

<hr>
{% for post in collections.topic %}
<h2><a href="{{ post.url}}">{{ post.data.title }}</a></h2>
<p>{{ post.description }}</p>
{% endfor %}
