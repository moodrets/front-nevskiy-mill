const loader = new THREE.GLTFLoader()

export class ThreeScene {
    scene = null
    camera = null
    model = null
    renderer = null
    renderElem = null
    filePath = null
    controls = null
    orbitControlEnabled = true
    showGrid = false

    cameraPosition = {
        x: 0,
        y: 0,
        z: 0,
    }

    modelInitialRotation = {
        y: 0,
        x: 0,
        z: 0,
    }

    modelInitialPosition = {
        y: 0,
        x: 0,
        z: 0,
    }

    modelInitialScale = {
        x: 1,
        y: 1,
        z: 1,
    }

    modelMoveAnimationSettings = {
        direction: 'left',
        axis: 'y',
        value: 0.0003,
        moreValue: [0.5, -0.5],
    }

    constructor({
        renderElem,
        filePath,
        cameraPosition,
        modelInitialRotation,
        modelInitialPosition,
        modelInitialScale,
        modelMoveAnimationSettings,
    }) {
        if (!renderElem) {
            return
        }
        this.renderElem = renderElem
        this.filePath = filePath ?? this.filePath
        this.cameraPosition = cameraPosition ?? this.cameraPosition
        this.modelInitialRotation = modelInitialRotation ?? this.modelInitialRotation
        this.modelInitialPosition = modelInitialPosition ?? this.modelInitialPosition
        this.modelMoveAnimationSettings =
            modelMoveAnimationSettings ?? this.modelMoveAnimationSettings
        this.modelInitialScale = modelInitialScale ?? this.modelInitialScale
        this.init()
    }

    animateModel() {
        if (this.modelMoveAnimationSettings.direction === 'right') {
            this.model.rotation[this.modelMoveAnimationSettings.axis] +=
                this.modelMoveAnimationSettings.value

            if (
                this.model.rotation[this.modelMoveAnimationSettings.axis] >
                this.modelMoveAnimationSettings.moreValue[0]
            ) {
                this.modelMoveAnimationSettings.direction = 'left'
            }
        }

        if (this.modelMoveAnimationSettings.direction === 'left') {
            this.model.rotation[this.modelMoveAnimationSettings.axis] -=
                this.modelMoveAnimationSettings.value

            if (
                this.model.rotation[this.modelMoveAnimationSettings.axis] <
                this.modelMoveAnimationSettings.moreValue[1]
            ) {
                this.modelMoveAnimationSettings.direction = 'right'
            }
        }
    }

    animateScene() {
        this.renderer.render(this.scene, this.camera)
        this.animateModel()
        requestAnimationFrame(() => this.animateScene())
    }

    setCamera() {
        this.camera.position.x = this.cameraPosition.x
        this.camera.position.y = this.cameraPosition.y
        this.camera.position.z = this.cameraPosition.z
    }

    setLights() {
        let light1 = new THREE.HemisphereLight(0xffffff, 0x444444, 5)
        light1.position.set(0, 1, 0)
        this.scene.add(light1)

        let light2 = new THREE.DirectionalLight(0xffffff, 2)
        light2.position.set(0, 1, 0)
        this.scene.add(light2)

        let light3 = new THREE.DirectionalLight(0xffffff, 4)
        light3.position.set(0, -3, 0)
        this.scene.add(light3)
    }

    setGrid() {
        if (this.showGrid) {
            const grid = new THREE.GridHelper(100, 100)
            this.scene.add(grid)
        }
    }

    init() {
        this.scene = new THREE.Scene()
        // this.scene.background = new THREE.Color(0xdddddd);
        this.camera = new THREE.PerspectiveCamera(
            50,
            this.renderElem.offsetWidth / this.renderElem.offsetHeight,
            1,
            5000
        )

        this.setCamera()
        this.setLights()
        this.setGrid()

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        })

        this.renderer.setSize(this.renderElem.offsetWidth, this.renderElem.offsetHeight)
        this.renderElem.appendChild(this.renderer.domElement)

        // this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
        // this.controls.enabled = false
        // this.controls.enableZoom = false;
        // this.controls.enablePan = false;
        // this.controls.enableRotate = false;
        // this.controls.enableDamping = false;

        loader.load(this.filePath, (gltf) => {
            this.model = gltf.scene.children[0]

            this.model.position.x = this.modelInitialPosition.x
            this.model.position.y = this.modelInitialPosition.y
            this.model.position.z = this.modelInitialPosition.z

            this.model.rotation.x = this.modelInitialRotation.x
            this.model.rotation.y = this.modelInitialRotation.y
            this.model.rotation.z = this.modelInitialRotation.z

            this.model.scale.set(
                this.modelInitialScale.x,
                this.modelInitialScale.y,
                this.modelInitialScale.z
            )
            this.scene.add(gltf.scene)
            this.animateScene()
            this.renderElem.classList.add('is-loaded')
        })
    }
}
