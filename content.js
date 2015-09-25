var SEMESTER_MONTHS = {
    "fall": [9, 10, 11, 12, 1],
    "spring": [2, 3, 4, 5]
};
var SEMESTER_REGEX = /\/archive\/([a-z0-9]+)\//;
var now = new Date();
var monthNum = now.getMonth() + 1;
for (var semesterMonth in SEMESTER_MONTHS) {
    if (SEMESTER_MONTHS[semesterMonth].indexOf(monthNum) != -1) {
        var year = ("" + now.getFullYear()).substr(-2);
        var expectedSemester = semesterMonth + year;
        var pageSemester = SEMESTER_REGEX.exec(window.location.href)[1];

        var isCorrectSemester = expectedSemester == pageSemester;

        var elem = document.createElement("div");

        if (isCorrectSemester) {
            elem.style.backgroundColor = "green";
            elem.innerHTML = `Viewing current semester's course page (${pageSemester})`;
        } else {
            elem.style.backgroundColor = "red";
            var currentUrl = window.location.href.replace(SEMESTER_REGEX, `/archive/${expectedSemester}/`);
            elem.innerHTML = `Viewing ${pageSemester}, but current semester is ${expectedSemester}. <a href="${currentUrl}">Go to current &rarr;</a>`;
        }

        elem.style.color = "white";
        elem.style.lineHeight = "30px";
        elem.style.position = "absolute";
        elem.style.top = "0";
        elem.style.left = "0";
        elem.style.right = "0";
        elem.style.boxSizing = "border-box";
        elem.style.textAlign = "center";
        document.body.insertBefore(elem, document.body.childNodes[0]);
    }
}
