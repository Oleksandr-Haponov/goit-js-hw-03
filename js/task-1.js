function(slugify(title) {
  let lowerCaseTitle = title.toLowerCase();
    let hyphenatedTitle = lowerCaseTitle.replace(/\s+/g, '-');
    let slugifiedTitle = hyphenatedTitle.replace(/[^a-z0-9-]/g, '');
    return slugifiedTitle;
    })
    console.log(slugify("Arrays for beginners"));
    console.log(slugify("English for developer"));
    console.log(slugify("Ten secrets of JavaScript"));
    console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));