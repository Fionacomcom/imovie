$(document).ready(function() {
    let click = $('#weatherLocation').click(function () {
        const lat = $('#latitude').val();
        const lon = $('#longitude').val();
        $('#latitude').val("");
        $('#longitude').val("");
        let request = new XMLHttpRequest();
       // const url = `http://v.juhe.cn/movie/cinemas.local?key=eaa3a87285dcc95ae59996010e42d46c&dtype=xml&lat=31.30947&lon=120.6003&radius=2000`;
       //  const url = `http://v.juhe.cn/movie/cinemas.local?key=eaa3a87285dcc95ae59996010e42d46c&dtype=json&lat=${lat}&lon=${lon}&radius=2000`;
       //  const url = `http://v.juhe.cn/movie/cinemas.local?key=eaa3a87285dcc95ae59996010e42d46c&dtype=json&lat=${lat}&lon=${lon}&radius=2000`;
        const url = `http://v.juhe.cn/movie/cinemas.local?key=eaa3a87285dcc95ae59996010e42d46c&dtype=json&lat=${lat}&lon=${lon}&radius=2000`;

        console.log(url);
        request.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                getElements(response);
            }
        }

        request.open("GET", url, true);
        request.send();
        console.log(request);


        const getElements = function (response) {
            $('.showCinema').text(`【Cinema Name】 :${response.cinemaName}`);
            $('.showAddress').text(`【Cinema Address】 :${response.address}`);
        }

    });
});
