// Add your code here
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle",
    }),
};

fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (res) {
        return res.json();
    })
    .then(function (obj) {
        console.log(obj);
})
    .catch(function (err) {
        alert("Bad things!");
        console.log(err.message);
    });

    function submitData {
        
    }