const { Router } = require('express')
const appController = require('../controller/appController')
const router = Router();

router.get('/trending', appController.getTrending);
router.get('/popular', appController.getPopular)
router.get('/search', appController.getSearch)
router.get('/details/:id', appController.getDetails)

module.exports = router;