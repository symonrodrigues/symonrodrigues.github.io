const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const handlebars = require('express-handlebars');

app.use(express.static(__dirname+ '/public'));

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  helpers: {
    trueOrFalseSwitch: function(t) {
      if(t = true)
      {
        t = false;
        console.log(t);
      } else if(t = false){
        t = true;
        console.log(t);
      }
    }
  }
}));

app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res, next) => {
  res.render('home', {
    layout: 'main',
    isTrue: true
  });
});




app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:'+app.get('port'));
});
