import axios from 'axios';

export const formatDate = (date) => {
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var hour = date.getHours();
    var min = date.getMinutes();

    return "" + month + "/" + day + "/" + year + "    " + (hour%12) + ":" + (min<10 ? "0"+min : min) + " " + (hour > 12 ? "PM" : "AM");
};

export const getPost = (id, handler) => {
    if (id) {
        let url = 'http://localhost:5000/posts/post/';
        let ID = url.concat(id);
        axios.get(ID)
        .then(response => {
            handler(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
};

