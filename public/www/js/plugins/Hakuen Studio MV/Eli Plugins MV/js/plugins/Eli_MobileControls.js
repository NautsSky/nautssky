//==========================================================================
// Eli_MobileControls.js
//==========================================================================

/*:
@plugindesc ♦1.0.0♦ Add responsive on screen controls to mobile games!
@author Hakuen Studio

@help
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
• Rate the plugin! Please, is very important to me ^^
https://hakuenstudio.itch.io/eli-mobile-controls-for-rpg-maker/rate?source=game

Terms of Use
https://www.hakuenstudio.com/terms-of-use-5-0-0
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
============================================================================
Requirements
============================================================================

Need Eli Book.

============================================================================
Features
============================================================================

● Add responsive buttons on the screen for mobile games.
● Hide/show buttons on message.
● Special Button that can show/hide all other buttons.
● Two types of movement buttons: Directional pad and Joystick.
● Disable touch screen movement
● Disable double touch menu
● Work with diagonals
● Assign buttons to any keyboard key or script call.
● Cold and hot images for every button.
● Set vibration for Regular buttons.
● Can choose if you want to enable/disable the plugin according to 
platform: Mobile, Web, and Desktop.
● Set buttons to only be allowed on specific scenes and/or set a custom 
script condition!

============================================================================
How to use
============================================================================

https://docs.google.com/document/d/1jCGESiSowTvgLrF3EGGwuVsOcbxwlqXe_LE84idhINE/edit?usp=sharing

============================================================================

@param allowedPlatforms
@text Allowed Platforms
@type select[]
@option Desktop
@option Mobile
@option Web Browser
@desc Select the platforms you want the plugin to be enabled.
@default []

@param disableScreenMove
@text Disable screen movement
@type boolean
@desc Disable the click/touch anywhere on the screen to move.
@default true

@param disableDoubleTouchMenu
@text Disable double touch menu
@type boolean
@desc Disable the double touch or right click opens menu feature.
@default true

@param hideOnMessage
@text Hide on message
@type boolean
@desc True if you want to hide buttons on message.
@default false

@param fixButtonSize
@text Fix Button Size
@type boolean
@desc See help file.
@default false

@param fixButtonInterval
@text Fix Button Interval
@type text
@desc The time interval, in frames, that the buttons will fix their size.
@default 120
@parent fixButtonSize

@param controlButton
@text Control Buttons
@type struct<controlButtonST>
@desc A button that can hide/show all buttons.
@default {"enable":"false","img":"","width":"5","horizontalOrientation":"left","padX":"2","verticalOrientation":"top","padY":"2","vibration":"0","enableScreenMove":"true","enableDoubleTouchMenu":"true"}

@param buttons
@text Regular Buttons
@type struct<buttonsST>[]
@desc Configure here all buttons that will represent keyboard keys.
@default []

@param dPadType
@text Dpad type
@type select
@option singlePad
@option joystick
@option none
@desc Choose your directional pad type.
@default singlePad

@param singlePad
@text Single Pad
@type struct<singlePadST>
@desc A single image that can handle the player movement/directions.
@default {"scenes":"[]","img":"","baseWidth":"20","horizontalOrientation":"left","padX":"2","verticalOrientation":"bottom","padY":"2"}
@parent dPadType

@param joystickPad
@text Joystick
@type struct<joystickST>
@desc A joystick pad that moves the player along with a stick inside an area.
The stick follows the fingers/mouse on screen.
@default {"scenes":"[]","baseImg":"","baseWidth":"20","ballImg":"","ballWidth":"4","extraDistance":"0","horizontalOrientation":"left","padX":"2","verticalOrientation":"bottom","padY":"2"}
@parent dPadType

*/

/* ------------------------------- SINGLE PAD ------------------------------- */
{

/*~struct~singlePadST:

@param scenes
@text Allowed Scenes
@type combo[]
@option Scene_Title @option Scene_Map @option Scene_Menu @option Scene_Item @option Scene_Skill @option Scene_Equip @option Scene_Status @option Scene_Options @option Scene_Save @option Scene_Load @option Scene_GameEnd @option Scene_Shop @option Scene_Name @option Scene_Debug @option Scene_Name @option Scene_Battle @option Scene_Gameover
@desc A list of all scenes that will use this button.
It is case sensitive.
@default []

@param condition
@text Allowed Condition
@type note
@desc A custom condition to show this button, besides the scene.
@default "return true"

@param img
@text Image File
@type file
@dir img/screen_controls
@desc The image used for the dpad.
@default 

@param baseWidth
@text Image Size
@type number
@min 0
@max 100
@desc Set the size of the image based on the screen area percent.
Default is 20%
@default 20
@parent baseImg

@param horizontalOrientation
@text Horizontal Position
@type select
@option left
@option right
@desc The orientation of the image. If left, the Pad X will push it right. Otherwise, will push it left.
@default left

@param padX
@text Padding X
@type number
@desc The distance in % that the image will be from the horizontal border of the screen.
@default 2
@parent horizontalOrientation

@param verticalOrientation
@text Vertical Position
@type select
@option bottom
@option top
@desc The orientation of the image. If bottom, the Pad Y will push it up. Otherwise, will push it down.
@default bottom

@param padY
@text Padding Y
@type number
@desc The distance in % that the image will be from the vertical border of the screen.
@default 2
@parent verticalOrientation

*/

}

/* ------------------------------ JOYSTICK PAD ------------------------------ */
{

/*~struct~joystickST:

@param scenes
@text Allowed Scenes
@type combo[]
@option Scene_Title @option Scene_Map @option Scene_Menu @option Scene_Item @option Scene_Skill @option Scene_Equip @option Scene_Status @option Scene_Options @option Scene_Save @option Scene_Load @option Scene_GameEnd @option Scene_Shop @option Scene_Name @option Scene_Debug @option Scene_Name @option Scene_Battle @option Scene_Gameover
@desc A list of all scenes that will use this button.
It is case sensitive.
@default []

@param condition
@text Allowed Condition
@type note
@desc A custom condition to show this button, besides the scene.
@default "return true"

@param baseImg
@text Background Image File
@type file
@dir img/screen_controls
@desc The image used for the background/base joystick.
@default 

@param baseWidth
@text Background Image Size
@type number
@min 0
@max 100
@desc Set the background/base image size based on the screen area percent.
Default is 20%
@default 20
@parent baseImg

@param ballImg
@text Joystick Ball Image
@type file
@dir img/screen_controls
@desc The image used for the stick(joystick ball).
@default

@param ballWidth
@text Joystick Ball Width
@type number
@min 0
@max 100
@desc Set the stick size based on the screen area percent.
Default is 4%
@default 4
@parent ballImg

@param extraDistance
@text Extra Range
@type text
@desc How far the joystick ball can go when dragging it outside the base image.
@default 0
@parent ballImg

@param horizontalOrientation
@text Horizontal Position
@type select
@option left
@option right
@desc The orientation of the image. If left, the Pad X will push it right. Otherwise, will push it left.
@default left

@param padX
@text Padding X
@type number
@desc The distance in % that the image will be from the horizontal border of the screen.
@default 2
@parent horizontalOrientation

@param verticalOrientation
@text Vertical Position
@type select
@option bottom
@option top
@desc The orientation of the image. If bottom, the Pad Y will push it up. Otherwise, will push it down.
@default bottom

@param padY
@text Padding Y
@type number
@desc The distance in % that the image will be from the vertical border of the screen.
@default 2
@parent verticalOrientation

*/

}

/* ----------------------------- REGULAR BUTTONS ---------------------------- */
{

/*~struct~buttonsST:

@param key
@text Keyboard key
@type select
@option script @option a @option b @option c @option d @option e @option f @option g @option h @option i @option j @option k @option l @option m @option n @option o @option p @option q @option r @option s @option t @option u @option v @option w @option x @option y @option z @option 0 @option 1 @option 2 @option 3 @option 4 @option 5 @option 6 @option 7 @option 8 @option 9 @option backspace @option tab @option enter @option shift @option ctrl @option alt @option pausebreak @option capslock @option esc @option space @option pageup @option pagedown @option end @option home @option leftarrow @option uparrow @option rightarrow @option downarrow @option insert @option delete @option leftwindowkey @option rightwindowkey @option selectkey @option numpad0 @option numpad1 @option numpad2 @option numpad3 @option numpad4 @option numpad5 @option numpad6 @option numpad7 @option numpad8 @option numpad9 @option multiply" @option add @option subtract @option decimalpoint @option divide @option f1 @option f2 @option f3 @option f4 @option f5 @option f6 @option f7 @option f8 @option f9 @option f10 @option f11 @option f12 @option numlock @option scrolllock @option semicolon @option equalsign @option comma @option dash @option period @option forwardslash @option graveaccent @option openbracket @option backslash @option closebracket @option singlequote
@desc Put the keyboard letter here.
If you want to use a script choose "script".
@default z

@param scriptIn
@text Script In
@type note
@desc The script call to run when button is pressed.
@default 

@param scriptOut
@text Script Out
@type note
@desc The script call to run when button is not pressed anymore.
@default

@param scenes
@text Allowed Scenes
@type combo[]
@option Scene_Title @option Scene_Map @option Scene_Menu @option Scene_Item @option Scene_Skill @option Scene_Equip @option Scene_Status @option Scene_Options @option Scene_Save @option Scene_Load @option Scene_GameEnd @option Scene_Shop @option Scene_Name @option Scene_Debug @option Scene_Name @option Scene_Battle @option Scene_Gameover
@desc A list of all scenes that will use this button.
It is case sensitive.
@default []

@param condition
@text Allowed Condition
@type note
@desc A custom condition to show this button, besides the scene.
@default "return true"

@param img
@text Image
@type file
@dir img/screen_controls
@desc The image used for the button.
@default 

@param width
@text Size
@type number
@min 0
@max 100
@desc Set the size according to the screen area percent.
@default 5

@param horizontalOrientation
@text Horizontal Position
@type select
@option left
@option right
@desc The orientation of the image. If left, the Pad X will push it right. Otherwise, will push it left.
@default left

@param padX
@text Padding X
@type number
@desc The distance in % that the image will be from the horizontal border of the screen.
@default 2
@parent horizontalOrientation

@param verticalOrientation
@text Vertical Position
@type select
@option bottom
@option top
@desc The orientation of the image. If bottom, the Pad Y will push it up. Otherwise, will push it down.
@default bottom

@param padY
@text Padding Y
@type number
@desc The distance in % that the image will be from the vertical border of the screen.
@default 2
@parent verticalOrientation

@param vibration
@text Vibration
@type text
@desc The vibration in miliseconds. Leave it 0 for no vibration.
@default 0

*/

}

/* ----------------------------- CONTROL BUTTON ----------------------------- */
{

/*~struct~controlButtonST:

@param enable
@text Enable Control Button
@type boolean
@desc Set true to use this button.
@default true

@param img
@text Image
@type file
@dir img/screen_controls
@desc The image used for the button.
@default 

@param width
@text Size
@type number
@min 0
@max 100
@desc Set the size according to the screen area percent.
@default 5

@param horizontalOrientation
@text Horizontal Position
@type select
@option left
@option right
@desc The orientation of the image. If left, the Pad X will push it right. Otherwise, will push it left.
@default left

@param padX
@text Padding X
@type number
@desc The distance in % that the image will be from the horizontal border of the screen.
@default 2
@parent horizontalOrientation

@param verticalOrientation
@text Vertical Position
@type select
@option bottom
@option top
@desc The orientation of the image. If bottom, the Pad Y will push it up. Otherwise, will push it down.
@default top

@param padY
@text Padding Y
@type number
@desc The distance in % that the image will be from the vertical border of the screen.
@default 2
@parent verticalOrientation

@param vibration
@text Vibration
@type number
@desc The vibration in miliseconds. Leave it 0 for no vibration.
@default 0

@param enableScreenMove
@text Enable screen movement
@type boolean
@desc Set to TRUE if you want to enable screen movement when hiding the controls.
@default true

@param enableDoubleTouchMenu
@text Enable double touch menu
@type boolean
@desc Set to FALSE if you want to enable menu call with double touch when hiding the controls.
@default true

*/
    
}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_MobileControls = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
{

const CONTROLS_PATH = "img/screen_controls/"

/* ------------------------------- BUTTON BASE ------------------------------ */
class BaseButton {

    constructor(){
        this.initMembers()
    }

    initMembers(){
        this.area = new Rectangle(0, 0, 0, 0)
        this.isOffScreen = false
        this.active = false
        this.touchId = null
        this.divs = [document.createElement("div")]
        this.imgs = [document.createElement("img")]
    }

    createArea(){
        const mainRect = this.divs[0].getBoundingClientRect()
        this.area = new Rectangle(mainRect.x, mainRect.y, mainRect.width, mainRect.height)
    }

    initialize(parameters){
        this.setParameters(parameters)
    }

    setParameters(parameters){
        this.parameters = parameters
    }

    getScreenUnitsByOrientation(){
        if(Plugin.isLandscape()){
            return ["vw", "vh"]
        }else{
            return ["vh", "vw"]
        }
    }

    deactivate(){
		this.touchId = null
		this.active = false
    }

    setListeners(){
        if(Utils.isMobileDevice()){
            this.setMobileListeners()
        }else{
            this.setMouseListeners()
        }
    }

    setMouseListeners(){
        document.addEventListener('mousemove', this.handleMove.bind(this), {passive: false})
        document.addEventListener('mouseup', this.handleUp.bind(this))
    }

    setMobileListeners(){
        document.addEventListener('touchmove', this.handleMove.bind(this), {passive: false})
        document.addEventListener('touchend', this.handleUp.bind(this))
    }

    handleDown(event){
        event.stopPropagation()
        event.preventDefault()
        if(event.changedTouches){
            this.touchId = event.changedTouches[0].identifier
        }
        this.active = true
        this.setHotImg()
	}

    trackChangedTouches(event){
        let hasChangedTouches = false

        for (let i = 0; i < event.changedTouches.length; i++){
            if (this.touchId == event.changedTouches[i].identifier){
                hasChangedTouches = true
                event.clientX = event.changedTouches[i].clientX
                event.clientY = event.changedTouches[i].clientY
            }
        }
    
        return hasChangedTouches
    }

    handleMove(event){
        if(!this.active || event.changedTouches && !this.trackChangedTouches(event)) return
        this.operateHandleMove(event)
    }

    operateHandleMove(event){}

    isAnotherTouchId(event){
        return event.changedTouches && this.touchId !== event.changedTouches[0].identifier
    }

    handleUp(event) {
        if(this.active || !this.isAnotherTouchId(event)){
            this.operateHandleUp(event)
        }
    }

    operateHandleUp(event){
        this.setColdImg()
        this.deactivate()
    }

    setColdImg(){
        this.imgs[0].src = this.imgs[0].dataset.imgCold
    }

    setHotImg(){
        this.imgs[0].src = this.imgs[0].dataset.imgHot
    }

    isHidden(){
        return this.divs[0].style.visibility === "hidden"
    }

    isVisible(){
        return this.divs[0].style.visibility === "visible"
    }

    getOffsetXOffScreen(){
        const rect = this.divs[0].getBoundingClientRect()
        const orientation = this.parameters.horizontalOrientation
        const width = rect.width
        if(orientation === "left"){
            return -(width + this.divs[0].offsetLeft)
        }else{
            return width + (window.innerWidth - this.divs[0].offsetLeft)
        }
    }

    hide(){
        if(!this.isOffScreen){
            const offsetX = this.getOffsetXOffScreen()
            this.divs[0].style.transition = '.1s'
            this.divs[0].style.transform = `translate(${offsetX}px, 0px)`
            this.isOffScreen = true
        }
    }

    show(){
        this.divs[0].style.transition = '.1s'
        this.divs[0].style.transform = `translate(0px, 0px)`
        this.isOffScreen = false
    }

}

/* ----------------------------- REGULAR BUTTON ----------------------------- */
class RegularButton extends BaseButton{

	constructor(){
        super()
        this.parameters = {
            horizontalOrientation: "",
            img: "",
            key: "",
            padX: 0,
            padY: 0,
            scenes: [""],
            scriptIn: () => {},
            scriptOut: () => {},
            verticalOrientation: "",
            vibration: 0,
            width: 0,
        }
	}

    initialize(parameters){
        super.initialize(parameters)
        this.createHtmlElements()
        this.setStyleToElements()
        this.appendElements()
        this.deactivate()
        this.setListeners()
        this.setKeyboardKey()
    }

    initMembers(){
        super.initMembers()
        this.keyboardKey = ""
    }

    setKeyboardKey(){
        if(!this.isScriptInput()){
            const keyName = this.parameters.key.toLowerCase()
            const key = Input.keyMapper[Eli.KeyCodes.keyboard[keyName]]
            this.keyboardKey = key
        }
    }

    createDiv(){
        const div = document.createElement("div")
        
        div.draggable = false  
        div.style.visibility = "hidden"
        div.id = "buttonDiv"
        this.divs[0] = div
    }

    createImage(){
        const coldFrame = `${CONTROLS_PATH}${this.parameters.img}.png`
        const hotFrame = `${CONTROLS_PATH}${this.parameters.img}_hot.png`
        const img = document.createElement("img")

        img.id = "buttonImg"
        img.src = coldFrame
        img.draggable = false
        img.dataset.imgCold = coldFrame
        img.dataset.imgHot = hotFrame
        this.imgs[0] = img
    }

    createHtmlElements(){
        this.createDiv()
        this.createImage()
    }

    onLoad(ev){
        const imgWidth = this.parameters.width
        const divStyle = this.divs[0].style
        const imgStyle = this.imgs[0].style
        const horPos = this.parameters.horizontalOrientation
        const verPos = this.parameters.verticalOrientation
        const [horUnit, verUnit] = this.getScreenUnitsByOrientation()

        divStyle.position = "fixed"
        divStyle.boxSizing = "border-box"
        divStyle[horPos] = `${this.parameters.padX}${horUnit}`
        divStyle[verPos] = `${this.parameters.padY}${verUnit}`

        imgStyle.maxWidth = "100%"
        imgStyle.width = `${imgWidth}${horUnit}`
        imgStyle.height = `auto`

        divStyle.width = this.imgs[0].width
        this.createArea()
    }

    createArea(){
        const mainRect = this.divs[0].getBoundingClientRect()
        this.area = new Rectangle(mainRect.x, mainRect.y, mainRect.width, mainRect.height)
    }

    setStyleToElements(){
        this.imgs[0].addEventListener("load", this.onLoad.bind(this), {once: true})
    }

    appendElements(){
        this.divs[0].append(this.imgs[0])
    }

    setMouseListeners(){
        this.divs[0].addEventListener('mousedown', this.handleDown.bind(this))
        super.setMouseListeners()
    }

    setMobileListeners(){
        this.divs[0].addEventListener('touchstart', this.handleDown.bind(this))
        super.setMobileListeners()
    }

    removeFromScene(){
        this.resetInput()
        this.setColdImg()
        this.deactivate()
        this.divs[0].style.visibility = "hidden"
    }

    addOnScene(){ 
        this.divs[0].style.visibility = "visible"
        this.onLoad()
    }

    handleDown(event){
        super.handleDown(event)
        this.setInput()
	}

    operateHandleMove(event) {
        super.operateHandleMove(event)
        const x = event.clientX
        const y = event.clientY
        if(!this.area.contains(x, y)){
            this.handleUp(event)
        }
    }

    operateHandleUp(event) {
        super.operateHandleUp(event)
        this.resetInput()
    }

    setInput(){
        if(navigator.vibrate){
            navigator.vibrate(this.parameters.vibration)
        }
        if(this.isScriptInput()){
            this.parameters.scriptIn()
        }else{
            const key = this.keyboardKey
            Input._currentState[key] = true
        }
    }

    isScriptInput(){
        return this.parameters.key === "script"
    }

    resetInput(){
        if(this.isScriptInput()){
            this.parameters.scriptOut()
        }else{
            const key = this.keyboardKey
            Input._currentState[key] = false
        }
    }

    canAddToScene(sceneName){
        return this.parameters.scenes.includes(sceneName) && this.parameters.enableCondition()
    }
    
}

/* ----------------------------- CONTROL BUTTON ----------------------------- */
class ControlButton extends RegularButton{

    constructor(){
        super()
        this.parameters = {
            enable: false,
            horizontalOrientation: "",
            img: "",
            padX: 0,
            padY: 0,
            verticalOrientation: "",
            vibrate: 0,
            width: 0,
        }
    }

    initMembers(){
        super.initMembers()
        this.isHidingButtons = false
    }

    setKeyboardKey(){}

    setInput(){
        if($gameMessage.isBusy()) return

        if(this.isHidingButtons){
            Plugin.addButtonsOnScene()
            this.isHidingButtons = false
        }else{
            Plugin.removeButtonsFromScene()
            this.isHidingButtons = true
        }
    }

    resetInput(){}

    canAddToScene(sceneName){
        return true
    }

}

/* ------------------------------- SINGLE DPAD ------------------------------ */
class DpadController extends BaseButton{

	constructor(){
        super()
        this.parameters = {
            baseWidth: 0,
            horizontalOrientation: "",
            img: "",
            padX: 0,
            padY: 0,
            scenes: [""],
            verticalOrientation: "",
        }
	}

    initialize(parameters){
        super.initialize(parameters)
        this.createHtmlElements()
        this.setStyleToElements()
        this.appendElements()
        this.deactivate()
        this.setListeners()
    }

    initMembers(){
        super.initMembers()
        this.directionAreas = new Array(10).fill(new Rectangle(0, 0, 0, 0))
    }

    createDiv(){
        const div = document.createElement("div")
        div.id = "dpadDiv"
        div.draggable = false  
        div.style.visibility = "hidden"
        this.divs[0] = div
    }

    createImage(){
        const coldFrame = `${CONTROLS_PATH}${this.parameters.img}.png`
        const hotFrame = `${CONTROLS_PATH}${this.parameters.img}_hot.png`
        const img = document.createElement("img")
        img.id = "dpadImg"
        img.src = coldFrame
        img.draggable = false
        img.dataset.imgCold = coldFrame
        img.dataset.imgHot = hotFrame
        this.imgs[0] = img
    }

    createHtmlElements(){
        this.createDiv()
        this.createImage()
    }

    onLoad(ev){
        const imgWidth = this.parameters.baseWidth
        const divStyle = this.divs[0].style
        const imgStyle = this.imgs[0].style
        const horPos = this.parameters.horizontalOrientation
        const verPos = this.parameters.verticalOrientation
        const [horUnit, verUnit] = this.getScreenUnitsByOrientation()

        divStyle.position = "absolute"
        divStyle.boxSizing = "border-box"
        divStyle[horPos] = `${this.parameters.padX}${horUnit}`
        divStyle[verPos] = `${this.parameters.padY}${verUnit}`

        imgStyle.maxWidth = "100%"
        imgStyle.width = `${imgWidth}${horUnit}`
        imgStyle.height = `auto`

        divStyle.width = this.imgs[0].width
        this.createArea()
        this.createDirectionArea()
    }

    createDirectionArea(){
        const mainRect = this.divs[0].getBoundingClientRect()
        const width = mainRect.width/3
        const height = mainRect.height/3
        const rect0 = new Rectangle(0, 0, 0, 0)

        const upLeft = new Rectangle(mainRect.x, mainRect.y, width, height)
        const up = new Rectangle(upLeft.right, mainRect.y, width, height)
        const upRight = new Rectangle(up.right, mainRect.y, width, height)

        const left = new Rectangle(mainRect.x, upLeft.bottom, width, height)
        const center = new Rectangle(left.right, upLeft.bottom, width, height)
        const right = new Rectangle(center.right, upLeft.bottom, width, height)

        const downLeft = new Rectangle(mainRect.x, left.bottom, width, height)
        const down = new Rectangle(downLeft.right, left.bottom, width, height)
        const downRight = new Rectangle(down.right, left.bottom, width, height)

        this.directionAreas = [
            rect0, downLeft, down, downRight, left, center, right, upLeft, up,upRight
        ]
    }

    setStyleToElements(){
        this.imgs[0].addEventListener("load", this.onLoad.bind(this), {once: true})
    }

    appendElements(){
        this.divs[0].append(this.imgs[0])
    }

    setMouseListeners(){
        this.divs[0].addEventListener('mousedown', this.handleDown.bind(this))
        super.setMouseListeners()
    }

    setMobileListeners(){
        this.divs[0].addEventListener('touchstart', this.handleDown.bind(this))
        super.setMobileListeners()
    }

    removeFromScene(){
        this.setColdImg()
        this.resetInput()
        this.deactivate()
        this.divs[0].style.visibility = "hidden"
    }

    addOnScene(){ 
        this.divs[0].style.visibility = "visible"
        this.onLoad()
    }

    getClientCoordinates(event){
        if(event.changedTouches){
            return { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }
        }else{
            return { x: event.clientX, y: event.clientY }
        }
    }

    getTouchId(event){
        return event.changedTouches[0].identifier
    }

    getDirection(coordinates){
        const {x, y} = coordinates
        return this.directionAreas.findIndex(rect => rect.contains(x, y))
    }

    handleDown(event){
        super.handleDown(event)
        const coordinates = this.getClientCoordinates(event)
        const direction = this.getDirection(coordinates)
        this.setInput(direction)
	}

    operateHandleMove(event) {
        super.operateHandleMove(event)
        const x = event.clientX
        const y = event.clientY
        const diretion = this.getDirection({x, y})
        this.setInput(diretion)
    }

    operateHandleUp(event) {
        super.operateHandleUp(event)
        this.resetInput()
    }

    setInput(direction){
        const isRight = [6, 3, 9].includes(direction)
        const isDown =[2, 1, 3].includes(direction)
        const isLeft = [4, 7, 1].includes(direction)
        const isUp = [8, 7, 9].includes(direction)
        const isDownRight = direction === 3
        const isDownLeft = direction === 1
        const isUpLeft = direction === 7
        const isUpRight = direction === 9

        Input._currentState['right'] = isRight || isDownRight || isUpRight
        Input._currentState['down'] = isDown || isDownRight || isDownLeft
        Input._currentState['left'] = isLeft || isDownLeft || isUpLeft
        Input._currentState['up'] = isUp || isUpLeft || isUpRight
    }

    resetInput(){
        Input._currentState['up'] = false
        Input._currentState['down'] = false
        Input._currentState['left'] = false
        Input._currentState['right'] = false
    }

    canAddToScene(sceneName){
        return this.parameters.scenes.includes(sceneName) && this.parameters.enableCondition()
    }
    
}

/* -------------------------------- JOYSTICK -------------------------------- */
class JoystickController extends BaseButton{

	constructor(){
        super()
        this.parameters = {
            ballImg: "",
            ballWidth: 0,
            baseImg: "",
            baseWidth: 0,
            extraDistance: 0,
            horizontalOrientation: "",
            padX: 0,
            padY: 0,
            scenes: [""],
            verticalOrientation: "",
        }
	}

    initialize(parameters){
        super.initialize(parameters)
        this.createHtmlElements()
        this.appendElements()
        this.setStyleToElements()
        this.deactivate()
        this.setListeners()
    }

    initMembers(){
        super.initMembers()
        this.divs[1] = document.createElement("div")
        this.imgs[1] = document.createElement("img")
        this.maxDistance = 0
        this.dragStart = null
    }

    createBaseDiv(){
        const div = document.createElement("div")
        div.id = "joystickBaseDiv"
        div.draggable = false  
        div.style.visibility = "hidden"
        this.divs[0] = div
    }

    createBaseImg(){
        const coldFrame = `${CONTROLS_PATH}${this.parameters.baseImg}.png`
        const hotFrame = `${CONTROLS_PATH}${this.parameters.baseImg}_hot.png`
        const img = document.createElement("img")
        img.id = "joystickBaseImg"
        img.src = coldFrame
        img.draggable = false
        img.dataset.imgCold = coldFrame
        img.dataset.imgHot = hotFrame
        this.imgs[0] = img
    }

    createStickDiv(){
        const div = document.createElement("div")
        div.id = "joystickBallDiv"
        div.draggable = false
        this.divs[1] = div
        this.divs[1].style.visibility = "hidden"
    }

    createStickImg(){
        const coldFrame = `${CONTROLS_PATH}${this.parameters.ballImg}.png`
        const hotFrame = `${CONTROLS_PATH}${this.parameters.ballImg}_hot.png`
        const img = document.createElement("img")
        img.id = "joystickBallImg"
        img.src = coldFrame
        img.draggable = false
        img.dataset.imgCold = coldFrame
        img.dataset.imgHot = hotFrame
        this.imgs[1] = img
    }

    createHtmlElements(){
        this.createBaseDiv()
        this.createBaseImg()
        this.createStickDiv()
        this.createStickImg()
    }

    onLoad(ev){
        const imgWidth = this.parameters.baseWidth
        const divStyle = this.divs[0].style
        const imgStyle = this.imgs[0].style
        const horPos = this.parameters.horizontalOrientation
        const verPos = this.parameters.verticalOrientation
        const [horUnit, verUnit] = this.getScreenUnitsByOrientation()

        divStyle.position = "fixed"
        divStyle.boxSizing = "border-box"
        divStyle[horPos] = `${this.parameters.padX}${horUnit}`
        divStyle[verPos] = `${this.parameters.padY}${verUnit}`
        imgStyle.maxWidth = "100%"
        imgStyle.width = `${imgWidth}${horUnit}`
        imgStyle.height = `auto`

        divStyle.width = this.imgs[0].width
        this.imgs[1].addEventListener("load", this.onStickImgLoad.bind(this), {once: true})
    }

    onStickImgLoad(ev){
        const imgWidth = this.parameters.ballWidth
        const divStyle = this.divs[1].style
        const imgStyle = this.imgs[1].style
        const xPos = () => this.imgs[0].width/2 - this.imgs[1].width/2
        const yPos = () => this.imgs[0].height/2 - this.imgs[1].height/2
        const [horUnit, verUnit] = this.getScreenUnitsByOrientation()

        divStyle.position = "absolute"
        imgStyle.maxWidth = "100%"
        imgStyle.width = `${imgWidth}${horUnit}`
        imgStyle.height = `auto`
        divStyle.width = this.imgs[1].width
        divStyle.top = `${yPos()}px`
        divStyle.left = `${xPos()}px`
        this.maxDistance = Math.abs(this.divs[0].clientWidth/2 - this.divs[1].clientWidth/2) + this.parameters.extraDistance
        this.createArea()
    }

    setStyleToElements(){
        this.imgs[0].addEventListener("load", this.onLoad.bind(this), {once: true})
    }

    appendElements(){
        this.divs[0].append(this.imgs[0], this.divs[1])
        this.divs[1].append(this.imgs[1])
    }

    deactivate(){
        super.deactivate()
		this.dragStart = null
    }

    setMouseListeners(){
        this.divs[1].addEventListener('mousedown', this.handleDown.bind(this))
        super.setMouseListeners()
    }

    setMobileListeners(){
        this.divs[1].addEventListener('touchstart', this.handleDown.bind(this))
        super.setMobileListeners()
    }

    handleDown(event){
        this.divs[1].style.transition = '0s'
        super.handleDown(event)
        this.setDragStart(event)
	}

    operateHandleMove(event){
        super.operateHandleMove(event)
        const [xDiff, yDiff] = this.getCoordinateDifference(event)
        const [angle, distance] = this.getAngleAndDistance(xDiff, yDiff)

        this.moveStick(angle, distance)

        if(this.isOnDeadZone(distance)){
            this.resetMoveInput()
        }else{
            this.setInput(angle)
        }
    }

    operateHandleUp(event){
        super.operateHandleUp(event)
        this.resetStickPosition()
        this.resetMoveInput()
    }

    isHidden(){
        return  super.isHidden() && 
                this.divs[1].style.visibility === "hidden"
    }

    isVisible(){
        return  super.isVisible() && 
                this.divs[1].style.visibility === "visible"
    }

    removeFromScene(){
        this.divs[1].style.transition = '0s'
        this.divs[1].style.visibility = "hidden"
        this.divs[0].style.visibility = "hidden"
    }

    addOnScene(){
        this.divs[1].style.visibility = "visible"
        this.divs[0].style.visibility = "visible"
        this.onLoad()
        this.onStickImgLoad()
    }

    setDragStart(event){
        if(event.changedTouches){
            this.dragStart = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }
        }else{
            this.dragStart = { x: event.clientX, y: event.clientY }
        }
    }

    setColdImg(){
        super.setColdImg()
        this.imgs[1].src = this.imgs[1].dataset.imgCold
    }

    setHotImg(){
        super.setHotImg()
        this.imgs[1].src = this.imgs[1].dataset.imgHot
    }

    getCoordinateDifference(event){
        const xDiff = event.clientX - this.dragStart.x
        const yDiff = event.clientY - this.dragStart.y

        return [xDiff, yDiff]
    }

    isOnDeadZone(distance){
        const deadZone = this.imgs[1].width / 2
        return distance < deadZone
    }

    moveStick(angle, distance){
        const [xPosition, yPosition] = this.getStickOffset(angle, distance)
        this.divs[1].style.transform = `translate(${xPosition}px, ${yPosition}px)`
    }

    getStickOffset(angle, distance){
        const xPosition = distance * Math.cos(angle)
        const yPosition = distance * Math.sin(angle)

        return [xPosition, yPosition]
    }

    getAngleAndDistance(xDiff, yDiff){
        const angle = Math.atan2(yDiff, xDiff)
        const distance = Math.min(this.maxDistance, Math.hypot(xDiff, yDiff))

        return [angle, distance]
    }

    resetStickPosition(){
        this.divs[1].style.transition = '.2s'
        this.divs[1].style.transform = `translate(0px, 0px)`
    }

    isBetween(number, min, max){
        return number > min && number < max
    }

    isBetweenOrEqual(number, min, max){
        return number >= min && number <= max
    }

    setInput(angle){
        angle *= (180/Math.PI)

        const isRight = this.isBetweenOrEqual(angle, -45, 45)
        const isDown = this.isBetweenOrEqual(angle, 45, 135)
        const isLeft = this.isBetweenOrEqual(angle, 135, 180) || this.isBetweenOrEqual(angle, -180, -135)
        const isUp = this.isBetweenOrEqual(angle, -135, -45)
        const isDownRight = this.isBetweenOrEqual(angle, 22.5, 67.5)
        const isDownLeft = this.isBetweenOrEqual(angle, 112.5, 157.5)
        const isUpLeft = this.isBetweenOrEqual(angle, -157.5, -112.5)
        const isUpRight = this.isBetweenOrEqual(angle, -67.5, -22.5)

        Input._currentState['right'] = isRight || isDownRight || isUpRight
        Input._currentState['down'] = isDown || isDownRight || isDownLeft
        Input._currentState['left'] = isLeft || isDownLeft || isUpLeft
        Input._currentState['up'] = isUp || isUpLeft || isUpRight
    }

    resetMoveInput(){
        Input._currentState['up'] = false
        Input._currentState['down'] = false
        Input._currentState['left'] = false
        Input._currentState['right'] = false
    }

    canAddToScene(sceneName){
        return this.parameters.scenes.includes(sceneName) && this.parameters.enableCondition()
    }
    
}

/* ------------------------------ PLUGIN OBJECT ----------------------------- */
class Parameters{
    constructor(parameters){
        this.allowedPlatforms = JSON.parse(parameters.allowedPlatforms)
        this.disableDoubleTouchMenu = parameters.disableDoubleTouchMenu === "true"
        this.disableScreenMove = parameters.disableScreenMove === "true"
        this.hideOnMessage = parameters.hideOnMessage === "true"
        this.fixButtonSize = (parameters.fixButtonSize || "false") === "true"
        this.fixButtonInterval = Math.max(Number(parameters.fixButtonInterval || "120"), 1)
        this.dPadType = parameters.dPadType
        this.controlButton = this.parseControlButtonParameters(parameters.controlButton)
        this.joystickPad = this.parseJoystickParameters(parameters.joystickPad)
        this.singlePad = this.parseSinglePadParameters(parameters.singlePad)
        this.buttons = this.parseRegularButtonParameters(parameters.buttons)
    }

    parseControlButtonParameters(rawParam){
        const param = JSON.parse(rawParam)

        return {
            enable: param.enable === "true",
            horizontalOrientation: param.horizontalOrientation,
            img: param.img,
            padX: Number(param.padX),
            padY: Number(param.padY),
            verticalOrientation: "",
            vibration: Number(param.vibration),
            width: Number(param.width),
            enableScreenMove: param.enableScreenMove === "true",
            enableDoubleTouchMenu: param.enableDoubleTouchMenu === "true",
        }
    }

    parseSinglePadParameters(rawParam){
        const param = JSON.parse(rawParam)

        return {
            baseWidth: Number(param.baseWidth),
            horizontalOrientation: param.horizontalOrientation,
            img: param.img,
            padX: Number(param.padX),
            padY: Number(param.padY),
            scenes: JSON.parse(param.scenes),
            verticalOrientation: param.verticalOrientation,
            enableCondition: param.condition ? new Function(`${JSON.parse(param.condition)}`) : new Function("return true")
        }
    }

    parseJoystickParameters(rawParam){
        const param = JSON.parse(rawParam)

        return {
            ballImg: param.ballImg,
            ballWidth: Number(param.ballWidth),
            baseImg: param.baseImg,
            baseWidth: Number(param.baseWidth),
            extraDistance: Number(param.extraDistance),
            horizontalOrientation: param.horizontalOrientation,
            padX: Number(param.padX),
            padY: Number(param.padY),
            scenes: JSON.parse(param.scenes),
            verticalOrientation: param.verticalOrientation,
            enableCondition: param.condition ? new Function(`${JSON.parse(param.condition)}`) : new Function("return true")
        }
    }

    parseRegularButtonParameters(rawParam){
        const buttonParams = JSON.parse(rawParam)
        const buttons = []

        for(const param of buttonParams){
            const button = JSON.parse(param)
            buttons.push({
                horizontalOrientation: button.horizontalOrientation,
                img: button.img,
                key: button.key,
                padX: Number(button.padX),
                padY: Number(button.padY),
                scenes: JSON.parse(button.scenes),
                scriptIn: button.scriptIn.length > 4 ? new Function(JSON.parse(button.scriptIn)) : new Function(),
                scriptOut: button.scriptOut.length > 4 ? new Function(JSON.parse(button.scriptOut)) : new Function(),
                verticalOrientation: button.verticalOrientation,
                vibration: Number(button.vibration),
                width: Number(button.width),
                enableCondition: button.condition ? new Function(`${JSON.parse(button.condition)}`) : new Function("return true")
            })
        }

        return buttons
    }
}

Eli.MobileControls = {

    alias: {},
    url: "https://hakuenstudio.itch.io/eli-mobile-controls-for-rpg-maker",
    BaseButton: BaseButton,
    RegularButton: RegularButton,
    ControlButton: ControlButton,
    JoystickController: JoystickController,
    DpadController: DpadController,
    Parameters: Parameters,
    parameters: new Parameters(PluginManager.parameters("Eli_MobileControls")),
    elements: [],
    divContainer: document.createElement('div'),
    joystick: new JoystickController(),
    dpad: new DpadController(),
    controlButton: new ControlButton(),
    buttonList: [],
    isHidingButtons: false,

    initialize(){},

    initPluginCommands(){},

    createHtmlElements(){
        this.createDiv()
        this.createDpad()
        for(const parameters of this.param().buttons){
            this.createRegularButtons(parameters)
        }
        if(this.param().controlButton.enable){
            this.createControlButtons()
        }
        this.disableContextMenu()
    },

    createDiv(){
        const div = document.createElement('div')
        div.id = 'ScreenButton'
        div.style.position = "absolute"
        div.style.overflow = "hidden"
        div.style.zIndex = "11"
        div.style.top = 0+'px'
        div.style.left = 0+'px'
        div.style.right = 0+'px'
        div.style.bottom = 0+'px'
        div.style.margin = "auto"
        document.body.append(div)
        this.divContainer = div
    },

    createDpad(){
        if(this.param().dPadType === "singlePad"){
            this.createSingleDpad()

        }else if(this.param().dPadType === "joystick"){
            this.createJoystick()
        }
    },

    createSingleDpad(){
        this.dpad.initialize(this.param().singlePad)
        this.addToDiv(this.dpad.divs[0])
        this.elements.push(this.dpad.divs[0])
        this.buttonList.push(this.dpad)
    },

    createJoystick(){
        this.joystick.initialize(this.param().joystickPad)
        this.buttonList.push(this.joystick)
        this.elements.push(this.joystick.divs[0])
        this.addToDiv(this.joystick.divs[0])
    },

    createRegularButtons(parameters){
        const button = new RegularButton()
        button.initialize(parameters)

        this.addToDiv(button.divs[0])
        this.elements.push(button.divs[0])
        this.buttonList.push(button)
    },

    createControlButtons(){    
        this.controlButton.initialize(this.param().controlButton)
        this.addToDiv(this.controlButton.divs[0])
    },

    disableContextMenu(){
        const oncontextmenu = (ev) => {
            ev.preventDefault()
            return false
        }
        this.divContainer.addEventListener("contextmenu", oncontextmenu)
        this.elements.forEach(element => {
            element.addEventListener("contextmenu", oncontextmenu)
        })
    },

    isMenuDisabledByDoubleTouch(){
        return this.param().disableDoubleTouchMenu && !this.controlButton.isHidingButtons
    },

    isControlButtonDisablingMenuByDoubleTouch(){
        return  (this.controlButton.isHidingButtons && !this.param().controlButton.enableDoubleTouchMenu) ||
                this.controlButton.area.contains(TouchInput._x, TouchInput._y)
    },

    isMovementDisabledByScreenTouch(){
        return this.param().disableScreenMove && !this.controlButton.isHidingButtons
    },

    isControlButtonDisablingMovementByScreenTouch(){
        return  (this.controlButton.isHidingButtons && !this.param().controlButton.enableScreenMove) || 
                this.controlButton.area.contains(TouchInput._x, TouchInput._y)
    },

    getDiv(){
        return this.divContainer
    },

    addToDiv(element){
        this.getDiv().append(element)
    },

    removeButtonsFromScene(){
        const scene = SceneManager._scene.constructor.name

        for(const button of this.buttonList){

            if(button.canAddToScene(scene)){
                button.removeFromScene()
            }
        }
    },

    addButtonsOnScene(){
        const scene = SceneManager._scene.constructor.name

        for(const button of this.buttonList){

            if(button.canAddToScene(scene)){
                button.addOnScene()
            }
        }
    },

    canRefreshButtonsForScene(){
        return  !this.controlButton.isHidingButtons &&
                SceneManager._scene
    },

    refreshButtonsForScene(){
        const scene = SceneManager._scene.constructor.name

        if(this.param().controlButton.enable){
            this.controlButton.divs[0].style.visibility = "visible"
        }
        
        for(const button of this.buttonList){

            if(button.canAddToScene(scene)){
                button.addOnScene()
            }else{
                button.removeFromScene()
            }
        }
    },

    refreshKeyboardKeys(){
        for(const button of Plugin.buttonList){
            if(button.setKeyboardKey && !button.keyboardKey){
                button.setKeyboardKey()
            }
        }
    },

    hideButtons(){
        const scene = SceneManager._scene.constructor.name

        for(const button of this.buttonList){

            if(button.canAddToScene(scene)){
                button.hide()
            }
        }

        this.isHidingButtons = true
    },

    showButtons(){
        const scene = SceneManager._scene.constructor.name

        for(const button of this.buttonList){

            if(button.canAddToScene(scene)){
                button.show()
            }
        }

        this.isHidingButtons = false
    },

    getControlButton(){
        return this.controlButton
    },

    isLandscape(){
        if(typeof screen.orientation === "undefined"){
            return window.innerHeight < window.innerWidth //detect landscape old style
        }else{
            return screen.orientation.type.includes("landscape")    
        }
    },

    anyButtonAreaContains(x, y){
        const allAreas = this.buttonList.map(item => item.area)

        return allAreas.some(item => item.contains(x, y))
    },

    isMovingWithButtons(){
        return this.joystick.active || this.dpad.active
    },

    param(){
        return this.parameters
    },

    isAllowedOnDesktop(){
        return Utils.isNwjs() && this.parameters.allowedPlatforms.includes("Desktop")
    },

    isAllowedOnMobile(){
        return Utils.isMobileDevice() && this.parameters.allowedPlatforms.includes("Mobile")
    },

    isAllowedOnWebBrowser(){
        return !Utils.isNwjs() && !Utils.isMobileDevice() && this.parameters.allowedPlatforms.includes("Web Browser")
    },

    isMobileControlsAllowed(){
        return Utils.isOptionValid("test") || this.isAllowedOnDesktop() || this.isAllowedOnMobile() || this.isAllowedOnWebBrowser()
    }

}

const Plugin = Eli.MobileControls
const Alias = Eli.MobileControls.alias

Plugin.initialize()

if(Plugin.isMobileControlsAllowed()){

/* -------------------------------- GRAPHICS -------------------------------- */
{

Alias.Graphics_switchStretchMode = Graphics._switchStretchMode
Graphics._switchStretchMode = function() {
    Alias.Graphics_switchStretchMode.call(this)
    if(Plugin.canRefreshButtonsForScene()){
        setTimeout(Plugin.refreshButtonsForScene.bind(Plugin), 50)
    }
}

Alias.Graphics_switchFullScreen = Graphics._switchFullScreen
Graphics._switchFullScreen = function() {
    Alias.Graphics_switchFullScreen.call(this)
    if(Plugin.canRefreshButtonsForScene()){
        setTimeout(Plugin.refreshButtonsForScene.bind(Plugin), 50)
    }
}

Alias.Graphics_createErrorPrinter = Graphics._createErrorPrinter
Graphics._createErrorPrinter = function() {
    Alias.Graphics_createErrorPrinter.call(this)
    this._errorPrinter.style.pointerEvents = "none"
}

Alias.Graphics_updateErrorPrinter = Graphics._updateErrorPrinter
Graphics._updateErrorPrinter = function() {
    Alias.Graphics_updateErrorPrinter.call(this)
    this._errorPrinter.style.pointerEvents = "none"
}

}

/* ------------------------------ DATA MANAGER ------------------------------ */
{

Alias.DataManager_createGameObjects = DataManager.createGameObjects
DataManager.createGameObjects = function() {
    Alias.DataManager_createGameObjects.call(this)
    Plugin.refreshKeyboardKeys()
}

}

/* -------------------------------- GAME TEMP ------------------------------- */
{

Alias.Game_Temp_setDestination = Game_Temp.prototype.setDestination
Game_Temp.prototype.setDestination = function(x, y) {
    if(Plugin.isMovingWithButtons()){
        x = null
        y = null
    }else if(Plugin.isControlButtonDisablingMovementByScreenTouch()){
        x = null
        y = null
    }else if(Plugin.isMovementDisabledByScreenTouch()){
        x = null
        y = null
    } else if(Plugin.anyButtonAreaContains(TouchInput._x, TouchInput._y)){
        x = null
        y = null
    }

    Alias.Game_Temp_setDestination.call(this, x, y)
}
    
}

/* ------------------------------- SCENE BOOT ------------------------------- */
{

Alias.Scene_Boot_create = Scene_Boot.prototype.create
Scene_Boot.prototype.create = function() {
    Alias.Scene_Boot_create.call(this)
    Plugin.createHtmlElements()
}

}

/* ------------------------------- SCENE BASE ------------------------------- */
{

Alias.Scene_Base_start = Scene_Base.prototype.start
Scene_Base.prototype.start = function(){
    Alias.Scene_Base_start.call(this)

    if(Plugin.canRefreshButtonsForScene()){
        Plugin.refreshButtonsForScene()
    }
}

if(Plugin.param().fixButtonSize && !Utils.isNwjs()){

    Alias.Scene_Base_update = Scene_Base.prototype.update
    Scene_Base.prototype.update = function(){
        Alias.Scene_Base_update.call(this)
        this.keepRefreshingMobileButtonsForScene()
    }

    Scene_Base.prototype.keepRefreshingMobileButtonsForScene = function(){
        Plugin.timeForRefresh++

        if(Plugin.canRefreshButtonsForScene() && Plugin.timeForRefresh >= Plugin.param().fixButtonInterval){
            Plugin.refreshButtonsForScene()
            Plugin.timeForRefresh = 0
        }
    }
}

}

/* -------------------------------- SCENE MAP ------------------------------- */
{

Alias.Scene_Map_isMenuCalled = Scene_Map.prototype.isMenuCalled
Scene_Map.prototype.isMenuCalled = function() {
    if(this.isMenuDisabledByMobileControls()){
        return false
    }
    return Alias.Scene_Map_isMenuCalled.call(this)
}

Scene_Map.prototype.isMenuDisabledByMobileControls = function() {
    const isMobileDisabling = Plugin.isMenuDisabledByDoubleTouch() || Plugin.isControlButtonDisablingMenuByDoubleTouch()
    return isMobileDisabling && TouchInput.isCancelled()
}

}

/* ----------------------------- WINDOW MESSAGE ----------------------------- */
{

Alias.Window_Message_update = Window_Message.prototype.update
Window_Message.prototype.update = function() {
    if(this.canUpdateMobileControls()){
        this.updateMobileControls()
    }
    
    return Alias.Window_Message_update.call(this)
}

Window_Message.prototype.canUpdateMobileControls = function(){
    return  Plugin.param().hideOnMessage && 
            !Plugin.getControlButton().isHidingButtons
}

Window_Message.prototype.canHideMobileControls = function(){
    return  this.isOpening() || this.isOpen() 
}

Window_Message.prototype.updateMobileControls = function() {
    if(this.canHideMobileControls()){
        Plugin.hideButtons()

    }else if(this.isClosing()){
        Plugin.showButtons()
    }
}

}

}

}