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


let index=0;
nextBtnhHandler();


let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click',nextBtnhHandler);


function nextBtnhHandler(){
    const currentCandidate = data[index++];
    let imageDiv = document.getElementById('imageDiv');
    let profileDiv = document.getElementById('profileDiv');
    if(currentCandidate != undefined)
    {
    imageDiv.innerHTML = `<img src='${currentCandidate.image}'>`;
    profileDiv.innerHTML = `<ul class="list-group">
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