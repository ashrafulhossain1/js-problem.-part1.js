function logLargestNumber(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return;
    }

    var largestNumber = arr[0];

    for (var num of arr) {
        if (num > largestNumber) {
            largestNumber = num;
        }
    }

    console.log("The largest number is: " + largestNumber);
}

// উদাহরণ
var numbers = [5, 2, 9, 1, 7];
logLargestNumber(numbers);


আপনি যদি একটি অবজেক্টে নতুন একটি প্রপার্টি যোগ করতে চান, তাহলে নিচের মতো করে করতে পারেন:

javascript
Copy code
var person = {
    name: "John",
    age: 30
};

// নতুন প্রপার্টি যোগ করা
person.city = "New York";

console.log(person);
এখানে city নামক একটি নতুন প্রপার্টি যোগ করা হয়েছে এবং সেটির মান "New York" দেওয়া হয়েছে। console.log(person); চালানোর পর আপনি দেখতে পাবেন:

javascript
Copy code
{
    name: "John",
    age: 30,
    city: "New York"
}
person.city = "New York"; এর পরিবর্তে আপনি নিচের কোডটিও ব্যবহার করতে পারেন:

javascript
Copy code
person['city'] = "New York";
এটি একই কাজ করে, এবং এটি ডায়নামিক প্রপার্টি নাম যোগ করার ক্ষেত্রে বিশেষভাবে কার্যকর।



======================

