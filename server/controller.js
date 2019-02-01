module.exports = {
  getHouses: (req, res) => {
    // console.log('gh hit:');
    const dbInstance = req.app.get('db');
    // console.log('dbi:', dbInstance.get_houses);

    dbInstance
      .get_houses()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        res.status(500).send({
          errorMessage: 'some broke stuff here...'
        });
        console.log(err);
      });
  }
};
