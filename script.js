const rgbInput = document.getElementById('rgbInput');
const normalizeBtn = document.getElementById('normalizeBtn');
const resultOutput = document.getElementById('resultOutput');

normalizeBtn.addEventListener('click', () => {
    const rgbValue = rgbInput.value;

    if (rgbValue) {
        resultOutput.textContent = normalizeRGB(rgbValue);
    } else {
        resultOutput.textContent = 'Insira um valor RGB válido';
    }
});

const convertToHSVBtn = document.getElementById('convertToHSVBtn');

convertToHSVBtn.addEventListener('click', () => {
    const rgbValue = rgbInput.value;

    if (rgbValue) {
        resultOutput.textContent = rgbToHsv(rgbValue);
    } else {
        resultOutput.textContent = 'Insira um valor RGB válido';
    }
});

const hsvToRGB = document.getElementById('hsvToRGB');

hsvToRGB.addEventListener('click', () => {
    const hsvValue = hsvInput.value;

    if (hsvValue) {
        resultOutput.textContent = hsvToRgb(hsvValue);
    } else {
        resultOutput.textContent = 'Insira um valor HSV válido';
    }
});

const convertToCMYKBtn = document.getElementById('convertToCMYKBtn');

convertToCMYKBtn.addEventListener('click', () => {
    const rgbValue = rgbInput.value;

    if (rgbValue) {
        resultOutput.textContent = rgbToCmyk(rgbValue);
    } else {
        resultOutput.textContent = 'Insira um valor RGB válido';
    }
});

const cmykToRGB = document.getElementById('cmykToRGB');

cmykToRGB.addEventListener('click', () => {
    const cmykValue = cmykInput.value;

    if (cmykValue) {
        resultOutput.textContent = cmykToRgb(cmykValue);
    } else {
        resultOutput.textContent = 'Insira um valor CMYK válido';
    }
});

const convertToGrayBtn = document.getElementById('convertToGrayBtn');

convertToGrayBtn.addEventListener('click', () => {
    const rgbValue = rgbInput.value;

    if (rgbValue) {
        resultOutput.textContent = rgbToGray(rgbValue);
    } else {
        resultOutput.textContent = 'Insira um valor RGB válido';
    }
});

function normalizeRGB(rgb) {
    const rgbValues = rgb.split(',').map(value => parseInt(value.trim(), 10));

    const normalizedValues = rgbValues.map(value => Math.min(255, Math.max(0, value)));

    const normalizedRGB = normalizedValues.join(', ');
    return normalizedRGB;
};

function rgbToHsv(rgb) {
    const rgbValues = rgb.split(',').map(value => parseInt(value.trim(), 10));

    const r = rgbValues[0] / 255;
    const g = rgbValues[1] / 255;
    const b = rgbValues[2] / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h, s, v;

    if (delta === 0) {
        h = 0;
    } else if (max === r) {
        h = ((g - b) / delta) % 6;
    } else if (max === g) {
        h = (b - r) / delta + 2;
    } else {
        h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }

    s = max === 0 ? 0 : (delta / max) * 100;
    v = max * 100;

    return `H: ${h}, S: ${s.toFixed(2)}%, V: ${v.toFixed(2)}%`;
};

function hsvToRgb(hsv) {
    const hsvValues = hsv.split(',').map(value => parseFloat(value.trim()));
    const h = hsvValues[0] / 360;
    const s = hsvValues[1] / 100;
    const v = hsvValues[2] / 100;

    let r, g, b;

    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }

    const rgbValues = [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    return `RGB: ${rgbValues.join(', ')}`;
};

function rgbToCmyk(rgb) {
    const rgbValues = rgb.split(',').map(value => parseInt(value.trim(), 10));

    const r = rgbValues[0] / 255;
    const g = rgbValues[1] / 255;
    const b = rgbValues[2] / 255;

    const k = 1 - Math.max(r, g, b);
    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k);

    return `CMYK: ${Math.round(c * 100)}%, ${Math.round(m * 100)}%, ${Math.round(y * 100)}%, ${Math.round(k * 100)}%`;
};

function cmykToRgb(cmyk) {
    const cmykValues = cmyk.split(',').map(value => parseFloat(value.trim().replace('%', '')) / 100);

    const c = cmykValues[0];
    const m = cmykValues[1];
    const y = cmykValues[2];
    const k = cmykValues[3];

    const r = (1 - c) * (1 - k);
    const g = (1 - m) * (1 - k);
    const b = (1 - y) * (1 - k);

    const rgbValues = [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255)
    ];

    return `RGB: ${rgbValues.join(', ')}`;
};

function rgbToGray(rgb) {
    const rgbValues = rgb.split(',').map(value => parseInt(value.trim(), 10));

    const grayValue = Math.round((rgbValues[0] + rgbValues[1] + rgbValues[2]) / 3);

    return `Escala de Cinza: ${grayValue}`;
};











