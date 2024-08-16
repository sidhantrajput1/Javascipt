// ! object destructure

const course = {
    courseName : "js in Hindi",
    coursePrice : 999,
    courseInstructore : "Hitesh"
}

// course.courseInstructore

const {courseInstructore , courseName : name1} = course
// console.log(courseInstructore);
// console.log(courseName)
console.log(name1);
