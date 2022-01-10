
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const bamboo = new Entity('bamboo')
engine.addEntity(bamboo)
bamboo.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(6.245939254760742, 0, 2.473942995071411),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("models/Bamboo_01/Bamboo_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
bamboo.addComponentOrReplace(gltfShape)

const bambooCulms = new Entity('bambooCulms')
engine.addEntity(bambooCulms)
bambooCulms.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(5.972476005554199, 0, 2.3277454376220703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bambooCulms.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/-/Bamboo_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
bambooCulms.addComponentOrReplace(gltfShape2)

const bamboo2 = new Entity('bamboo2')
engine.addEntity(bamboo2)
bamboo2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(6.279905319213867, 0, 2.133458137512207),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo2.addComponentOrReplace(transform4)
bamboo2.addComponentOrReplace(gltfShape)

const bamboo3 = new Entity('bamboo3')
engine.addEntity(bamboo3)
bamboo3.setParent(_scene)
bamboo3.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(6.038712501525879, 0, 2.1202118396759033),
  rotation: new Quaternion(-6.728421886624059e-15, -0.9815000295639038, 1.1700391411295641e-7, -0.1914622038602829),
  scale: new Vector3(0.9999998807907104, 1, 0.9999998807907104)
})
bamboo3.addComponentOrReplace(transform5)

const lowStonePillar = new Entity('lowStonePillar')
engine.addEntity(lowStonePillar)
lowStonePillar.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(0.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.644901990890503, 1)
})
lowStonePillar.addComponentOrReplace(transform6)
const gltfShape3 = new GLTFShape("models/FenceStonePillar_01/FenceStonePillar_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
lowStonePillar.addComponentOrReplace(gltfShape3)

const largeStoneWall = new Entity('largeStoneWall')
engine.addEntity(largeStoneWall)
largeStoneWall.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(0.5, 0, 15.836114883422852),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 2.044607400894165, 3.0207462310791016)
})
largeStoneWall.addComponentOrReplace(transform7)
const gltfShape4 = new GLTFShape("models/FenceStoneTallLarge_01/FenceStoneTallLarge_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
largeStoneWall.addComponentOrReplace(gltfShape4)

const largeStoneWall2 = new Entity('largeStoneWall2')
engine.addEntity(largeStoneWall2)
largeStoneWall2.setParent(_scene)
largeStoneWall2.addComponentOrReplace(gltfShape4)
const transform8 = new Transform({
  position: new Vector3(0.5, 0, 0.2400646209716797),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 2.044607400894165, 3.020746946334839)
})
largeStoneWall2.addComponentOrReplace(transform8)

const largeStoneWall3 = new Entity('largeStoneWall3')
engine.addEntity(largeStoneWall3)
largeStoneWall3.setParent(_scene)
largeStoneWall3.addComponentOrReplace(gltfShape4)
const transform9 = new Transform({
  position: new Vector3(15.768150329589844, 0, 15.810009002685547),
  rotation: new Quaternion(-6.490154906693213e-15, 0, -6.632166756563975e-15, -1),
  scale: new Vector3(1.0000022649765015, 2.044607400894165, 3.1165273189544678)
})
largeStoneWall3.addComponentOrReplace(transform9)

const woodTile3 = new Entity('woodTile3')
engine.addEntity(woodTile3)
woodTile3.setParent(_scene)
const gltfShape5 = new GLTFShape("models/FloorBlock_03/FloorBlock_03.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
woodTile3.addComponentOrReplace(gltfShape5)
const transform10 = new Transform({
  position: new Vector3(12, 0, 5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000041723251343, 1, 3.80745530128479)
})
woodTile3.addComponentOrReplace(transform10)

const woodTile = new Entity('woodTile')
engine.addEntity(woodTile)
woodTile.setParent(_scene)
woodTile.addComponentOrReplace(gltfShape5)
const transform11 = new Transform({
  position: new Vector3(12, 0, 3),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000044107437134, 1, 3.8074562549591064)
})
woodTile.addComponentOrReplace(transform11)

const woodTile2 = new Entity('woodTile2')
engine.addEntity(woodTile2)
woodTile2.setParent(_scene)
woodTile2.addComponentOrReplace(gltfShape5)
const transform12 = new Transform({
  position: new Vector3(12, 0, 1),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000046491622925, 1, 3.807457208633423)
})
woodTile2.addComponentOrReplace(transform12)

const woodTile4 = new Entity('woodTile4')
engine.addEntity(woodTile4)
woodTile4.setParent(_scene)
woodTile4.addComponentOrReplace(gltfShape5)
const transform13 = new Transform({
  position: new Vector3(12, 0, 7),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000048875808716, 1, 3.8074581623077393)
})
woodTile4.addComponentOrReplace(transform13)

const woodTile8 = new Entity('woodTile8')
engine.addEntity(woodTile8)
woodTile8.setParent(_scene)
woodTile8.addComponentOrReplace(gltfShape5)
const transform14 = new Transform({
  position: new Vector3(8, 0, 15),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000075101852417, 1, 7.775234699249268)
})
woodTile8.addComponentOrReplace(transform14)

const woodTile5 = new Entity('woodTile5')
engine.addEntity(woodTile5)
woodTile5.setParent(_scene)
woodTile5.addComponentOrReplace(gltfShape5)
const transform15 = new Transform({
  position: new Vector3(8, 0, 13),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000077486038208, 1, 7.7752366065979)
})
woodTile5.addComponentOrReplace(transform15)

const woodTile6 = new Entity('woodTile6')
engine.addEntity(woodTile6)
woodTile6.setParent(_scene)
woodTile6.addComponentOrReplace(gltfShape5)
const transform16 = new Transform({
  position: new Vector3(8, 0, 11),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000079870224, 1, 7.775238513946533)
})
woodTile6.addComponentOrReplace(transform16)

const woodTile7 = new Entity('woodTile7')
engine.addEntity(woodTile7)
woodTile7.setParent(_scene)
woodTile7.addComponentOrReplace(gltfShape5)
const transform17 = new Transform({
  position: new Vector3(8, 0, 9),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000008225440979, 1, 7.775240421295166)
})
woodTile7.addComponentOrReplace(transform17)

const stoolHigh = new Entity('stoolHigh')
engine.addEntity(stoolHigh)
stoolHigh.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(3, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh.addComponentOrReplace(transform18)
const gltfShape6 = new GLTFShape("models/HighStool.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
stoolHigh.addComponentOrReplace(gltfShape6)

const stoolHigh2 = new Entity('stoolHigh2')
engine.addEntity(stoolHigh2)
stoolHigh2.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(3, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh2.addComponentOrReplace(transform19)
stoolHigh2.addComponentOrReplace(gltfShape6)

const stoolHigh3 = new Entity('stoolHigh3')
engine.addEntity(stoolHigh3)
stoolHigh3.setParent(_scene)
stoolHigh3.addComponentOrReplace(gltfShape6)
const transform20 = new Transform({
  position: new Vector3(5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh3.addComponentOrReplace(transform20)

const bush = new Entity('bush')
engine.addEntity(bush)
bush.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(7.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush.addComponentOrReplace(transform21)
const gltfShape7 = new GLTFShape("models/Bush_02/Bush_02.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
bush.addComponentOrReplace(gltfShape7)

const shrub = new Entity('shrub')
engine.addEntity(shrub)
shrub.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(1.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shrub.addComponentOrReplace(transform22)
const gltfShape8 = new GLTFShape("models/Bush_01/Bush_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
shrub.addComponentOrReplace(gltfShape8)

const pond = new Entity('pond')
engine.addEntity(pond)
pond.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(4.181219100952148, 0, 4.004535675048828),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pond.addComponentOrReplace(transform23)
const gltfShape9 = new GLTFShape("models/Pond_01/Pond_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
pond.addComponentOrReplace(gltfShape9)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape10 = new GLTFShape("models/FloorBaseGrass_02/FloorBaseGrass_02.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
entity.addComponentOrReplace(gltfShape10)
const transform24 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform24)

const smoothLog = new Entity('smoothLog')
engine.addEntity(smoothLog)
smoothLog.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(4.5, 0, 1),
  rotation: new Quaternion(1.539415254273621e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
smoothLog.addComponentOrReplace(transform25)
const gltfShape11 = new GLTFShape("models/Log_01/Log_01.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
smoothLog.addComponentOrReplace(gltfShape11)

const stoolHigh4 = new Entity('stoolHigh4')
engine.addEntity(stoolHigh4)
stoolHigh4.setParent(_scene)
stoolHigh4.addComponentOrReplace(gltfShape6)
const transform26 = new Transform({
  position: new Vector3(3, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh4.addComponentOrReplace(transform26)

const stoolHigh5 = new Entity('stoolHigh5')
engine.addEntity(stoolHigh5)
stoolHigh5.setParent(_scene)
stoolHigh5.addComponentOrReplace(gltfShape6)
const transform27 = new Transform({
  position: new Vector3(7, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh5.addComponentOrReplace(transform27)

const stoolHigh6 = new Entity('stoolHigh6')
engine.addEntity(stoolHigh6)
stoolHigh6.setParent(_scene)
stoolHigh6.addComponentOrReplace(gltfShape6)
const transform28 = new Transform({
  position: new Vector3(9, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh6.addComponentOrReplace(transform28)

const stoolHigh7 = new Entity('stoolHigh7')
engine.addEntity(stoolHigh7)
stoolHigh7.setParent(_scene)
stoolHigh7.addComponentOrReplace(gltfShape6)
const transform29 = new Transform({
  position: new Vector3(11, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh7.addComponentOrReplace(transform29)

const stoolHigh8 = new Entity('stoolHigh8')
engine.addEntity(stoolHigh8)
stoolHigh8.setParent(_scene)
stoolHigh8.addComponentOrReplace(gltfShape6)
const transform30 = new Transform({
  position: new Vector3(13, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh8.addComponentOrReplace(transform30)

const stoolHigh9 = new Entity('stoolHigh9')
engine.addEntity(stoolHigh9)
stoolHigh9.setParent(_scene)
stoolHigh9.addComponentOrReplace(gltfShape6)
const transform31 = new Transform({
  position: new Vector3(15, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh9.addComponentOrReplace(transform31)
