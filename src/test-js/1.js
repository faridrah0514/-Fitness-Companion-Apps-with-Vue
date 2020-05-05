var arr = ["makan", "minum", "tidur", "kerja", "pergi", "pulang", "pusing"]

let search = "pu"

var new_arr = arr.filter((element) => {
    console.log("elemen ", element)
    // console.log("s)
    return element.includes(search)
})

console.log(new_arr)