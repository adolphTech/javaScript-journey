// dd0a0c3f   api key

const fetchData = async(searchTerm)=>{
const response = await axios.get('http://omdbapi.com/',{
params:{
    apikey:'dd0a0c3f',
    s:searchTerm
}
});

console.log(response.data)
};

const input = document.querySelector('input');

let timeoutId;
const onInput = event =>{

    if (timeoutId){
        clearTimeout(timeoutId);
    }
   timeoutId = setTimeout(()=>{
        fetchData(event.target.value);
    },500)
    };

input.addEventListener('input',onInput);
