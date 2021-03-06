SERVER_URL = 'http://localhost:7777/';

var client = new ClientConnect({

	name: 'mikanoz',

	/**
	 * начало игры, данные юнитов
	 * @param units
	 */
	start: function (units) {
		console.log('units: ' + JSON.stringify(units));
	},

	/**
	 * юнит готов к следующему ходу
	 * @param id
	 * @param position
	 */
	ready: function (id, position) {
		Units.units[id] = position;
		console.log('ready unit [' + id + '] on ' + JSON.stringify(position));
		Units.renderAll();
	},

	/**
	 * появился новый юнит!
	 * @param id
	 * @param position
	 */
	create: function (id, position) {
		console.log('create unit [' + id + '] on ' + JSON.stringify(position));
	},

	/**
	 * юнит выполнил свой долг :(
	 * @param id
	 */
	destroy: function (id) {
		Units.remove(id);
		console.log('unit [' + id + '] is die :(');
	}

});
