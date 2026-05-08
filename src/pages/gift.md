---
layout: layouts/sections.njk
title: Give the Gift of Discovery
permalink: /gift/
intro: Share Unschool Discoveries with a curious family, young reader, or fellow explorer.
---

{% from "components/feature-panel.njk" import featurePanel %}
{{ featurePanel(
  eyebrow="Featured Gift",
  title="Bring the Magic Home",
  subtitle="Reserve Your Signed Hard Copy",
  text="Get a signed physical copy of Unschool Discoveries — a beautiful keepsake for your home library.",
  bullets=[
    "Perfect for gifts or sharing with other unschooling families",
    "Reinforces curiosity, independence, and the joy of self-directed learning",
    "High-quality printing with full-color illustrations"
  ],
  image="https://mri.unschooldiscoveries.com/reading-at-dino-park.jpg",
  image_alt="Signed hardcover copy of Unschool Discoveries",
  href=site.signedHardCoverUrl,
  button_label="Gift a Signed Hardcover Book",
  external=true
) }}


{% from "components/card-grid.njk" import cardGrid %}
{% set giftItems = [
  {
    "title": "Gift the Hard Cover Copy",
    "text": "A special gift for readers who would love an edition to keep, collect, and enjoy.",
    "image": "https://mri.unschooldiscoveries.com/VITU-Square-Childrens-Book-Mockup-COVERVAULT.png",
    "image_alt": "Hardcover copy of Unschool Discoveries",
    "href":site.barnesAndNobleUrl,
    "button_label": "Gift the Hardcover Book",
    "external": true
  },
  {
    "title": "Gift the Ebook",
    "text": "A simple digital gift for readers who want to start exploring right away.",
    "image": "https://mri.unschooldiscoveries.com/unschool-discoveries-ebook-reading-on-couch.png",
    "image_alt": "Ebook cover of Unschool Discoveries",
    "href":site.amazonEbookUrl,
    "button_label": "Gift the Ebook",
    "external": true
  },
  {
    "title": "Gift the Book Bundle",
    "text": "Choose the bundle for a fuller Unschool Discoveries experience, including the storybook and coloring book.",
    "image": "https://mri.unschooldiscoveries.com/bundle.jpg",
    "image_alt": "Unschool Discoveries bundle",
    "href":site.amazonBundleUrl,
    "button_label": "Gift the Bundle",
    "external": true
  }
] %}

<section class="panel">
  <p class="eyebrow">Gift Options</p>
  <h2>More Ways to Gift Unschool Discoveries</h2>
  <p>Hardcover, paperback, and ebook options are available to ship internationally. <b>Unschool Discoveries: Venturing into the Unknown</b> makes a thoughtful gift for families who love curiosity, imagination, and real-life learning.</p>

  {{ cardGrid(giftItems, "three") }}
</section>



## Who It’s For
- curious kids
- unschooling families
- self-directed learners
- gift-givers looking for something meaningful and different

## Want More Gift Options?
Join the [newsletter](/newsletter/) for updates on new formats, future releases, and special gift ideas.