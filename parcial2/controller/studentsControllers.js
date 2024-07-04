let students = require('../bd')

const getStudents = (req, res) => {
    res.json(students);
}

const getStundentsByID = (req, res) => {

    const idStudents = parseInt(req.params.id);  
    const studentsEncontrado = students.find( students => students.id === idStudents)
    if(studentsEncontrado) {
        res.json(studentsEncontrado)
    } else {
        res.status(404).json({
            mensaje: "No se encontro el estudiante"
        })
    }
}

const createstudents = (req, res) => {
    const { fullName, age, curse } = req.body;

    if (!fullName || !age || !curse) {
        return res.status(400).send('No se ingresaron bien los datos de estudiante');
    }

    if (isNaN(parseInt(age))) {
        return res.status(400).send('La edad no es un número');
    }

    if (typeof fullName !== "string" || typeof curse !== "string") {
        return res.status(400).send('El nombre o el curso que ingresó no es un String');
    }

    const newID = new Date().getTime();

    const newStudent = {
        id: newID,
        fullName,
        age,
        curse
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
};



  const updateStudent = (req, res) => {
    const idStudents = parseInt(req.params.id); 
    const { fullName, age, curse } = req.body;
    console.log(idStudents, fullName, age, curse);

    let studentsUpdated = false;
    students = students.map(students => {
        if (students.id === idStudents) {
            studentsUpdated = true;
            return {
                ...students,
                fullName,
                age,
                curse,
            };
        } else {
            return students;
        }
    });

    if (studentsUpdated) {
        res.json({ message: "actualizado correctamente" });
    } else {
        res.status(404).json({ message: "no encontrado" });
    }
};

const deleteStudent = (req, res) => {
    const idStudents = parseInt(req.params.id);
    students = students.filter(students => students.id !== idStudents);
    
    res.json({ mensaje: " eliminado correctamente" });
};
module.exports = {
    getStudents,
    getStundentsByID,
    createstudents,
    updateStudent,
    deleteStudent,
    }