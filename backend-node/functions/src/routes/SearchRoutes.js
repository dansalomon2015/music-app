"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
const searchController = new controllers_1.SearchController();
router.get("/", searchController.search);
exports.default = router;
