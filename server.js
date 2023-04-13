const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static('.'));

const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, 'build')));

const parseCSV = (fileName) => {
  return new Promise((resolve, reject) => {
    const results = [];
    // Doesnt seem to be an option for pasing the IDs in the files to an int
    // If i had more time i would have fixed this
    fs.createReadStream(fileName)
      .on('error', err => reject(err))
      .pipe(csv())
      .on('data', data => results.push(data))
      .on('end', () => resolve(results));
  });
}

app.get('/api/getClinics', async (req, res) => {
  try {
    const results = await parseCSV('data/clinics.csv');
    res.json(results);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting clinic data');
  }
});

app.get('/api/getPatients/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const results = await parseCSV(`data/patients-${id}.csv`);
    res.json(results);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting patient data');
  }
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));