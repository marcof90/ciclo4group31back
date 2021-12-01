const express = require('express')
const router = express.Router()
const incomeController = require('../controllers/income.controller')
const Auth = require('../middlewares/authentication')

/**
 * @api {get} /incomes Get incomes
 * @apiName Getincomes
 * @apiGroup Incomes
 * @apiDescription Listado de ingresos del usuario
 * @apiSuccess {json} list lista de ingresos
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 ok
 * [
 *      {
 *          "_id": "618dbc3108f7b4c25232c510",
 *          "description": "prima navideña",
 *          "value": 500000,
 *          "createrAt": "2021-11-12T00:58:25.009Z",
 *          "__v": 0
 *      },
 *      {
 *          "_id": "618dbe9a93db5c31140194e3",
 *          "description": "prima navideña",
 *          "value": 5000000,
 *          "createrAt": "2021-11-12T01:08:42.547Z",
 *          "__v": 0
 *      },
 *      {
 *          "_id": "618dbeee93db5c31140194e6",
 *          "description": "prima navideña",
 *          "value": 1000000,
 *          "createrAt": "2021-11-12T01:10:06.817Z",
 *          "__v": 0
 *      }
 *  ]
 */
router.get('/', Auth, incomeController.list)

/**
 * @api {post} /incomes Add income
 * @apiName Addincomes
 * @apiGroup Incomes
 * @apiDescription Agregar nuevo ingreso al usuario
 * @apiParam {Number} Value valor del ingreso que se va a registrar
 * @apiParam {String} description descripción del ingreso que se va a registrar
 * @apiParamExample {json} Request-Example
 *  x-www-form-urlenconded
 *      {
 *       "value": 1000000,
 *       "description": "Salario mensual"
 *      }
 * @apiSuccess {json} income ingreso guardado
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 ok
 * {
 *     "description": "prima navideña",
 *     "value": 1000000,
 *     "_id": "6196ffd090617988373cea04",
 *     "createrAt": "2021-11-19T01:37:20.081Z",
 *     "__v": 0
 * }
 */
router.post('/', Auth, incomeController.add)

module.exports = router