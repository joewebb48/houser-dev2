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
  },
  addHouse: (req, res) => {
    const dbInstance = req.app.get('db');
    const { name, address, city, st, zip, img, mortgage, rent } = req.body;
    console.log('hit addhouw?');

    dbInstance
      .add_house([name, address, city, st, zip, img, mortgage, rent])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: 'cant add house' });
        console.log(err);
      });
  },
  deleteHouse: (req, res) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.delete_house(id).then(dbRes => {
      res.status(200).send(dbRes);
    });
  }
};
