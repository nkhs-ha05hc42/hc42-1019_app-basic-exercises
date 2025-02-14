import express from "express"
import path from "path"
import {q8_1_1Controller, 
    q8_1_2Controller,
    q8_1_3Controller,
    q8_1_4Controller,
    sample1Controller,
         sample2Controller} from "./api/controllers.mjs"


const routers = express.Router()

routers.post("/api/sample1", sample1Controller.postSample1)
routers.get("/api/sample1", sample1Controller.getSample1)
routers.put("/api/sample1", sample1Controller.putSample1)
routers.delete("/api/sample1", sample1Controller.deleteSample1)
routers.get("/api/sample1/:id", sample1Controller.getPathParamSample1)
routers.get("/api/8-1", q8_1_1Controller.get811)
routers.post("/api/8-1", q8_1_2Controller.post812)
routers.put("/api/8-1", q8_1_3Controller.put813)
routers.delete("/api/8-1", q8_1_4Controller.delete814)

routers.post("/api/sample2", sample2Controller.postSample2)
routers.get("/api/sample2/:id", sample2Controller.getOneSample2)
routers.get("/api/sample2", sample2Controller.getAllSample2)

routers.put("/api/sample2/:id", sample2Controller.putSample2)

routers.delete("/api/sample2/:id", sample2Controller.deleteSample2)

// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

export default routers
