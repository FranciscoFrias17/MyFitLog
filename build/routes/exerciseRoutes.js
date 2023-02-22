"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var exerciseController_js_1 = require("../controller/exerciseController.js");
var router = (0, express_1.Router)();
router.route('/').get(exerciseController_js_1.getExercise).post(exerciseController_js_1.setExercise);
router.route('/:id').put(exerciseController_js_1.updateExercise).delete(exerciseController_js_1.deleteExercise);
exports.default = router;
