// Подключение из node_modules
import * as noUiSlider from "nouislider";

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const rangePrices = document.querySelectorAll("[data-range-price]");
	const rangeUnits = document.querySelectorAll("[data-range-units]");
	if (rangePrices.length) {
		rangePrices.forEach((rangeItem) => {
			const fromValue = rangeItem.querySelector("[data-range-from]");
			const toValue = rangeItem.querySelector("[data-range-to]");
			const item = rangeItem.querySelector("[data-range-item]");
			var inputs = [fromValue, toValue];
			noUiSlider.create(item, {
				start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
				connect: true,
				step: 1,
				tooltips: [true, true],
				range: {
					min: Number(fromValue.dataset.rangeFrom),
					max: Number(toValue.dataset.rangeTo),
				},
				format: {
					to: function (value) {
						return parseInt(value) + " руб.";
					},
					from: function (value) {
						return parseInt(value);
					},
				},
			});
			item.noUiSlider.on("update", function (values, handle) {
				fromValue.value = parseInt(values[0]) + " руб.";
				toValue.value = parseInt(values[1]) + " руб.";
			});

			inputs.forEach(function (input, handle) {
				input.addEventListener("change", function () {
					item.noUiSlider.setHandle(handle, this.value);
				});
			});
		});
	}
	if (rangeUnits.length) {
		rangeUnits.forEach((rangeItem) => {
			const fromValue = rangeItem.querySelector("[data-range-from]");
			const toValue = rangeItem.querySelector("[data-range-to]");
			const item = rangeItem.querySelector("[data-range-item]");
			var inputs = [fromValue, toValue];
			noUiSlider.create(item, {
				start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
				connect: true,
				step: 1,
				tooltips: [true, true],
				range: {
					min: Number(fromValue.dataset.rangeFrom),
					max: Number(toValue.dataset.rangeTo),
				},
				format: {
					to: function (value) {
						return parseInt(value);
					},
					from: function (value) {
						return parseInt(value);
					},
				},
			});
			item.noUiSlider.on("update", function (values, handle) {
				fromValue.value = parseInt(values[0]);
				toValue.value = parseInt(values[1]);
			});

			inputs.forEach(function (input, handle) {
				input.addEventListener("change", function () {
					item.noUiSlider.setHandle(handle, this.value);
				});
			});
		});
	}
}
rangeInit();
