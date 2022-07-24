const express = require('express')
const app = express()
const PORT = 8000

const exercises = {
    'squat':{
        'compound': true,
        'muscles': ['quads', 'glutes', 'hips', 'abs'],
        'equipment': ['bodyweight', 'barbell','dumbbells','kettlebell']
    },
    'deadlift':{
        'compound': true,
        'muscles': ['quads','hamstrings', 'glutes', 'hips', 'lower back'],
        'equipment': ['bodyweight', 'barbell','trapbar','Smith machine']
    },
    'Not Found':{
        'compound': null,
        'muscles': ['n/a'],
        'equipment':['n/a']
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:exerciseName', (request,response)=>{
    const exerciseName = request.params.exerciseName.toLowerCase()
    if(exercises[exerciseName]){
        response.json(exercises[exerciseName])
    }else {
        response.json(exercises['Not Found'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})