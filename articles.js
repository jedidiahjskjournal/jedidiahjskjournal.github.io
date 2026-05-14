const articles = [
    {
        title: "The Day the Illusion Broke",
        author: "Shreyas Kulkarni",
        image: "shreyas.jpg",
        content: `
        <p>I genuinely wish more people pause long enough to see this before spending their whole lives running.</p>

        <p>At some point, you begin to question the structure everything was built on... not intellectually, but because somewhere deep inside, you can no longer keep pretending it works.</p>

        <p>The endless idea that happiness exists on the other side of achievement starts feeling hollow... especially when you have already touched things you once thought would finally do it... and they did not.</p>

        <p>And when that happens, the world quickly offers substitutes.</p>

        <p>More entertainment. More pleasure. More distraction. More places to go. More ways to stay busy.</p>

        <p>Not because it wants to free you, but because distraction is easier than disruption.</p>

        <p>So you are taught to indulge. Travel more. Consume more. Chase more.</p>

        <p>Anything... as long as you do not sit still long enough to question why none of it truly touches the emptiness.</p>

        <p>And the moment you truly question it, there is no going back.</p>

        <p>First comes suffering. Confusion. Emptiness. The collapse of meanings you once trusted.</p>

        <p>But if you stay through that collapse, one day something becomes undeniable:</p>

        <p>Thoughts, language, ambition... they were never meant to make you happy.</p>

        <p>They are tools for navigating the physical world.</p>

        <p>You can build through them. Create through them. Achieve through them.</p>

        <p>But you can never be happy through them.</p>

        <p>And when that truth is lived, everything changes.</p>

        <p>You stop chasing.</p>

        <p>And for the first time, begin living from something deeper.</p>
        `
    }
];

const container = document.getElementById("articles-container");

articles.forEach(article => {
    const div = document.createElement("div");
    div.className = "article";

    div.innerHTML = `
        <h2>${article.title}</h2>
        ${article.content}
        <div class="author">
            <p>Written by ${article.author}</p>
            <img src="${article.image}" alt="${article.author}">
        </div>
    `;

    container.appendChild(div);
});
