const path   = require('path');
const multer = require('multer');

module.exports = function(app) {
  app.get('/', (req, res) => {
    // You'll create your note here
    //res.sendFile(path.join(__dirname+'/index.html'));
    console.log(path.join(__dirname+'/index.html'));
  });

  app.post('/get-file-size', multer().single('file'), (req, res) => {
    res.send({"size":req.file.size});
  });
};
