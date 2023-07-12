var storyNameInput = document.getElementById("storyName");
        let imageUrlInput = document.getElementById("imageUrl");
        let authorNameInput = document.getElementById("authorName");
        let categoryInput = document.getElementById("category");
        let storyInput = document.getElementById("story");
        let previewImage = document.getElementById("previewImage");
        let previewStoryName = document.getElementById("previewStoryName");
        let previewAuthorName = document.getElementById("previewAuthorName");
        let previewCategory = document.getElementById("previewCategory");
        let previewStory = document.getElementById("previewStory");
        let submitBtn = document.getElementById("submitBtn");

        storyNameInput.addEventListener("input", updatePreview);
        imageUrlInput.addEventListener("input", updatePreview);
        authorNameInput.addEventListener("input", updatePreview);
        categoryInput.addEventListener("input", updatePreview);
        storyInput.addEventListener("input", updatePreview);

        function updatePreview() {
            previewStoryName.textContent = storyNameInput.value;
            previewAuthorName.textContent = "By " + authorNameInput.value;
            previewCategory.textContent = "Category: " + categoryInput.value;
            previewStory.textContent = storyInput.value;

            if (imageUrlInput.value.trim() !== "") {
                previewImage.style.backgroundImage = "url('" + imageUrlInput.value + "')";
            } else {
                previewImage.style.backgroundImage = "none";
            }
        }

        submitBtn.addEventListener("click", function () {
            alert("Story submitted!"); // You can replace this with your own logic to handle the form submission
        });