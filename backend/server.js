// import des modules utiles
import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


// initialisation du server
const app = express();

// les middlewares
app.use(cors());
app.use(express.json());

// connexion  la base de données
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "students"
})

// requête qui récupère tous les étudiants
app.get('/', (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, result)=> {
       if(err) return res.json({Message: "Une erreur c'est produite"});
       return res.json(result);
    })
})

// requête d'insertion d'un nouvel étudiant
app.post('/creer', (req, res)=> {
    const sql = "INSERT INTO student (`nom`, `email`) VALUES (?)";
    const datas = [
        req.body.nom,
        req.body.email
    ]
    db.query(sql, [datas], (err, result)=> {
        if(err) return res.json(err);
        return res.json(result);
    })
})

// requête qui récupère un étudiant à partir de son id
app.get('/details/:id', (req, res) => {
    const sql = "SELECT * FROM student WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result)=> {
       if(err) return res.json({Message: "Une erreur c'est produite"});
       return res.json(result);
    })
})

// requête de modification d'un étudiant
app.put('/mettre-a-jour/:id', (req, res)=> {
    const sql = "UPDATE student SET `nom`=?, `email`=? WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [req.body.nom, req.body.email, id], (err, result)=> {
        if(err) return res.json({Message: "Une erreur c'est produite"});
        return res.json(result);
    })
})

// requête qui permet de supprimer un étudient
app.delete('/supprimer/:id', (req, res)=> {
    const sql = "DELETE FROM student WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result)=>{
        if(err) return res.json({Message: "Une erreur c'est produite"});
        return res.json(result); 
    })
})


// le port par lequel le serveur est écouté
app.listen(5000, ()=> {
    console.log("Le serveur est écouté au port 5000");
})