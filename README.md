# lightbox
A simple gallery box that functions as a lightbox.

To use the lightbox, follow these instructions:
- In the gallery div, insert the image in a div with a specific id.
	div id="YOUR ID" class="frame"
		img class="thumbnail" src="YOUR IMAGE" alt=""
		div class="overlay"
			Parasailing over the pacific ocean.
		/div
	/div

- In the lightbox div, insert the same image with that specific id
	div class="slide" data-id="YOUR ID"
		img src="YOUR IMAGE"
		p class="caption"
	/div