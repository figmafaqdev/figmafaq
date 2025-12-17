---
title: Why does Auto Layout resize text unexpectedly in Figma
description: Explains why text resizes when using Auto Layout and how to control it.
layout: base.njk
schema: faq
question: Why does Auto Layout resize text unexpectedly in Figma?
answer: Auto Layout resizes text when the text layer is set to auto width or auto height, because Figma recalculates the bounding box based on content and layout constraints.
---

When text resizes unexpectedly in Auto Layout, it is usually caused by the text resizing mode.

If a text layer is set to auto width or auto height, Figma recalculates its size based on content and available space inside the layout. This can make text appear to scale or shift when spacing or padding changes.

You can control this behavior by switching the text resizing mode and adjusting layout constraints. Screenshots below show exactly where these settings are located.
