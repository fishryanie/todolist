/** @format */

export const convertCurrency = (currency, suffix = 'đ', locales = 'vi-VN') => {
  const formatter = new Intl.NumberFormat(locales);
  return currency ? `${formatter.format(currency)}${suffix}` : '0đ';
};

export const convertMillisecond = millisecond => {
  var date = new Date(parseInt(millisecond * 1000));
  return date;
};
export const replacePhoneSee = phone => {
  const phoneSee = phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1.$2.$3');
  return phoneSee || '0564.113.113';
};

export const findLocationByCompound = ({ locations = [], compound, keyCompound }) => {
  if (locations?.length && compound) {
    return locations.find(x => x.title?.toLowerCase().includes(compound[keyCompound].toLowerCase()));
  }
  return null;
};

export function throttle(callback, limit = 300) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

export const createDataTemplate = arrayLength => {
  if (arrayLength) {
    let arrayTemplate = [];
    for (let index = 0; index < arrayLength; index++) {
      arrayTemplate = [...arrayTemplate, {}];
    }
    return arrayTemplate;
  } else {
    return [];
  }
};

export const handleFormData = (objectBody = {}) => {
  if (objectBody instanceof FormData) {
    return objectBody;
  }
  const formData = new FormData();
  for (const [key, value] of Object.entries(objectBody)) {
    if (Array.isArray(value)) {
      value.forEach(v => {
        if (v || v === 0) {
          formData.append(key, v);
        }
      });
    } else if (value || value === 0) {
      formData.append(key, value);
    }
  }
  return formData;
};

export const PromiseHelperAllSettled = promises => {
  return Promise.all(
    promises.map(function (promise) {
      return promise
        .then(function (value) {
          return { state: 'fulfilled', value: value };
        })
        .catch(function (reason) {
          return { state: 'rejected', reason: reason };
        });
    })
  );
};

export const formatPhoneNumber = (phone, countryCode = '+84') => {
  let sPhone = phone.toString();
  while (sPhone.charAt(0) === '0') {
    sPhone = sPhone.slice(1);
  }
  return countryCode + sPhone;
};

export const listYearFromNow = (from = 0, sort = 1) => {
  const currentYear = new Date().getFullYear();
  return [...Array(currentYear)]
    .map((_, i) => i + 1)
    .filter(y => y >= from)
    .sort((a, b) => (a - b) * sort);
};

export function getDistanceFromUser(lat1, lon1, lat2, lon2) {
  if ((lat1, lon1, lat2, lon2)) {
    //const p = 0.017453292519943295; // Math.PI / 180
    const p = Math.PI / 180;
    const c = Math.cos;
    const a = 0.5 - c((lat2 - lat1) * p) / 2 + (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }
  return null;
}

export const randomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const convertMinutesToHours = minutes => {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} giờ ${remainingMinutes} phút`;
  } else {
    return `${minutes} phút`;
  }
};
