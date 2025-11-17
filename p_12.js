function toTitleCase(str) {
    return str
        .toLowerCase()
        .replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
// \b = word boundary
// মানে — শব্দের শুরু বা শেষের ঠিক পাশে থাকা পজিশন।

// \w = word character
// এর মধ্যে পড়ে:

// A–Z

// a–z

// 0–9

// _ (underscore)

// সুতরাং \w মানে একটা শব্দের অক্ষর বা ডিজিট।

// g = global
// মানে — স্ট্রিংয়ের মধ্যে যতগুলো match আছে, সবগুলো খুঁজবে।



}

// Example usage
let text = "hello world";
console.log(`"${toTitleCase(text)}"`); 