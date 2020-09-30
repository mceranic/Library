import request from 'request'
import moment from 'moment'
import config from '../config'
const list = (req, res) => {
    request.get(`${config.apiUrl}books`, (err, response) => {
        if (err) console.log(err)
        res.render('books.ejs', {
            icon: 'fa-user-circle',
            title: 'Books',
            books: JSON.parse(response.body), 
            menuId: "books"
        })
    })
}
const edit = (req, res) => {
    let id = req.params.id
    if (id == 0) {
        res.render('book.ejs', {
            title: 'New book',
            book: {
                id: 0,
                title: '',
                pages: '',
                price: '',
            },
            menuId: 'book'
        })
    } else {
        request.get(`${config.apiUrl}books/${id}`, (err, response) => {
            if (err) console.log(err)
            let b = JSON.parse(response.body)
            res.render('book.ejs',
                {
                    title: b.title,
                    book: b,
                    menuId: 'book'
                }
            )
        })
    }
}

const save = (req, res) => {
    if (req.params.id==0){
        request.post(`${config.apiUrl}books`,
        { json: 
            {
                id: req.body.id,
                title: req.body.title,
                pages: req.body.pages,
                price: req.body.price,
            } 
        }, (err, response)=>{
            if (err) console.log(err)
            res.redirect('/books');
        });
    } else { 
        request.put(`${config.apiUrl}books/${req.params.id}`,
        { json: 
            {
                id: req.body.id,
                title: req.body.title,
                pages: req.body.pages,
                price: req.body.price,
            } 
        }, (err, response)=>{
            if (err) console.log(err)
            res.redirect('/books');
        });
    }
    
}

const del = (req,res) => {
    request.delete(`${config.apiUrl}books/${req.params.id}`, (err, response)=>{
        if(err) console.log(err);
        res.redirect('/books');
    })
}

const find =  (req, res) => {
    let filter = req.body.name;
    request.get(`${config.apiUrl}authors/find/${req.body.name}`, (err, response) => {
       if (err) console.log(err);
       res.render( 'books.ejs', {
           icon: 'fa-users-circle',
           title: 'Books',
           books: JSON.parse(response.body),
           menuId: "books",
           page: "Books"
       }); 
    });
}

export default {list, edit, save, del, find}