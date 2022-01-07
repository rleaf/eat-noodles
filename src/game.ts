let base = new Entity()

base.addComponent(new GLTFShape('models/ChineseFlag_02/ChineseFlag_02.glb'))
base.addComponent(new Transform({
  position: new Vector3(8, 0, 8)
}))

engine.addEntity(base)