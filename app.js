




document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    
    const numOfJokes = document.querySelector('#number').value;

    
    const xhrJokes = new XMLHttpRequest();
    
    // External API
    xhrJokes.open('GET',`http://api.icndb.com/jokes/random/${numOfJokes}`, true);

    xhrJokes.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            let output = '';
            if(response.type === 'success'){
                response.value.forEach(function(joke){
                    output += `
                            <li>${joke.joke}</li>
                    `
                });
            } else {
                output += '<h5>Something went wrong</h5>'
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }


    xhrJokes.send();


    e.preventDefault();
}