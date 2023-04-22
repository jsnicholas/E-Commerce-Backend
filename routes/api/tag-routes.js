const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    Tag.findAll()
      .then((searchResponse) => {
        res.json(searchResponse)
      })
  }
  catch (err) { res.json(err) }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    Tag.findByPk(req.params.id)
      .then((searchResponse) => {
        res.json(searchResponse)
      })
  }
  catch (err) { res.json(err) }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    Tag.create(req.body)
      .then((postData) => {
        res.json(postData)
      })
  }
  catch (err) { res.json(err) }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    Tag.put()
  }
  catch (err) { res.json(err) }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value

  try {
    Tag.delete(req.params.id)
      .then((deleteRequest) => {
        res.json(deleteRequest)
      })
  } catch (err) { res.json(err) }
});

module.exports = router;
