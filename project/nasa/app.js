fetch ('https://api.nasa.gov/planetary/apod?api_key=STGV4j688aEmL9zuhxXAgTnpemHgXt0AdLHKvMDi')
.then((response)=>{
    response.json()
    .then((data)=>{
            console.log(data)
            const title = document.createElement("h1");
            const pic = document.createElement("img");
            const dates = document.createElement("figcaption");
            const explain = document.createElement("p");

            explain.innerHTML = data.explanation
            dates.innerHTML = data.date;
            title.innerHTML=data.title;
            console.log(data.explanation)

            pic.setAttribute('src',data.url)
    picOfDay.appendChild(title)
    picOfDay.appendChild(pic)
    picOfDay.appendChild(dates)
    picOfDay.appendChild(explain)
            console.log(pic);

    })
    
})

.catch((err) =>{
console.log("something went wrong")
console.log(err);
});
