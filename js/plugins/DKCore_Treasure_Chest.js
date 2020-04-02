/*
Название: Сундук с Сокровищами (Treasure Chest)
Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Группа ВК: http://vk.com/rpgmakervxaceandmv
Сайт: http://dk-plugins.ru/
Версия: 2.1
Релиз: 23.02.2016
Первый релиз: 03.02.2016
*/

/*:
 * @plugindesc v.2.1 Добавляет сундук с сокровищами с возможностью выбора нужных предметов
 * @author DK (Денис Кузнецов)
 * @help
 
 ### Информация о плагине ###
 Название: DKCore_Treasure_Chest
 Автор: DK
 Группа ВК: http://vk.com/rpgmakervxaceandmv
 Сайт: http://dk-plugins.ru/
 Версия: 2.1
 Релиз: 23.02.2016
 Первый релиз: 03.02.2016
 
 ### Требования к плагину ###
 Наличие включенного плагина DKCore версии 1.61 или выше
 
 ### Инструкция ###
 Если Вы выбрали опцию коллекционировать все предметы, Вы можете принудительно
 разъединить нужную вещь, написав в заметки: <not collect treasure>
 Если Вы не выбрали эту опцию, то необходимую вещь можно соединить,
 написав в заметки: <collect treasure>
 
 В событии вызвать сценарий для добавления вещей, оружия, брони и золота
 Необязательно добавлять все. Можно, например, только вещи.
 Для вещей:
 $Treasure_Chest.item = {
	'номер':количество,
	'номер':количество
 };
 
 Для оружия:
 $Treasure_Chest.weapon = {};
 
 Для брони:
 $Treasure_Chest.armor = {};
 
 Для золота:
 $Treasure_Chest.gold = 150000;
 
 Пример добавления оружия:
 $Treasure_Chest.weapon = {
	'1':3,
	'3':1,
	'4':2
 };
 
 Далее вызвать this.openTreasureChest(treasure_name, party_name, take_all);
 где treasure_name - название сундука (стандартно: сокровища)
 party_name - название партии (стандартно: партия)
 take_all - заставить игрока взять все вещи (стандартно: false)
 
 Можно вызвать this.openTreasureChest();
 чтобы использовать стандартные имена и не заставлять игрока брать все вещи
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
 * @param Общие настройки
 * @default ---------------------------------
 
 * @param Коллекционирование всех предметов
 * @desc Предметы не будут занимать отдельные ячейки. true - да, false - нет
Стандартно: true
 * @default true
 
 * @param Обложка окон
 * @desc Название обложки для всех окон
Стандартно: -1
 * @default -1
 
 * @param Окна без рамки
 * @desc Отображать все окна без рамки ? true - да, false - нет
Стандартно: false
 * @default false
 
 * @param Настройки золота
 * @default ---------------------------------
 
 * @param Название золота
 * @desc Название золота
Стандартно: -1
 * @default -1
 
 * @param Иконка золота
 * @desc Номер иконки золота
Стандартно: 314
 * @default 314
 
 * @param Описание золота
 * @desc Описание золота
Стандартно: -1
 * @default -1
 
 * @param Окно описания предмета
 * @default ---------------------------------
 
 * @param Шрифт названия предмета
 * @desc Название шрифта, курсив, размер текста
Стандартно: -1, false, -1
 * @default -1, false, -1
 
 * @param Шрифт цены предмета
 * @desc Название шрифта, курсив, размер текста
Стандартно: -1, false, -1
 * @default -1, false, -1
 
 * @param Шрифт описания предмета
 * @desc Название шрифта, курсив, размер текста
Стандартно: -1, false, -1
 * @default -1, false, -1
 
 * @param Прозрачность окна описания предмета
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна описания предмета
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Цвет цены предмета
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Окно названия сокровищ
 * @default ---------------------------------

 * @param Шрифт названия сокровищ
 * @desc Название шрифта, курсив, размер текста
Стандартно: -1, false, -1
 * @default -1, false, -1
 
 * @param Прозрачность окна названия сокровищ
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна названия сокровищ
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Цвет названия сокровищ
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Окно сокровищ
 * @default ---------------------------------
 
 * @param Прозрачность окна сокровищ
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна сокровищ
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Цвет линий окна сокровищ
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Окно управления
 * @default ---------------------------------
 
 * @param Шрифт окна управления
 * @desc Название шрифта, курсив, размер текста
Стандартно: -1, false, -1
 * @default -1, false, -1
 
 * @param Прозрачность окна управления
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна управления
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Цвет текста окна управления
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 */
 
 var Imported = Imported || {};
Imported.DKCore_Treasure_Chest = true;

var DKVersion = DKVersion || {};
DKVersion.DKCore_Treasure_Chest = 2.1;

var DKCoreVersion = DKCoreVersion || {};
DKCoreVersion.DKCore_Treasure_Chest = 1.61;

if (Imported.DKCore)
	DKCore.checkVersion();
else
{
	alert('Отсутствует плагин DKCore! Плагин DKCore_Treasure_Chest не будет работать!');
	SceneManager.exit();
}

var $Treasure_Chest = {};

var TreasureChestParam = {};
TreasureChestParam.param = PluginManager.parameters('DKCore_Treasure_Chest');

// Инициализация общих настроек
TreasureChestParam.collect_treasure = DKCore.toBool(TreasureChestParam.param['Коллекционирование всех предметов']);
TreasureChestParam.windowskin = TreasureChestParam.param['Обложка окон'];
TreasureChestParam.without_frame = DKCore.toBool(TreasureChestParam.param['Окна без рамки']);

// Инициализация настроек золота
TreasureChestParam.gold = {};
TreasureChestParam.gold.name = TreasureChestParam.param['Название золота'];
TreasureChestParam.gold.icon = Number(TreasureChestParam.param['Иконка золота']);
TreasureChestParam.gold.description = TreasureChestParam.param['Описание золота'];

// Инициализация настроек окна описания предмета
TreasureChestParam.description_window = {};
TreasureChestParam.description_window.font = {};
TreasureChestParam.description_window.font['name'] = DKCore.StringToFontArray(TreasureChestParam.param['Шрифт названия предмета']);
TreasureChestParam.description_window.font['price'] = DKCore.StringToFontArray(TreasureChestParam.param['Шрифт цены предмета']);
TreasureChestParam.description_window.font['description'] = DKCore.StringToFontArray(TreasureChestParam.param['Шрифт описания предмета']);
TreasureChestParam.description_window.opacity = DKCore.StringToNumberArray(TreasureChestParam.param['Прозрачность окна описания предмета']);
TreasureChestParam.description_window.tone = DKCore.StringToNumberArray(TreasureChestParam.param['Тон окна описания предмета']);
TreasureChestParam.description_window.color = TreasureChestParam.param['Цвет цены предмета'];

// Инициализация настроек окна названия сокровищ
TreasureChestParam.name_window = {};
TreasureChestParam.name_window.font = DKCore.StringToFontArray(TreasureChestParam.param['Шрифт названия сокровищ']);
TreasureChestParam.name_window.opacity = DKCore.StringToNumberArray(TreasureChestParam.param['Прозрачность окна названия сокровищ']);
TreasureChestParam.name_window.tone = DKCore.StringToNumberArray(TreasureChestParam.param['Тон окна названия сокровищ']);
TreasureChestParam.name_window.color = TreasureChestParam.param['Цвет названия сокровищ'];

// Инициализация настроек окна сокровищ
TreasureChestParam.treasure_window = {};
TreasureChestParam.treasure_window.opacity = DKCore.StringToNumberArray(TreasureChestParam.param['Прозрачность окна сокровищ']);
TreasureChestParam.treasure_window.tone = DKCore.StringToNumberArray(TreasureChestParam.param['Тон окна сокровищ']);
TreasureChestParam.treasure_window.color = TreasureChestParam.param['Цвет линий окна сокровищ'];

// Инициализация настроек окна управления
TreasureChestParam.control_window = {};
TreasureChestParam.control_window.font = DKCore.StringToFontArray(TreasureChestParam.param['Шрифт окна управления']);
TreasureChestParam.control_window.opacity = DKCore.StringToNumberArray(TreasureChestParam.param['Прозрачность окна управления']);
TreasureChestParam.control_window.tone = DKCore.StringToNumberArray(TreasureChestParam.param['Тон окна управления']);
TreasureChestParam.control_window.color = TreasureChestParam.param['Цвет текста окна управления'];

//===========================================================================
// Data Manager
//===========================================================================

var Treasure_Chest_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
   if (!Treasure_Chest_DataManager_isDatabaseLoaded.call(this)) return false;
   this.processTreasureChestNotetags($dataItems);
   this.processTreasureChestNotetags($dataWeapons);
   this.processTreasureChestNotetags($dataArmors);
   return true;
};

DataManager.processTreasureChestNotetags = function(database) {
	var collect_note = /<[\s]*collect[\s\w]*treasure[\s]*>/i;
	var not_collect_note = /<[\s]*not[\s\w]*collect[\s\w]*treasure[\s]*>/i;
	for(var i = 1; i < database.length; i++)
	{
		var obj = database[i];
		var notedata = obj.note.split(/[\r\n]+/);
		obj.collect_treasure = TreasureChestParam.collect_treasure;
		for(var j = 0; j < notedata.length; j++)
		{
			var line = notedata[j];
			if (line.match(collect_note))
				obj.collect_treasure = true;
			if (line.match(not_collect_note))
				obj.collect_treasure = false;
		}
	}
};

var Treasure_Chest_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
	var contents = Treasure_Chest_DataManager_makeSaveContents.call(this);
	contents.Treasure_Chest = TreasureChestManager.data;
	return contents;
};

var Treasure_Chest_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
	Treasure_Chest_DataManager_extractSaveContents.call(this, contents);
	TreasureChestManager.data = contents.Treasure_Chest || [];
};

//===========================================================================
// Scene Treasure Chest
//===========================================================================

function Scene_Treasure_Chest() {
	this.initialize.apply(this, arguments);
};

Scene_Treasure_Chest.prototype = Object.create(Scene_Base.prototype);
Scene_Treasure_Chest.prototype.constructor = Scene_Base;

Scene_Treasure_Chest.prototype.create = function() {
	this.initItems();
	this.createBackground();
	this.createWindowLayer();
	this.createAllWindows();
};

Scene_Treasure_Chest.prototype.initItems = function() {
	this.input_items = TreasureChestManager.getItems();
	this.output_items = [];
};

Scene_Treasure_Chest.prototype.createBackground = function() {
	this.background = new Sprite(SceneManager.backgroundBitmap());
	this.addChild(this.background);
};

Scene_Treasure_Chest.prototype.createAllWindows = function() {
	this.createDescriptionWindow();
	this.createInputNameWindow();
	this.createOutputNameWindow();
	this.createInputWindow();
	this.createOutputWindow();
	this.createControlWindow();
};

// Windows

Scene_Treasure_Chest.prototype.createDescriptionWindow = function() {
	this.description_window = new Window_Treasure_Chest_Description(this.input_items[0]);
	this.addWindow(this.description_window);
};

Scene_Treasure_Chest.prototype.createInputNameWindow = function() {
	var name = TreasureChestManager.getNames()[0];
	if (name == null) name = 'Сокровища';
	this.input_name_window = new Window_Treasure_Chest_Name(0, this.description_window.height, name);
	this.addWindow(this.input_name_window);
};

Scene_Treasure_Chest.prototype.createOutputNameWindow = function() {
	var name = TreasureChestManager.getNames()[1];
	if (name == null) name = 'Партия';
	this.output_name_window = new Window_Treasure_Chest_Name(Graphics.boxWidth / 2, this.description_window.height, name);
	this.addWindow(this.output_name_window);
};

Scene_Treasure_Chest.prototype.createInputWindow = function() {
	var y = this.description_window.height + this.input_name_window.height;
	this.input_window = new Window_Treasure_Chest_Items(0, y, this.input_items);
	this.input_window.setHandler('ok', this.handlerInputOk.bind(this));
	this.input_window.setHandler('activate', this.handlerInputActivate.bind(this));
	this.input_window.setHandler('pageup', this.handlerInputPageUp.bind(this));
	this.input_window.setHandler('pagedown', this.handlerInputPageDown.bind(this));
	this.input_window.setHandler('left_switch_window', this.handlerInputLeftSwitchWindow.bind(this, 0));
	this.input_window.setHandler('right_switch_window', this.handlerInputRightSwitchWindow.bind(this, 0));
	this.input_window.setHandler('control_window', this.handlerInputControlWindow.bind(this, 0));
	this.addWindow(this.input_window);
};

Scene_Treasure_Chest.prototype.createOutputWindow = function() {
	var y = this.description_window.height + this.output_name_window.height;
	this.output_window = new Window_Treasure_Chest_Items(Graphics.boxWidth / 2, y, this.output_items);
	this.output_window.setHandler('ok', this.handlerOutputOk.bind(this));
	this.output_window.setHandler('activate', this.handlerOutputActivate.bind(this));
	this.output_window.setHandler('pageup', this.handlerOutputPageUp.bind(this));
	this.output_window.setHandler('pagedown', this.handlerOutputPageDown.bind(this));
	this.output_window.setHandler('left_switch_window', this.handlerOutputLeftSwitchWindow.bind(this, 1));
	this.output_window.setHandler('right_switch_window', this.handlerOutputRightSwitchWindow.bind(this, 1));
	this.output_window.setHandler('control_window', this.handlerOutputControlWindow.bind(this, 2));
	this.output_window.deactivate();
	this.addWindow(this.output_window);
};

Scene_Treasure_Chest.prototype.createControlWindow = function() {
	var y = this.description_window.height + this.input_name_window.height + this.input_window.height;
	this.control_window = new Window_Treasure_Chest_Control(0, y, this.input_window, this.output_window);
	this.control_window.setHandler('ok', this.handlerControlOk.bind(this));
	this.control_window.setHandler('activate', this.handlerControlActivate.bind(this));
	this.control_window.setHandler('takeAll', this.handlerControlTakeAll.bind(this));
	this.control_window.setHandler('putAll', this.handlerControlPutAll.bind(this));
	this.control_window.setHandler('input_window', this.handlerControlInputWindow.bind(this));
	this.control_window.setHandler('output_window', this.handlerControlOutputWindow.bind(this));
	this.control_window.deactivate();
	this.addWindow(this.control_window);
};

// Input Window handlers

Scene_Treasure_Chest.prototype.handlerInputOk = function() {
	var item = this.input_window.getItem();
	if (item == null) return this.input_window.activate();
	var index = this.input_window.index();
	this.output_window.items.push(item);
	this.input_window.items.splice(index, 1);
	this.last_index = null;
	this.input_window.refresh();
	this.input_window.activate();
	this.output_window.refresh();
	this.control_window.refresh();
};

Scene_Treasure_Chest.prototype.handlerInputActivate = function(index) {
	SoundManager.playCursor();
	this.activateInputWindow(index);
};

Scene_Treasure_Chest.prototype.handlerInputPageUp = function() {
	this.activateOutputWindow();
};

Scene_Treasure_Chest.prototype.handlerInputPageDown = function() {
	this.activateOutputWindow();
};

Scene_Treasure_Chest.prototype.handlerInputLeftSwitchWindow = function(window_mode) {
	this.leftSwitchWindowOk(window_mode);
};

Scene_Treasure_Chest.prototype.handlerInputRightSwitchWindow = function(window_mode) {
	this.rightSwitchWindowOk(window_mode);
};

Scene_Treasure_Chest.prototype.handlerInputControlWindow = function(index) {
	SoundManager.playCursor();
	this.activateControlWindow(index);
};

// Output Window handlers

Scene_Treasure_Chest.prototype.handlerOutputOk = function() {
	var item = this.output_window.getItem();
	if (item == null) return this.output_window.activate();
	var index = this.output_window.index();
	this.input_window.items.push(item);
	this.output_window.items.splice(index, 1);
	this.last_index = null;
	this.input_window.refresh();
	this.output_window.refresh();
	this.output_window.activate();
	this.control_window.refresh();
};

Scene_Treasure_Chest.prototype.handlerOutputActivate = function(index) {
	SoundManager.playCursor();
	this.activateOutputWindow(index);
};

Scene_Treasure_Chest.prototype.handlerOutputPageUp = function() {
	this.activateInputWindow();
};

Scene_Treasure_Chest.prototype.handlerOutputPageDown = function() {
	this.activateInputWindow();
};

Scene_Treasure_Chest.prototype.handlerOutputLeftSwitchWindow = function(window_mode) {
	this.leftSwitchWindowOk(window_mode);
};

Scene_Treasure_Chest.prototype.handlerOutputRightSwitchWindow = function(window_mode) {
	this.rightSwitchWindowOk(window_mode);
};

Scene_Treasure_Chest.prototype.handlerOutputControlWindow = function(index) {
	SoundManager.playCursor();
	this.activateControlWindow(index);
};

// Control Window handlers

Scene_Treasure_Chest.prototype.handlerControlOk = function() {
	var items = this.output_window.items;
	for(var i = 0; i < items.length; i++)
	{
		var item = items[i];
		if (!item.is_gold)
			$gameParty.gainItem(item, item.treasure_amount);
		else
			$gameParty.gainGold(item.price);
	}
	var data = TreasureChestManager.getData();
	data.items = this.input_window.items;
	this.popScene();
};

Scene_Treasure_Chest.prototype.handlerControlActivate = function(index) {
	SoundManager.playCursor();
	this.description_window.setItem(null);
	this.activateControlWindow(index);
	this.control_window.block_input = false;
};

Scene_Treasure_Chest.prototype.handlerControlTakeAll = function() {
		for(var i = 0; i < this.input_window.items.length; i++)
	{
		var item = this.input_window.items[i];
		this.output_window.items.push(item);
	}
	this.input_window.items = [];
	this.input_window.refresh();
	this.output_window.refresh();
	this.control_window.refresh();
	this.control_window.activate();
};

Scene_Treasure_Chest.prototype.handlerControlPutAll = function() {
		for(var i = 0; i < this.output_window.items.length; i++)
	{
		var item = this.output_window.items[i];
		this.input_window.items.push(item);
	}
	this.output_window.items = [];
	this.input_window.refresh();
	this.output_window.refresh();
	this.control_window.refresh();
	this.control_window.activate();
};

Scene_Treasure_Chest.prototype.handlerControlInputWindow = function(index) {
	SoundManager.playCursor();
	this.activateInputWindow(index);
};

Scene_Treasure_Chest.prototype.handlerControlOutputWindow = function(index) {
	SoundManager.playCursor();
	this.activateOutputWindow(index);
};

// Activate Windows

Scene_Treasure_Chest.prototype.activateInputWindow = function(index) {
	if (index === undefined) index = 0;
	this.last_index = null;
	this.input_window.activate();
	if (index === -1)
		this.input_window.selectLast();
	else
		this.input_window.select(index);
	this.output_window.deactivate();
	this.control_window.deactivate();
};

Scene_Treasure_Chest.prototype.activateOutputWindow = function(index) {
	if (index === undefined) index = 0;
	this.last_index = null;
	this.input_window.deactivate();
	this.output_window.activate();
	if (index === -1)
		this.output_window.selectLast();
	else
		this.output_window.select(index);
	this.control_window.deactivate();
};

Scene_Treasure_Chest.prototype.activateControlWindow = function(index) {
	if (index === undefined) index = 0;
	this.input_window.deactivate();
	this.output_window.deactivate();
	// Велосипед. При нажатии клавиши вниз или вверх в окне с сокровищами эта же клавиша передается в окно контроля, что без этого действия вызовет input_window или output_window (окно не переключится)
	this.control_window.block_input = true;
	this.control_window.activate();
	this.control_window.select(index);
};

// Other

Scene_Treasure_Chest.prototype.update = function() {
	Scene_Base.prototype.update.call(this);
	if (this.input_window.isOpenAndActive() && this.last_index !== this.input_window.index()) 
	{
		this.last_index = this.input_window.index();
		this.description_window.setItem(this.input_window.getItem());
	}
	else if (this.output_window.isOpenAndActive() && this.last_index !== this.output_window.index())
	{
		this.last_index = this.output_window.index();
		this.description_window.setItem(this.output_window.getItem());
	}
};

Scene_Treasure_Chest.prototype.leftSwitchWindowOk = function(window_mode) {
	var index = null;
	if (window_mode === 0)
	{
		var input_row = this.input_window.row();
		var output_max_rows = this.output_window.maxRows();
		if (output_max_rows > input_row)
			index = this.output_window.lastRowIndex(input_row);
		else
			index = this.output_window.lastRowIndex(output_max_rows - 1);
		if (index != null)
		{
			SoundManager.playCursor();
			this.output_window.block_input = true;
			this.activateOutputWindow(index);
		}
	}
	else
	{
		var output_row = this.output_window.row();
		var input_max_rows = this.input_window.maxRows();
		if (input_max_rows > output_row)
			index = this.input_window.lastRowIndex(output_row);
		else
			index = this.input_window.lastRowIndex(input_max_rows - 1);
		if (index != null)
		{
			SoundManager.playCursor();
			// Почему здесь не нужен block_input ? Еще один вопрос без ответа
			this.activateInputWindow(index);
		}
	}
};

Scene_Treasure_Chest.prototype.rightSwitchWindowOk = function(window_mode) {
	var index = null;
	if (window_mode === 0)
	{
		var input_row = this.input_window.row();
		var output_max_rows = this.output_window.maxRows();
		if (output_max_rows > input_row)
			index = this.output_window.firstRowIndex(input_row);
		else
			index = this.output_window.firstRowIndex(output_max_rows - 1);
		if (index != null)
		{
			SoundManager.playCursor();
			this.output_window.block_input = true;
			this.activateOutputWindow(index);
		}
	}
	else
	{
		var output_row = this.output_window.row();
		var input_max_rows = this.input_window.maxRows();
		if (input_max_rows > output_row)
			index = this.input_window.firstRowIndex(output_row);
		else
			index = this.input_window.firstRowIndex(input_max_rows - 1);
		if (index != null)
		{
			SoundManager.playCursor();
			this.activateInputWindow(index);
		}
	}
};

//===========================================================================
// Window Treasure Chest Description
//===========================================================================

function Window_Treasure_Chest_Description() {
	this.initialize.apply(this, arguments);
};

Window_Treasure_Chest_Description.prototype = Object.create(Window_Base.prototype);
Window_Treasure_Chest_Description.prototype.constructor = Window_Treasure_Chest_Description;

Window_Treasure_Chest_Description.prototype.initialize = function() {
	Window_Base.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, this.standardPadding() * 2 + this.lineHeight() * 3 + 6);
	DKCore.setupWindow(this, TreasureChestParam.description_window, TreasureChestParam.windowskin);
};

Window_Treasure_Chest_Description.prototype._refreshFrame = function() {
	if (!TreasureChestParam.without_frame) return Window.prototype._refreshFrame.call(this);
	var w = this._width;
    var h = this._height;
    this._windowFrameSprite.bitmap = new Bitmap(w, h);
    this._windowFrameSprite.setFrame(0, 0, w, h);
};

Window_Treasure_Chest_Description.prototype.setItem = function(item) {
	if (this.item === item) return;
	this.item = item;
	this.drawInfo();
};

Window_Treasure_Chest_Description.prototype.goldColor = function() {
	if (TreasureChestParam.description_window.color !== '1')
		return TreasureChestParam.description_window.color;
	return '#ffffff';
};

Window_Treasure_Chest_Description.prototype.drawName = function() {
	var amount = this.item.treasure_amount;
	var padding = 4;
	DKCore.setupFont(this, TreasureChestParam.description_window.font['name']);
	this.drawItemName(this.item, 0, 0, this.contentsWidth());
	if (amount > 1)
	{
		var name = this.item.name;
		if (Imported.DKCore_Rarity_Item)
			name += this.rarityName(this.item);
		var x = Window_Base._iconWidth + padding + this.textWidth(name);
		this.drawText(' x' + amount, x, 0, this.contentsWidth());
	}
};

Window_Treasure_Chest_Description.prototype.drawGameCurrencyPrice = function() {
	var currency_type = Scene_Base.prototype.processGameCurrencyTypeNotetags.call(this, this.item);
	var price = Scene_Base.prototype.processGameCurrencyPriceNotetags.call(this, this.item, currency_type);
	var unit = $gameParty.currencyName(currency_type);
	var icon = $gameParty.currencyIcon(currency_type);
	var padding = Window_Base._iconWidth;
	var y = 0;
	if (icon === -1)
		padding = this.textWidth(unit) + 6;
	if (TreasureChestParam.description_window.font['price'][1])
		x -= 4;
	var text = 'Цена: ';
	var text_width = this.textWidth(text);
	var price_width = this.textWidth(price) + padding;
	var width = text_width + price_width;
	var unitWidth = Math.min(80, this.textWidth(unit));
	var x = this.contentsWidth() - width;
	this.drawText(text, x, 0, width);
	padding = 6;
	this.changeTextColor(this.goldColor());
	if (icon !== -1)
	{
		this.drawText(price, x, y, width - padding - Window_Base._iconWidth, 'right');
		this.drawIcon(icon, x + width - Window_Base._iconWidth, y);	
	}
	else
	{
		this.drawText(price, x, y, width - unitWidth - 6, 'right');
		this.changeTextColor(this.currencyNameColor());
		this.drawText(unit, x + width - unitWidth, y, unitWidth, 'right');
	}
};

Window_Treasure_Chest_Description.prototype.drawPrice = function() {
	DKCore.setupFont(this, TreasureChestParam.description_window.font['price']);
	if (Imported.DKCore_Game_Currency && DKVersion.DKCore_Game_Currency >= 1.3)
		return this.drawGameCurrencyPrice();
	var price = this.item.price;
	var unit = TextManager.currencyUnit;
	var x = this.contentsWidth();
	if (TreasureChestParam.description_window.font['price'][1])
		x -= 4;
	var padding = 6;
	var text = 'Цена: ';
	var width = this.textWidth(text + price + unit) + padding;
	var price_width = this.textWidth(price + unit) + padding;
	this.drawText(text, x - width, 0, width);
	this.changeTextColor(this.goldColor());
	this.drawCurrencyValue(price, unit, x - price_width, 0, price_width);
};

Window_Treasure_Chest_Description.prototype.drawDescription = function() {
	var padding = 6;
	DKCore.setupFont(this, TreasureChestParam.description_window.font['description']);
	this.drawTextEx(this.item.description, 0, this.lineHeight() + padding);
};

Window_Treasure_Chest_Description.prototype.drawInfo = function() {
	this.contents.clear();
	if (this.item == null) return;
	this.changeTextColor(this.normalColor());
	this.drawName();
	this.drawPrice();
	this.drawDescription();
};

Window_Treasure_Chest_Description.prototype.update = function() {
};

//===========================================================================
// Window Treasure Chest Name
//===========================================================================

function Window_Treasure_Chest_Name() {
    this.initialize.apply(this, arguments);
}

Window_Treasure_Chest_Name.prototype = Object.create(Window_Base.prototype);
Window_Treasure_Chest_Name.prototype.constructor = Window_Treasure_Chest_Name;

Window_Treasure_Chest_Name.prototype.initialize = function(x, y, name) {
	Window_Base.prototype.initialize.call(this, x, y, Graphics.boxWidth / 2, this.standardPadding() * 2 + this.lineHeight());
	DKCore.setupWindow(this, TreasureChestParam.name_window, TreasureChestParam.windowskin);
	this.drawName(name);
};

Window_Treasure_Chest_Name.prototype._refreshFrame = function() {
	if (!TreasureChestParam.without_frame) return Window.prototype._refreshFrame.call(this);
	var w = this._width;
    var h = this._height;
    this._windowFrameSprite.bitmap = new Bitmap(w, h);
    this._windowFrameSprite.setFrame(0, 0, w, h);
};

Window_Treasure_Chest_Name.prototype.nameColor = function() {
	if (TreasureChestParam.name_window.color !== '-1')
		return TreasureChestParam.name_window.color;
	return '#ffffff';
};

Window_Treasure_Chest_Name.prototype.drawName = function(name) {
	this.contents.clear();
	DKCore.setupFont(this, TreasureChestParam.name_window.font);
	this.changeTextColor(this.nameColor());
	this.drawText(name, 0, 0, this.contentsWidth(), 'center');
};

Window_Treasure_Chest_Name.prototype.update = function() {
};

//===========================================================================
// Window Treasure Chest Items
//===========================================================================

function Window_Treasure_Chest_Items() {
	this.initialize.apply(this, arguments);
};

Window_Treasure_Chest_Items.prototype = Object.create(Window_DKCore_Command.prototype);
Window_Treasure_Chest_Items.prototype.constructor = Window_Treasure_Chest_Items;

Window_Treasure_Chest_Items.prototype.initialize = function(x, y, items) {
	this.items = items;
	this.cell_width = 38;
	this.cell_height = 38;
	Window_DKCore_Command.prototype.initialize.call(this, x, y);
	DKCore.setupWindow(this, TreasureChestParam.treasure_window, TreasureChestParam.windowskin);
	this.removeChild(this._windowCursorSprite);
	this.addChild(this._windowCursorSprite);
};

Window_Treasure_Chest_Items.prototype._refreshFrame = function() {
	if (!TreasureChestParam.without_frame) return Window.prototype._refreshFrame.call(this);
	var w = this._width;
    var h = this._height;
    this._windowFrameSprite.bitmap = new Bitmap(w, h);
    this._windowFrameSprite.setFrame(0, 0, w, h);
};

Window_Treasure_Chest_Items.prototype.windowWidth = function() {
	return Graphics.boxWidth / 2;
};

Window_Treasure_Chest_Items.prototype.windowHeight = function() {
	return this.standardPadding() * 2 + this.itemHeight() * this.numVisibleRows() + 4; // 4 - ширина линий
};

Window_Treasure_Chest_Items.prototype.standardPadding = function() {
	return 13;
};

Window_Treasure_Chest_Items.prototype.maxCols = function() {
    return 10;
};

Window_Treasure_Chest_Items.prototype.numVisibleRows = function() {
	return 8;
};

Window_Treasure_Chest_Items.prototype.drawLines = function() {
	var x = 0;
	var y = 0;
	var color = TreasureChestParam.treasure_window.color; 
	for(var i = 0; y < this.contentsHeight(); i++)
	{
		this.contents.fillRect(x, y, this.contentsWidth(), 2, color);
		y += this.cell_height;
	}
	y = 0;
	for(var i = 0; x < this.contentsWidth(); i++)
	{
		this.contents.fillRect(x, y, 2, this.contentsHeight() - 2, color);
		x += this.cell_width;
	}
};

Window_Treasure_Chest_Items.prototype.refresh = function() {
	Window_DKCore_Command.prototype.refresh.call(this);
	this.drawLines();
};

Window_Treasure_Chest_Items.prototype.getItem = function() {
	if (this.items == null) return null;
	if (this.index() === this.items.length) return null;
	return this.items[this.index()];
};

Window_Treasure_Chest_Items.prototype.cursorDown = function(wrap) {
	if (this.row() === this.maxRows() - 1 || (this.row() + 1 === this.maxRows() - 1 && !this._list[this.index() + this.maxCols()]))
		return this.callHandler('control_window');
	Window_Command.prototype.cursorDown.call(this, wrap);
	
};

Window_Treasure_Chest_Items.prototype.cursorUp = function(wrap) {
	if (this.row() === 0)
		return this.callHandler('control_window');
	Window_Command.prototype.cursorUp.call(this, wrap);
};

Window_Treasure_Chest_Items.prototype.cursorRight = function(wrap) {
	if (this.block_input)
		return this.block_input = false;
	if (this.col() === 9 || this.index() === this.maxItems() - 1)
		return this.callHandler('right_switch_window');
	Window_Command.prototype.cursorRight.call(this, wrap);
};

Window_Treasure_Chest_Items.prototype.cursorLeft = function(wrap) {
	if (this.block_input)
		return this.block_input = false;
	if (this.col() === 0)
		return this.callHandler('left_switch_window');
	Window_Command.prototype.cursorLeft.call(this, wrap);
};

Window_Treasure_Chest_Items.prototype.firstRowIndex = function(row) {
	return row * this.maxCols();
};

Window_Treasure_Chest_Items.prototype.lastRowIndex = function(row) {
	var index = this.firstRowIndex(row);
	for(var i = 0; i < this.maxCols(); i++)
		if (!this._list[index + i])
			return index + i - 1;
	return index + i - 1;
};

Window_Treasure_Chest_Items.prototype.selectLast = function() {
	this.select(this.maxItems() - 1);
};

Window_Treasure_Chest_Items.prototype.col = function() {
	return Math.floor(this.index() % this.maxCols());
};

Window_Treasure_Chest_Items.prototype.itemWidth = function() {
	return this.cell_width;
};

Window_Treasure_Chest_Items.prototype.itemHeight = function() {
	return this.cell_height;
};

Window_Treasure_Chest_Items.prototype.itemRect = function(index) {
    var rect = new Rectangle();
	rect.width = this.itemWidth();
    rect.height = this.itemHeight();
    rect.x = index % this.maxCols() * rect.width;
    rect.y = Math.floor(index / this.maxCols()) * rect.height - this._scrollY;
    return rect;
};

Window_Treasure_Chest_Items.prototype.drawItem = function(index) {
	if (this.items == null || this.items.isEmpty()) return;
	var item = this.items[index];
	var rect = this.itemRect(index);
	var x_padding = (rect.width - Window_Base._iconWidth) / 2 + 1;
	var y_padding = (rect.height - Window_Base._iconHeight) / 2 + 1;
	this.drawIcon(item.iconIndex, rect.x + x_padding, rect.y + y_padding);
};

Window_Treasure_Chest_Items.prototype.makeCommandList = function() {
	if (this.items == null) return;
	for(var i = 0; i < this.items.length; i++)
		this.addCommand('', 'ok');
	if (this.items.length === 0)
		this.addCommand('', 'ok');
};

//===========================================================================
// Window Treasure Chest Control
//===========================================================================

function Window_Treasure_Chest_Control() {
    this.initialize.apply(this, arguments);
}

Window_Treasure_Chest_Control.prototype = Object.create(Window_DKCore_Command.prototype);
Window_Treasure_Chest_Control.prototype.constructor = Window_Treasure_Chest_Control;

Window_Treasure_Chest_Control.prototype.initialize = function(x, y, input_window, output_window) {
	this.input_window = input_window;
	this.output_window = output_window;
	Window_DKCore_Command.prototype.initialize.call(this, x, y);
	DKCore.setupWindow(this, TreasureChestParam.control_window, TreasureChestParam.windowskin);
};

Window_Treasure_Chest_Control.prototype._refreshFrame = function() {
	if (!TreasureChestParam.without_frame) return Window.prototype._refreshFrame.call(this);
	var w = this._width;
    var h = this._height;
    this._windowFrameSprite.bitmap = new Bitmap(w, h);
    this._windowFrameSprite.setFrame(0, 0, w, h);
};

Window_Treasure_Chest_Control.prototype.standardPadding = function() {
	return 16;
};

Window_Treasure_Chest_Control.prototype.windowWidth = function() {
	return Graphics.boxWidth;
};

Window_Treasure_Chest_Control.prototype.windowHeight = function() {
	return this.standardPadding() * 2 + this.lineHeight();
};

Window_Treasure_Chest_Control.prototype.numVisibleRows = function() {
    return 1;
};

Window_Treasure_Chest_Control.prototype.maxCols = function() {
    return 3;
};

Window_Treasure_Chest_Control.prototype.controlColor = function() {
	if (TreasureChestParam.control_window.color !== '-1')
		return TreasureChestParam.control_window.color;
	return '#ffffff';
};

Window_Treasure_Chest_Control.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var align = this.itemTextAlign();
	this.changeTextColor(this.controlColor());
    this.changePaintOpacity(this.isCommandEnabled(index));
	DKCore.setupFont(this, TreasureChestParam.control_window.font);
    this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
};

Window_Treasure_Chest_Control.prototype.callHandler = function(symbol, index) {
	if (symbol === 'input_window' || symbol === 'output_window')
		this._handlers[symbol](index);
	else
		Window_DKCore_Command.prototype.callHandler.call(this, symbol, index);
};

Window_Treasure_Chest_Control.prototype.cursorDown = function(wrap) {
	if (this.block_input)
		return this.block_input = false;
	if (this.index() === 0)
		return this.callHandler('input_window', 0);
	if (this.index() === 2)
		return this.callHandler('output_window', 0);
	Window_DKCore_Command.prototype.cursorDown.call(this, wrap);
};

Window_Treasure_Chest_Control.prototype.cursorUp = function(wrap) {
	if (this.block_input)
		return this.block_input = false;
	if (this.index() === 0)
		return this.callHandler('input_window', -1);
	if (this.index() === 2)
		return this.callHandler('output_window', -1);
	Window_DKCore_Command.prototype.cursorUp.call(this, wrap);
};

Window_Treasure_Chest_Control.prototype.makeCommandList = function() {
	var take_all = TreasureChestManager.getTakeAll();
	if (take_all)
		var enable = take_all && this.input_window.items.length === 0;
	else
		var enable = true;
	this.addCommand('Взять все', 'takeAll', this.input_window.items.length !== 0);
	this.addCommand('Подтвердить', 'ok',  enable);
	this.addCommand('Положить все', 'putAll', this.output_window.items.length !== 0);
};

//===========================================================================
// Treasure Chest Manager
//===========================================================================

function TreasureChestManager() {
	throw new Error('This is a static class (Это статический класс!)');
};

TreasureChestManager.map_id = null;
TreasureChestManager.event_id = null;
TreasureChestManager.data = [];

TreasureChestManager.initItems = function(map_id, event_id) {
	if (this.data.hasOwnProperty(map_id))
	{
		if (this.data[map_id].hasOwnProperty(event_id))
			return;
	}
	else
		this.data[map_id] = [];
	this.data[map_id][event_id] = {};
	this.data[map_id][event_id].opened = false;
	this.data[map_id][event_id].items = [];
	this.data[map_id][event_id].names = [];
	this.data[map_id][event_id].take_all = false;	
};

TreasureChestManager.getData = function() {
	return this.data[this.map_id][this.event_id];
};

TreasureChestManager.getItems = function() {
	return this.getData().items;
};

TreasureChestManager.getOpened = function() {
	return this.getData().opened;
};

TreasureChestManager.getNames = function() {
	return this.getData().names;
};

TreasureChestManager.getTakeAll = function() {
	return this.getData().take_all;
};

TreasureChestManager.createItems = function() {
	if (this.getOpened()) return;
	var items = this.getItems();
	var data = $Treasure_Chest.data;
	for(var i = 0; i < data.length; i++)
	{
		if (i < 3) // если вещи, оружие и броня
		{
			if (data[i] == null) continue;
			var keys = Object.keys(data[i]);
			if (keys.length === 0) continue;
			for(var k = 0; k < keys.length; k++)
			{
				var id = keys[k];
				var amount = data[i][id];
				if (i === 0)
					var item = $dataItems[id];
				else if (i === 1)
					var item = $dataWeapons[id];
				else
					var item = $dataArmors[id];
				if (item.collect_treasure)
				{
						item.treasure_amount = amount;
						items.push(item);
				}
				else
					for(var j = 0; j < amount; j++)
					{
						item.treasure_amount = 1;
						items.push(item);
					}
			}
		}
		else // золото
		{
			if (data[3] == null) continue;
			if (data[3] <= 0) continue;
			var item = new Object();
			item.name = TreasureChestParam.gold.name;
			if (item.name === '-1')
				item.name = TextManager.currencyUnit;
			item.iconIndex = TreasureChestParam.gold.icon;
			item.description = TreasureChestParam.gold.description;
			item.note = '';
			if (item.description === '-1')
				item.description = '';
			item.price = data[i];
			item.is_gold = true;
			items.push(item);
		}
	}
};

TreasureChestManager.open = function(map_id, event_id, treasure_name, party_name, take_all) {
	this.map_id = map_id;
	this.event_id = event_id;
	this.initItems(map_id, event_id);
	this.createItems(map_id, event_id);
	var data = this.getData();
	data.opened = true;
	data.names = [treasure_name, party_name];
	data.take_all = take_all;
	SceneManager.push(Scene_Treasure_Chest);
};

//===========================================================================
// Game Interpreter
//===========================================================================

Game_Interpreter.prototype.openTreasureChest = function(treasure_name, party_name, take_all) {
	if (take_all == null) take_all = false;
	var map_id = $gameMap.mapId();
	var event_id = this.eventId();
	$Treasure_Chest.data = [$Treasure_Chest.item, $Treasure_Chest.weapon, $Treasure_Chest.armor, $Treasure_Chest.gold];
	TreasureChestManager.open(map_id, event_id, treasure_name, party_name, take_all);
	$Treasure_Chest = {};
};