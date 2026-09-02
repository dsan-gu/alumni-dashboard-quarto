// add as much as you want
const tags = [
    { text: 'Data Scientist', size: 5, count: "23%" },
    { text: 'Research Fellow', size: 4, count: "15%" },
    { text: 'Machine Learning Engineer', size: 3, count: "6%" },
    { text: 'Software Engineer', size: 3, count: "4%" },
    { text: 'Statistician', size: 2, count: "3%" },
];

const tagCloud = document.querySelector('.tag-cloud');

// const shuffledTags = [...tags].sort(() => Math.random() - 0.5);
const shuffledTags = tags;

shuffledTags.forEach((tag, index) => {
    const tagElement = document.createElement('span');
    tagElement.className = `tag size-${tag.size} color-${(index % 5) + 1}`;
    tagElement.innerHTML = `${tag.text}<span class="tag-count">${tag.count}</span>`;

    tagElement.addEventListener('click', function () {
        this.classList.add('selected');
        setTimeout(() => this.classList.remove('selected'), 300);
    });

    tagCloud.appendChild(tagElement);
});

document.querySelectorAll('.tag').forEach(tag => {
    tag.style.transform = `rotate(${(Math.random() * 6) - 3}deg)`;
});
