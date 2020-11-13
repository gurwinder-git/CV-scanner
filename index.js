console.log('connected');

const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/med/men/55.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/med/men/65.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/med/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/med/women/45.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/med/men/50.jpg'
    }
]

function dataIterator(values) {
    let index = 0;
    return {
        next: function () {
            if (index < values.length) {
                return {
                    value: values[index++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

let dataIteratorObj = dataIterator(data);

console.log(dataIteratorObj);
console.log(dataIteratorObj.next());

let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click',nextBtnhHandler);
nextBtnhHandler();

function nextBtnhHandler(){
    const currentCandidate = dataIteratorObj.next().value;
    let image = document.getElementById('imageDiv');
    let profile = document.getElementById('profileDiv');
    if(currentCandidate != undefined)
    {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in: ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on: ${currentCandidate.language}</li>
    <li class="list-group-item">Uses: ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }



}